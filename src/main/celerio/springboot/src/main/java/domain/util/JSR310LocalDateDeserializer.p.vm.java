## Copyright 2015 JAXIO http://www.jaxio.com
##
## Licensed under the Apache License, Version 2.0 (the "License");
## you may not use this file except in compliance with the License.
## You may obtain a copy of the License at
##
##    http://www.apache.org/licenses/LICENSE-2.0
##
## Unless required by applicable law or agreed to in writing, software
## distributed under the License is distributed on an "AS IS" BASIS,
## WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
## See the License for the specific language governing permissions and
## limitations under the License.
##
$output.java("${configuration.rootPackage}.domain.util", "JSR310LocalDateDeserializer")##

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

/**
 * Custom Jackson deserializer for transforming a JSON object (using the ISO 8601 date formatwith optional time)
 * to a JSR310 LocalDate object.
 */
public class JSR310LocalDateDeserializer extends JsonDeserializer<LocalDate> {

    public static final JSR310LocalDateDeserializer INSTANCE = new JSR310LocalDateDeserializer();

    private JSR310LocalDateDeserializer() {}

    private static final DateTimeFormatter ISO_DATE_OPTIONAL_TIME;

    static {
        ISO_DATE_OPTIONAL_TIME = new DateTimeFormatterBuilder()
            .append(DateTimeFormatter.ISO_LOCAL_DATE)
            .optionalStart()
            .appendLiteral('T')
            .append(DateTimeFormatter.ISO_OFFSET_TIME)
            .toFormatter();
    }

    @Override
    public LocalDate deserialize(JsonParser parser, DeserializationContext context) throws IOException {
        switch(parser.getCurrentToken()) {
            case START_ARRAY:
                if(parser.nextToken() == JsonToken.END_ARRAY) {
                    return null;
                }
                int year = parser.getIntValue();

                parser.nextToken();
                int month = parser.getIntValue();

                parser.nextToken();
                int day = parser.getIntValue();

                if(parser.nextToken() != JsonToken.END_ARRAY) {
                    throw context.wrongTokenException(parser, JsonToken.END_ARRAY, "Expected array to end.");
                }
                return LocalDate.of(year, month, day);

            case VALUE_STRING:
                String string = parser.getText().trim();
                if(string.length() == 0) {
                    return null;
                }
                return LocalDate.parse(string, ISO_DATE_OPTIONAL_TIME);
        }
        throw context.wrongTokenException(parser, JsonToken.START_ARRAY, "Expected array or string.");
    }
}
