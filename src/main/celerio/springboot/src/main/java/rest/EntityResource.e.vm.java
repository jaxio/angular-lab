##
## Unless required by applicable law or agreed to in writing, software
## distributed under the License is distributed on an "AS IS" BASIS,
## WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
## See the License for the specific language governing permissions and
## limitations under the License.
##
$output.java($entity.rest)##

#if($entity.hasUniqueBigIntegerAttribute())
$output.require("java.math.BigInteger")##
#end
#if($entity.hasUniqueDateAttribute()||$entity.root.hasDatePk())
$output.require("java.util.Date")##
#end
$output.require($entity.model)##
$output.require($entity.root.primaryKey)##
#foreach($enumAttribute in $entity.uniqueEnumAttributes.list)
$output.require($enumAttribute)##
#end

$output.require($entity.repository)##
$output.require("com.jaxio.demo.repository.search.*")##
$output.require("java.util.List")##
$output.require("java.util.stream.Stream")##
$output.require("java.net.URISyntaxException")##
$output.require("java.net.URI")##
$output.require("java.util.Optional")##

$output.require("javax.inject.Inject")##
$output.require("javax.transaction.Transactional")##

$output.require("org.slf4j.LoggerFactory")##
$output.require("org.slf4j.Logger")##

$output.require("org.springframework.web.bind.annotation.*")##
$output.require("org.springframework.http.MediaType")##
$output.require("org.springframework.http.ResponseEntity")##
$output.require("org.springframework.web.bind.annotation.RequestBody")##
$output.require("org.springframework.data.domain.Pageable")##
$output.require("org.springframework.data.domain.Page")##
$output.require("org.springframework.http.HttpHeaders")##
$output.require("org.springframework.http.HttpStatus")##
$output.require("org.springframework.web.bind.annotation.RequestMapping")##
$output.require("org.springframework.web.bind.annotation.RequestMethod")##
$output.require("org.springframework.web.bind.annotation.PathVariable")##
$output.require("static org.elasticsearch.index.query.QueryBuilders.queryStringQuery")##
$output.require("java.util.stream.Collectors")##
$output.require("java.util.stream.StreamSupport")##

@RestController
@RequestMapping("/api/${entity.model.vars}")
public class $output.currentClass{

    private final Logger log=LoggerFactory.getLogger(${output.currentClass}.class);

    @Inject
    private $entity.repository.type $entity.repository.var;
    
    @Inject
    private ${entity.model.type}SearchRepository ${entity.model.var}SearchRepository;

    /**
     * Create a new $entity.model.type.
     */
    @RequestMapping(value = "/",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<$entity.model.type> create(@RequestBody $entity.model.type $entity.model.var) throws URISyntaxException {
        log.debug("Create $entity.model.varUp : {}",$entity.model.var);
        if (${entity.model.var}.getId() != null) {
            return ResponseEntity.badRequest().header("Failure","Cannot create ${entity.model.varUp} with existing ID").body(null);
        }
        $entity.model.type result = ${entity.repository.var}.save($entity.model.var);
        ${entity.model.var}SearchRepository.save($entity.model.var);
        return ResponseEntity.created(new URI("/api/${entity.model.vars}/"+result.getId()))
            .body(result);
    }

    /**
     * Update $entity.model.type.
     */
    @RequestMapping(value = "/",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<$entity.model.type> update(@RequestBody $entity.model.type $entity.model.var) throws URISyntaxException {
        log.debug("Update $entity.model.varUp : {}",$entity.model.var);
        if (${entity.model.var}.getId() == null) {
            return create(${entity.model.var});
        }
        $entity.model.type result = ${entity.repository.var}.save($entity.model.var);
        ${entity.model.var}SearchRepository.save($entity.model.var);
        return ResponseEntity.ok()
            .body(result);
    }

    /**
     * Find all $entity.model.type.
     */
    @RequestMapping(value = "/",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<$entity.model.type>> findAll(Pageable pageable) throws URISyntaxException {
        log.debug("Find all $entity.model.varsUp");
        Page<${entity.model.type}> page = ${entity.repository.var}.findAll(pageable);
        return new ResponseEntity<>(page.getContent(), new HttpHeaders(), HttpStatus.OK);
    }

    /**
     * Find by id $entity.model.type.
     */
    @RequestMapping(value = "/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<$entity.model.type> findById(@PathVariable $entity.primaryKey.type $entity.primaryKey.var) throws URISyntaxException {
        log.debug("Find by id $entity.model.varsUp : {}", $entity.primaryKey.var);
        return Optional.ofNullable(${entity.repository.var}.findOne($entity.primaryKey.var))
            .map(${entity.model.var} -> new ResponseEntity<>(
                ${entity.model.var},
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Delete by id $entity.model.type.
     */
    @RequestMapping(value = "/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> delete(@PathVariable $entity.primaryKey.type $entity.primaryKey.var) throws URISyntaxException {
        log.debug("Delete by id $entity.model.varsUp : {}", $entity.primaryKey.var);
        ${entity.repository.var}.delete($entity.primaryKey.var);
        ${entity.model.var}SearchRepository.delete($entity.primaryKey.var);
        return ResponseEntity.ok().build();
    }
    
    /**
     * Mass deletion.
     */
    @RequestMapping(value = "/mass/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Transactional
    public ResponseEntity<Void> delete(@PathVariable $entity.primaryKey.type[] id) throws URISyntaxException {
        log.debug("Delete by id $entity.model.varsUp : {}", id);
        Stream.of(id).forEach(item -> {${entity.repository.var}.delete(item); ${entity.model.var}SearchRepository.delete(item);}); 
        
        return ResponseEntity.ok().build();
    }
    
    /**
     * Index all $entity.model.type.
     */
    @RequestMapping(value = "/indexAll",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public void indexAll${entity.model.varsUp}() {
    	log.debug("REST request to index all $entity.model.varsUp");
    	
    	${entity.model.var}Repository.findAll().forEach(p -> ${entity.model.var}SearchRepository.index(p));
    }
    
    /**
     * Search with ElasticSearch.
     */
    @RequestMapping(value = "/search/{query}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public List<$entity.model.type> search${entity.model.type}s(@PathVariable String query) {
        return StreamSupport
            .stream(${entity.model.var}SearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }
}