$output.java("${configuration.rootPackage}.config", "ApplicationProperties")##

$output.require("org.springframework.boot.context.properties.ConfigurationProperties")##

/**
 * All application properties.
 *
 * <p>
 *     Properties are configured in the application.yml file.
 * </p>
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {

    private final Async async = new Async();
    
    private final Mail mail = new Mail();

    public Async getAsync() {
        return async;
    }
    
    public Mail getMail() {
        return mail;
    }

    /**
     * Properties linked to Spring Boot asynchronous engine.
     *
     */
    public static class Async {

        private int corePoolSize = 2;

        private int maxPoolSize = 50;

        private int queueCapacity = 10000;

        public int getCorePoolSize() {
            return corePoolSize;
        }

        public void setCorePoolSize(int corePoolSize) {
            this.corePoolSize = corePoolSize;
        }

        public int getMaxPoolSize() {
            return maxPoolSize;
        }

        public void setMaxPoolSize(int maxPoolSize) {
            this.maxPoolSize = maxPoolSize;
        }

        public int getQueueCapacity() {
            return queueCapacity;
        }

        public void setQueueCapacity(int queueCapacity) {
            this.queueCapacity = queueCapacity;
        }
    }
    
    public static class Mail {

    	// FIXME: hard coded
        private String from = "application@localhost";

        public String getFrom() {
            return from;
        }

        public void setFrom(String from) {
            this.from = from;
        }
    }
}