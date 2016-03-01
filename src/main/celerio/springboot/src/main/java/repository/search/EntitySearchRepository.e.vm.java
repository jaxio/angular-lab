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

#if ($entity.hasSimplePk())
$output.require($entity.model)##
$output.require("org.springframework.data.elasticsearch.repository.ElasticsearchRepository")##
#end

/**
 * Spring Data ElasticSearch repository for the entity named: $entity.getName().
 */
#if ($entity.hasSimplePk())
public interface ${output.currentClass} extends ElasticsearchRepository<$entity.model.type, $entity.root.primaryKey.type> {
#else
public interface ${output.currentClass} {
	// Entity with composite primary key are not supported by Spring Data ElasticSearch project (01 march 2016)
	// so this feature is desactivated
#end
}
