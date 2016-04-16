$output.java("${configuration.rootPackage}.aop", "LoggingAspect")##

$output.require("org.aspectj.lang.JoinPoint")##
$output.require("org.aspectj.lang.ProceedingJoinPoint")##
$output.require("org.aspectj.lang.annotation.AfterThrowing")##
$output.require("org.aspectj.lang.annotation.Around")##
$output.require("org.aspectj.lang.annotation.Aspect")##
$output.require("org.aspectj.lang.annotation.Pointcut")##
$output.require("org.slf4j.Logger")##
$output.require("org.slf4j.LoggerFactory")##
$output.require("org.springframework.core.env.Environment")##

$output.require("javax.inject.Inject")##
$output.require("java.util.Arrays")##

/**
 * Aspect for logging execution of service and repository Spring components.
 */
@Aspect
public class LoggingAspect {

	private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Inject
    private Environment env;

    @Pointcut("within(${configuration.rootPackage}.repository..*) || within(${configuration.rootPackage}.rest..*)")
    public void loggingPointcut() {
    }

    @AfterThrowing(pointcut = "loggingPointcut()", throwing = "e")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable e) {
        if (env.acceptsProfiles("dev")) {
            log.error("Exception in {}.{}() with cause = {} and exception {}", joinPoint.getSignature().getDeclaringTypeName(),
                joinPoint.getSignature().getName(), e.getCause(), e);
        } else {
            log.error("Exception in {}.{}() with cause = {}", joinPoint.getSignature().getDeclaringTypeName(),
                joinPoint.getSignature().getName(), e.getCause());
        }
    }

    @Around("loggingPointcut()")
    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable {
        if (log.isDebugEnabled()) {
            log.debug("Enter: {}.{}() with argument[s] = {}", joinPoint.getSignature().getDeclaringTypeName(),
                joinPoint.getSignature().getName(), Arrays.toString(joinPoint.getArgs()));
        }
        long t1 = System.currentTimeMillis();
        try {        	
            Object result = joinPoint.proceed();
            long t2 = System.currentTimeMillis();
            if (log.isDebugEnabled()) {
                log.debug("Exit: {}.{}() with result = {} and duration = {}", joinPoint.getSignature().getDeclaringTypeName(),
                    joinPoint.getSignature().getName(), result, (t2-t1));
            }
            // track excessive durations
            // value 5000 should be updatable via JMX
            if (t2-t1 > 5000) {
            	log.warn("\r\n\r\nPerformance issue in {}.{}()\r\ntook {} s\r\n\r\n", joinPoint.getSignature().getDeclaringTypeName(),
                        joinPoint.getSignature().getName(), (t2-t1)/1000); 
            }
            return result;
        } catch (IllegalArgumentException e) {
        	long t2 = System.currentTimeMillis();
            log.error("Illegal argument: {} in {}.{}() and duration = {}", Arrays.toString(joinPoint.getArgs()),
                    joinPoint.getSignature().getDeclaringTypeName(), joinPoint.getSignature().getName(), (t2-t1));

            throw e;
        }
    }
}
