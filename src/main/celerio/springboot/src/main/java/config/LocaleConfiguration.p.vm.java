$output.java("${configuration.rootPackage}.config", "LocaleConfiguration")##

$output.require("org.springframework.boot.bind.RelaxedPropertyResolver")##
$output.require("org.springframework.context.EnvironmentAware")##
$output.require("org.springframework.context.MessageSource")##
$output.require("org.springframework.context.annotation.Bean")##
$output.require("org.springframework.context.annotation.Configuration")##
$output.require("org.springframework.context.support.ReloadableResourceBundleMessageSource")##
$output.require("org.springframework.core.env.Environment")##
$output.require("org.springframework.web.servlet.LocaleResolver")##
$output.require("org.springframework.web.servlet.config.annotation.InterceptorRegistry")##
$output.require("org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter")##
$output.require("org.springframework.web.servlet.i18n.LocaleChangeInterceptor")##

$output.require("com.jaxio.demo.config.locale.AngularCookieLocaleResolver")##

/**
 * Configure i18n messages for server side.
 *
 */
@Configuration
public class LocaleConfiguration extends WebMvcConfigurerAdapter implements EnvironmentAware {

    private RelaxedPropertyResolver propertyResolver;

    @Override
    public void setEnvironment(Environment environment) {
        this.propertyResolver = new RelaxedPropertyResolver(environment, "spring.messages.");
    }

    @Bean(name = "localeResolver")
    public LocaleResolver localeResolver() {
        AngularCookieLocaleResolver cookieLocaleResolver = new AngularCookieLocaleResolver();
        cookieLocaleResolver.setCookieName("NG_TRANSLATE_LANG_KEY");
        return cookieLocaleResolver;
    }

    @Bean
    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasename("classpath:/i18n/messages");
        messageSource.setDefaultEncoding("UTF-8");
        messageSource.setCacheSeconds(propertyResolver.getProperty("cache-seconds", Integer.class, -1));
        return messageSource;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor();
        localeChangeInterceptor.setParamName("language");
        registry.addInterceptor(localeChangeInterceptor);
    }
}
