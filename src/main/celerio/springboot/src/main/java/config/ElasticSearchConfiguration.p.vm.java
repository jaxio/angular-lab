$output.java("${configuration.rootPackage}.config", "ElasticSearchConfiguration")##

$output.require("java.io.IOException")##

$output.require("org.elasticsearch.client.Client")##
$output.require("org.springframework.boot.autoconfigure.AutoConfigureAfter")##
$output.require("org.springframework.context.annotation.Bean")##
$output.require("org.springframework.context.annotation.Configuration")##
$output.require("org.springframework.data.elasticsearch.core.ElasticsearchTemplate")##
$output.require("org.springframework.data.elasticsearch.core.EntityMapper")##
$output.require("org.springframework.http.converter.json.Jackson2ObjectMapperBuilder")##

$output.require("com.fasterxml.jackson.databind.DeserializationFeature")##
$output.require("com.fasterxml.jackson.databind.ObjectMapper")##

/**
 * Configures ElasticSearch engine.
 */
@Configuration
@AutoConfigureAfter(value = { JacksonConfiguration.class })
public class ElasticSearchConfiguration {

    @Bean
    public ElasticsearchTemplate elasticsearchTemplate(Client client, Jackson2ObjectMapperBuilder jackson2ObjectMapperBuilder) {
        return new ElasticsearchTemplate(client, new CustomEntityMapper(jackson2ObjectMapperBuilder.createXmlMapper(false).build()));
    }

    public class CustomEntityMapper implements EntityMapper {

        private ObjectMapper objectMapper;

        public CustomEntityMapper(ObjectMapper objectMapper) {
            this.objectMapper = objectMapper;
            objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
        }

        @Override
        public String mapToString(Object object) throws IOException {
            return objectMapper.writeValueAsString(object);
        }

        @Override
        public <T> T mapToObject(String source, Class<T> clazz) throws IOException {
            return objectMapper.readValue(source, clazz);
        }
    }
}
