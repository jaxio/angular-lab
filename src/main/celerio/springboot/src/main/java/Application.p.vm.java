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
$output.java($Root,"Application")##

$output.require("org.slf4j.Logger")##
$output.require("org.slf4j.LoggerFactory")##
$output.require("org.springframework.boot.SpringApplication")##
$output.require("org.springframework.boot.autoconfigure.SpringBootApplication")##
$output.require("org.springframework.core.env.Environment")##
$output.require("org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories")##
$output.require("org.springframework.data.jpa.repository.config.EnableJpaRepositories")##

@SpringBootApplication
@EnableJpaRepositories("com.jaxio.demo.repository")
@EnableElasticsearchRepositories("com.jaxio.demo.repository.search")
public class Application {

	private static final Logger log = LoggerFactory.getLogger(Application.class);
	
    public static void main(String[] args) {
    	SpringApplication app = new SpringApplication(Application.class);
        Environment env = app.run(args).getEnvironment();
        
        log.info("\n\nAccess URLs:\n----------------------------------------------------------\n\t" +
                "Local: \t\thttp://127.0.0.1:8080");
    }
}
