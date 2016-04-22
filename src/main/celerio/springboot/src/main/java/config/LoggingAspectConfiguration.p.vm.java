$output.java("${Root.packageName}.config", "LoggingAspectConfiguration")##

$output.require("${Root.packageName}.aop.LoggingAspect")##
$output.require("org.springframework.context.annotation.*")##

/**
 * Configures logging through AOP.
 *
 */
@Configuration
@EnableAspectJAutoProxy
public class LoggingAspectConfiguration {

    @Bean
    @Profile("dev")
    public LoggingAspect loggingAspect() {
        return new LoggingAspect();
    }
}