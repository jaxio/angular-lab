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
#if($entity.hasUniqueDateAttribute() || $entity.root.hasDatePk() || !$entity.getCpkDateAttributes().isEmpty())
$output.require("java.util.Date")##
#end
$output.require($entity.model)##
$output.require($entity.root.primaryKey)##
#foreach($enumAttribute in $entity.uniqueEnumAttributes.list)
$output.require($enumAttribute)##
#end

$output.require($entity.repository)##
#if (($entity.hasSimplePk()))
$output.require("com.jaxio.demo.repository.search.${entity.model.type}SearchRepository")##
#end
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
$output.require("org.springframework.scheduling.annotation.Async")##
$output.require("org.springframework.web.bind.annotation.RequestMapping")##
$output.require("org.springframework.web.bind.annotation.RequestMethod")##
$output.require("org.springframework.web.bind.annotation.PathVariable")##
#if (($entity.hasSimplePk()))
$output.require("static org.elasticsearch.index.query.QueryBuilders.queryStringQuery")##
$output.require("java.util.stream.Collectors")##
$output.require("java.util.stream.StreamSupport")##
#end

@RestController
@RequestMapping("/api/${entity.model.vars}")
public class $output.currentClass{

    private final Logger log=LoggerFactory.getLogger(${output.currentClass}.class);

    @Inject
    private $entity.repository.type $entity.repository.var;

#if (($entity.hasSimplePk()))
    @Inject
    private ${entity.model.type}SearchRepository ${entity.model.var}SearchRepository;
#end
    /**
     * Create a new $entity.model.type.
     */
    @RequestMapping(value = "/",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<$entity.model.type> create(@RequestBody $entity.model.type $entity.model.var) throws URISyntaxException {
        log.debug("Create $entity.model.varUp : {}",$entity.model.var);
        $entity.model.type result = ${entity.repository.var}.save($entity.model.var);
#if (($entity.hasSimplePk()))        
        ${entity.model.var}SearchRepository.save($entity.model.var);
#end        
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
#if (($entity.hasSimplePk()))        
        ${entity.model.var}SearchRepository.save($entity.model.var);
#end        
        return ResponseEntity.ok()
            .body(result);
    }

    /**
     * Find all $entity.model.type.
     * WARNING: if your table has got a lot of records, you will face OutOfMemory error.
     */
    @RequestMapping(value = "/",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<$entity.model.type>> findAll() throws URISyntaxException {
        log.debug("Find all $entity.model.varsUp");
        List<${entity.model.type}> list = ${entity.repository.var}.findAll();
        return new ResponseEntity<>(list, new HttpHeaders(), HttpStatus.OK);
    }
    
    /**
     * Find all $entity.model.type by page.
     */
    @RequestMapping(value = "/bypage",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Page<$entity.model.type> findAllByPage(Pageable pageable) throws URISyntaxException {
        log.debug("Find all by page $entity.model.varsUp, page: " + pageable.getPageNumber() + ", size: " + pageable.getPageSize());
        Page<${entity.model.type}> page = ${entity.repository.var}.findAll(pageable);
        log.debug("There are " + page.getTotalElements() + " $entity.model.vars.");
        return page;
    }

#set ($str1 = "")
#set ($str2 = "")
#set ($str3 = "")
#set ($str4 = "")
#set ($str5 = "")
#set ($str6 = "")
#set ($str7 = "")
#set ($str8 = "")
#set ($str9 = "")
#generateSimpleOrCompositeKeyForURL($str1 $str2 $str3 $str4 $str5 $str6 $str7 $str8 $str9 $entity.attributes.list)
#if (($entity.hasSimplePk()))
    /**
     * Find by id $entity.model.type (for simple key).
     */
    @RequestMapping(value = "/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Transactional
    public ResponseEntity<$entity.model.type> findById(@PathVariable $entity.primaryKey.type $entity.primaryKey.var) throws URISyntaxException {
        log.debug("Find by id $entity.model.varsUp : {}.", $entity.primaryKey.var);
        
        $entity.model.type fullyLoaded${entity.model.type} = ${entity.repository.var}.findOne($entity.primaryKey.var);
#foreach ($relation in $entity.manyToMany.list)
	#if ($velocityCount == 1)
        // force object loading from database because of lazy loading settings
	#end
        fullyLoaded${entity.model.type}.${relation.to.getters}().size();
#end        		
        
		return Optional.ofNullable(fullyLoaded${entity.model.type})
            .map(${entity.model.var} -> new ResponseEntity<>(
                ${entity.model.var},
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
#else
    /**
     * Find by id $entity.model.type (for composite key).
     */
    @RequestMapping(value = "/$str1",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Transactional
    public ResponseEntity<$entity.model.type> findById($str3) throws URISyntaxException {
    	$entity.primaryKey.type $entity.primaryKey.var = new ${entity.primaryKey.type}($str4);
        log.debug("Find by id $entity.model.varsUp : {}.", $entity.primaryKey.var);
        
        $entity.model.type fullyLoaded${entity.model.type} = ${entity.repository.var}.findOne($entity.primaryKey.var);
#foreach ($relation in $entity.manyToMany.list)
	#if ($velocityCount == 1)
        // force object loading from database because of lazy loading settings
	#end
        fullyLoaded${entity.model.type}.${relation.to.getters}().size();
#end        		
        
		return Optional.ofNullable(fullyLoaded${entity.model.type})
            .map(${entity.model.var} -> new ResponseEntity<>(
                ${entity.model.var},
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
#end

#if (($entity.hasSimplePk()))
    /**
     * Delete by id $entity.model.type (for simple key).
     */
    @RequestMapping(value = "/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> delete(@PathVariable $entity.primaryKey.type $entity.primaryKey.var) throws URISyntaxException {
        log.debug("Delete by id $entity.model.varsUp : {}.", $entity.primaryKey.var);
        ${entity.repository.var}.delete($entity.primaryKey.var);
        ${entity.model.var}SearchRepository.delete($entity.primaryKey.var);        
        return ResponseEntity.ok().build();
    }
#else
	/**
     * Delete by id $entity.model.type (for composite key).
     */
    @RequestMapping(value = "/$str1",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> delete($str3) throws URISyntaxException {
	    $entity.primaryKey.type $entity.primaryKey.var = new ${entity.primaryKey.type}($str4);
        log.debug("Delete by id $entity.model.varsUp : {}.", $entity.primaryKey.var);
        ${entity.repository.var}.delete($entity.primaryKey.var); 
#if (($entity.hasSimplePk()))         
        ${entity.model.var}SearchRepository.delete($entity.primaryKey.var);
#end        
        return ResponseEntity.ok().build();
    }
#end
	
#if (($entity.hasSimplePk()))
    /**
     * Mass deletion (for simple key).
     */
    @RequestMapping(value = "/mass/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Transactional
    public ResponseEntity<Void> delete(@PathVariable $entity.primaryKey.type[] id) throws URISyntaxException {
        log.debug("Delete by id $entity.model.varsUp : {}.", (Object[])id);
        Stream.of(id).forEach(item -> {${entity.repository.var}.delete(item); #if (($entity.hasSimplePk()))${entity.model.var}SearchRepository.delete(item);#end}); 
        
        return ResponseEntity.ok().build();
    }
#else
	/**
     * Mass deletion (for composite key).
     */
    @RequestMapping(value = "/mass/$str1", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Transactional
    public ResponseEntity<Void> delete(@PathVariable $entity.primaryKey.type[] id) throws URISyntaxException {
        return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
    }
#end
    
    /**
     * Index all $entity.model.type.
     */
    @RequestMapping(value = "/indexAll",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
	@Async
    public void indexAll${entity.model.varsUp}() {
    	log.debug("REST request to index all $entity.model.varsUp");
#if (($entity.hasSimplePk()))
    	${entity.model.var}Repository.findAll().forEach(p -> {log.debug("indexing");${entity.model.var}SearchRepository.index(p);});
#end    	
    }
    
    /**
     * Search with ElasticSearch.
     */
    @RequestMapping(value = "/search/{query}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public List<$entity.model.type> search${entity.model.type}s(@PathVariable String query) {
#if (($entity.hasSimplePk()))     	
        return StreamSupport
            .stream(${entity.model.var}SearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
#else
		return null;
#end
    }
    
## --------------- One to One
#foreach ($oneToOne in $entity.oneToOne.list)
$output.require("${oneToOne.to.getPackageName()}.$oneToOne.to.type")##
    /**
     * Finder to fill relation between this entity and ${oneToOne.to.varUp}.
     * 
     * @param id id of the linked entity.
     * @return list of $entity.model.type
     * @throws URISyntaxException
     */
    @RequestMapping(value = "/findBy${oneToOne.to.type}/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<$entity.model.type>> findBy${oneToOne.to.type}(@PathVariable $oneToOne.toEntity.primaryKey.type $oneToOne.toEntity.primaryKey.var) throws URISyntaxException {
        log.debug("Find $entity.model.varsUp by ${oneToOne.to.type} id : {}.", id);
        
        ${oneToOne.to.type} ${oneToOne.toEntity.model.var} = new ${oneToOne.to.type}();
        ${oneToOne.toEntity.model.var}.setId(id);
        List<$entity.model.type> $entity.model.vars = ${entity.repository.var}.findBy${oneToOne.to.varUp}(${oneToOne.toEntity.model.var});
        
        return new ResponseEntity<List<$entity.model.type>>($entity.model.vars, new HttpHeaders(), HttpStatus.OK);
	}
#end

## --------------- Many to One
#foreach ($manyToOne in $entity.manyToOne.list)
$output.require("${manyToOne.to.getPackageName()}.$manyToOne.to.type")##
    /**
     * Finder to fill relation between this entity and ${manyToOne.to.varUp}.
     * 
     * @param id id of the linked entity.
     * @return list of $entity.model.type
     * @throws URISyntaxException
     */
    @RequestMapping(value = "/findBy${manyToOne.to.type}/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<$entity.model.type>> findBy${manyToOne.to.type}(@PathVariable $manyToOne.toEntity.primaryKey.type $manyToOne.toEntity.primaryKey.var) throws URISyntaxException {
        log.debug("Find $entity.model.varsUp by ${manyToOne.to.type} id : {}.", id);
        
        ${manyToOne.to.type} ${manyToOne.toEntity.model.var} = new ${manyToOne.to.type}();
        ${manyToOne.toEntity.model.var}.setId(id);
        List<$entity.model.type> $entity.model.vars = ${entity.repository.var}.findBy${manyToOne.to.varUp}(${manyToOne.toEntity.model.var});
        
        return new ResponseEntity<List<$entity.model.type>>($entity.model.vars, new HttpHeaders(), HttpStatus.OK);
	}
#end

#if ($entity.model.type == "Book")
    /**
     * Search books (Prototype).
     */
    @RequestMapping(value = "/search",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Book>> search(@RequestBody Book book, Pageable pageable) throws URISyntaxException {
        log.debug("Search books, page: " + pageable.getPageNumber() + ", size: " + pageable.getPageSize());
        log.debug("book: " + book);
        List<Book> books = bookRepository.search(book.getTitle() + "%", book.getDescription() + "%", book.getPrice());
        //log.debug("There are " + page.getTotalElements() + " books.");
        return new ResponseEntity<>(books, new HttpHeaders(), HttpStatus.OK);
    }
#end

## dedicated method for system entities
#if ($entity.model.type == "AppParameter")
    /**
     * Find by domain and key a AppParameter.
     */
    @RequestMapping(value = "/finder/{domain},{key}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AppParameter> findById(@PathVariable String domain, @PathVariable String key) throws URISyntaxException {
        log.debug("Find by domain and key AppParameters : " + domain + ", " + key);
        
        AppParameter appParameter = appParameterRepository.findByDomainAndKey(domain, key);
        
        return new ResponseEntity<AppParameter>(appParameter, HttpStatus.OK);
    }
#end
}