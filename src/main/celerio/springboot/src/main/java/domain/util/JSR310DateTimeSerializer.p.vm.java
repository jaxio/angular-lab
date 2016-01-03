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
$output.java("${configuration.rootPackage}.domain.util", "JSR310DateTimeSerializer")##

import java.io.IOException;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAccessor;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public final class JSR310DateTimeSerializer extends JsonSerializer<TemporalAccessor> {

    private static final DateTimeFormatter ISOFormatter =
        DateTimeFormatter.ISO_OFFSET_DATE_TIME.withZone(ZoneId.of("Z"));

    public static final JSR310DateTimeSerializer INSTANCE = new JSR310DateTimeSerializer();

    private JSR310DateTimeSerializer() {}

    @Override
    public void serialize(TemporalAccessor value, JsonGenerator generator, SerializerProvider serializerProvider) throws IOException {
        generator.writeString(ISOFormatter.format(value));
    }
}
