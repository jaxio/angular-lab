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
$output.java("com.jaxio.demo.repository.search", "${entity.model.type}SearchRepository")##

$output.require($entity.model)##
$output.require("org.springframework.data.elasticsearch.repository.ElasticsearchRepository")##

/**
 * Spring Data ElasticSearch repository for the Report entity.
 */
public interface ${output.currentClass} extends ElasticsearchRepository<$entity.model.type, $entity.root.primaryKey.type> {
}
