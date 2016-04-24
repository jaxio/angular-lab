$output.java($Root, "Application")##

$output.require("org.slf4j.Logger")##
$output.require("org.slf4j.LoggerFactory")##
$output.require("org.springframework.boot.SpringApplication")##
$output.require("org.springframework.boot.autoconfigure.SpringBootApplication")##
$output.require("org.springframework.core.env.Environment")##
$output.require("org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories")##
$output.require("org.springframework.data.jpa.repository.config.EnableJpaRepositories")##
$output.require("org.springframework.boot.context.properties.EnableConfigurationProperties")##
$output.require("${configuration.rootPackage}.config.ApplicationProperties")##

@SpringBootApplication
@EnableJpaRepositories("$Repository.packageName")
@EnableElasticsearchRepositories("${Repository.packageName}.search")
@EnableConfigurationProperties({ ApplicationProperties.class}) 
public class Application {

	private static final Logger log = LoggerFactory.getLogger(Application.class);
	
    public static void main(String[] args) {
    	SpringApplication app = new SpringApplication(Application.class);
        Environment env = app.run(args).getEnvironment();
        
        String contextPath = env.getProperty("server.contextPath");
        String serverPort = env.getProperty("server.port");
        
        log.info("\n\nAccess URLs:\n----------------------------------------------------------\n\t" +
                "Local: \t\thttp://127.0.0.1:" + serverPort + contextPath + "\n\n");
    }
}
