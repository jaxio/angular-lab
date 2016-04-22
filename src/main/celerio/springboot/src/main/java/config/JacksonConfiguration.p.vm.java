$output.java("${configuration.rootPackage}.config", "JacksonConfiguration")##

$output.require("${Model.packageName}.util.*")##

$output.require("com.fasterxml.jackson.databind.SerializationFeature")##
$output.require("com.fasterxml.jackson.datatype.jsr310.JavaTimeModule")##
$output.require("java.time.*")##
$output.require("org.springframework.http.converter.json.Jackson2ObjectMapperBuilder")##
$output.require("org.springframework.context.annotation.Bean")##
$output.require("org.springframework.context.annotation.Configuration")##

/**
 * Configures Jasckon conversion.
 * 
 */
@Configuration
public class JacksonConfiguration {

    @Bean
    Jackson2ObjectMapperBuilder jackson2ObjectMapperBuilder() {
        JavaTimeModule module = new JavaTimeModule();
        module.addSerializer(OffsetDateTime.class, JSR310DateTimeSerializer.INSTANCE);
        module.addSerializer(ZonedDateTime.class, JSR310DateTimeSerializer.INSTANCE);
        module.addSerializer(LocalDateTime.class, JSR310DateTimeSerializer.INSTANCE);
        module.addSerializer(Instant.class, JSR310DateTimeSerializer.INSTANCE);
        module.addDeserializer(LocalDate.class, JSR310LocalDateDeserializer.INSTANCE);
        return new Jackson2ObjectMapperBuilder()
                .featuresToDisable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
                .findModulesViaServiceLoader(true)
                .modulesToInstall(module);
    }
}
