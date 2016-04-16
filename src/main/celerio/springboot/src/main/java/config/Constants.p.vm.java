$output.java("${configuration.rootPackage}.config", "Constants")##

/**
 * Application constants.
 */
public final class Constants {

    // Spring profile for development, production and "fast"
    public static final String SPRING_PROFILE_DEVELOPMENT = "dev";
    public static final String SPRING_PROFILE_PRODUCTION = "prod";
    public static final String SPRING_PROFILE_FAST = "fast";
    
    private Constants() {
    }
}