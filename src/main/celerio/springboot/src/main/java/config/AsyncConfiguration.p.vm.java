$output.java("${configuration.rootPackage}.config", "AsyncConfiguration")##

$output.require("${configuration.rootPackage}.async.ExceptionHandlingAsyncTaskExecutor")##

$output.require("org.slf4j.Logger")##
$output.require("org.slf4j.LoggerFactory")##
$output.require("org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler")##
$output.require("org.springframework.aop.interceptor.SimpleAsyncUncaughtExceptionHandler")##
$output.require("org.springframework.context.annotation.Bean")##
$output.require("org.springframework.context.annotation.Configuration")##
$output.require("org.springframework.scheduling.annotation.*")##
$output.require("org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor")##

$output.require("java.util.concurrent.Executor")##

$output.require("javax.inject.Inject")##

/**
 * Configures asynchronous execution. 
 *
 */
@Configuration
@EnableAsync
@EnableScheduling
public class AsyncConfiguration implements AsyncConfigurer {

    private final Logger log = LoggerFactory.getLogger(AsyncConfiguration.class);

    @Inject
    private ApplicationProperties applicationProperties;

    @Override
    @Bean(name = "taskExecutor")
    public Executor getAsyncExecutor() {
        log.debug("Creating Async Task Executor");
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(applicationProperties.getAsync().getCorePoolSize());
        executor.setMaxPoolSize(applicationProperties.getAsync().getMaxPoolSize());
        executor.setQueueCapacity(applicationProperties.getAsync().getQueueCapacity());
        executor.setThreadNamePrefix("Application-Executor-");
        
        return new ExceptionHandlingAsyncTaskExecutor(executor);
    }

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return new SimpleAsyncUncaughtExceptionHandler();
    }
}