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
$output.require("org.springframework.jdbc.core.JdbcTemplate")##
$output.require("java.util.ArrayList")##
$output.require("org.springframework.jdbc.core.BeanPropertyRowMapper")##
$output.require("org.springframework.beans.factory.annotation.Autowired")##
$output.require("org.springframework.data.domain.PageImpl")##
$output.require("org.springframework.data.domain.PageRequest")##

@RestController
@RequestMapping("/api/${entity.model.vars}")
public class $output.currentClass{

    private final Logger log=LoggerFactory.getLogger(${output.currentClass}.class);

    @Inject
    private $entity.repository.type $entity.repository.var;

    @Autowired
    private JdbcTemplate jdbcTemplate;
    
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
#set ($str10 = "")
#generateSimpleOrCompositeKeyForURL($str1 $str2 $str3 $str4 $str5 $str6 $str7 $str8 $str9 $str10 $entity.attributes.list)
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
    	log.debug("REST request to index all $entity.model.varsUp, START");
#if (($entity.hasSimplePk()))
    	${entity.model.var}Repository.findAll().forEach(p -> {log.debug("indexing");${entity.model.var}SearchRepository.index(p);});
    	
    	PageRequest request = new PageRequest(0, 1000);
        try {
        	Page<$entity.model.type> page = findAllByPage(request);
        	page.forEach(p -> ${entity.model.var}SearchRepository.index(p));
                         
             while (page.hasNext()) {
                    request = new PageRequest(request.getPageNumber() + 1, 1000);
                    
                    log.debug("we are indexing page: " + (request.getPageNumber() + 1));
                    
                    page = findAllByPage(request);
                    page.forEach(p -> ${entity.model.var}SearchRepository.index(p));
              }
        } catch (Exception e) {
        	log.error("", e);
        }

        log.debug("REST request to index all $entity.model.varsUp, EXIT");
#end    	
    }
    
    /**
     * Search with ElasticSearch.
     */
    @RequestMapping(value = "/esearch/{query}",
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
    
    /**
     * Count $entity.model.type.
     * FIXME: this method should be asynchronous because it can take times to count all records !
     */
    @RequestMapping(value = "/count",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Long> count() throws URISyntaxException {
        log.debug("Count $entity.model.vars");
        long count = ${entity.model.var}Repository.count();
        
        return new ResponseEntity<>(count, new HttpHeaders(), HttpStatus.OK);
    }

#if (($entity.hasSimplePk()))
    /**
     * Check if a $entity.model.type exists via its id.
     */
    @RequestMapping(value = "/exists/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> exists(@PathVariable $entity.primaryKey.type $entity.primaryKey.var) throws URISyntaxException {
    	log.debug("Check $entity.model.var existence via its id: {}.", id);
    	Boolean exists = ${entity.model.var}Repository.exists(id);
        
        return new ResponseEntity<>(exists, new HttpHeaders(), HttpStatus.OK);
    }
#else
	/**
     * Check if a $entity.model.type exists via its composite id.
     */
    @RequestMapping(value = "/exists/$str1",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> exists($str3) throws URISyntaxException {
		$entity.primaryKey.type $entity.primaryKey.var = new ${entity.primaryKey.type}($str4);
    	log.debug("Check $entity.model.var existence via its id: {}.", $entity.primaryKey.var);
    	Boolean exists = ${entity.model.var}Repository.exists($entity.primaryKey.var);
        
        return new ResponseEntity<>(exists, new HttpHeaders(), HttpStatus.OK);
    }
#end	

## --------------- One to One
#set( $MethodsHistoryMap = {}) ## Map
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
$!{MethodsHistoryMap.put("findBy${oneToOne.to.type}", "findBy${oneToOne.to.type}")}
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
     * $MethodsHistoryMap.size()
     */
    @RequestMapping(value = "/findBy${manyToOne.to.type}/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
$!{MethodsHistoryMap.put("findBy${manyToOne.to.type}", "findBy${manyToOne.to.type}")}
    public ResponseEntity<List<$entity.model.type>> findBy${manyToOne.to.type}(@PathVariable $manyToOne.toEntity.primaryKey.type $manyToOne.toEntity.primaryKey.var) throws URISyntaxException {
        log.debug("Find $entity.model.varsUp by ${manyToOne.to.type} id : {}.", id);
        
        ${manyToOne.to.type} ${manyToOne.toEntity.model.var} = new ${manyToOne.to.type}();
        ${manyToOne.toEntity.model.var}.setId(id);
        List<$entity.model.type> $entity.model.vars = ${entity.repository.var}.findBy${manyToOne.to.varUp}(${manyToOne.toEntity.model.var});
        
        return new ResponseEntity<List<$entity.model.type>>($entity.model.vars, new HttpHeaders(), HttpStatus.OK);
	}
#end

    /**
     * Search $entity.model.vars.
     */
    @RequestMapping(value = "/search",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Page<$entity.model.type> search(@RequestBody $entity.model.type $entity.model.var, Pageable pageable) throws URISyntaxException {
        log.debug("Search $entity.model.vars, page: " + pageable.getPageNumber() + ", size: " + pageable.getPageSize());
        log.debug("$entity.model.var: " + $entity.model.var);
        
        long total = ${entity.model.var}Repository.count();
        
        String sqlMainPart = "select * from (select $str10 from $entity.getTableName() where 1=1"; 
        String sqlSecondaryPart = "";
        
        List<Object> values = new ArrayList<Object>();
        
#foreach ($attribute in $entity.attributes.list)
	#if (!$attribute.isInFk() && !$attribute.isInCpk())
		if (${entity.model.var}.get${attribute.varUp}() != null) {
			#if ($attribute.isString())
				sqlSecondaryPart += " and upper($attribute.var) like ? ";
				values.add(${entity.model.var}.get${attribute.varUp}().toUpperCase() + "%");
			#else
				sqlSecondaryPart += " and $attribute.var = ? ";
				values.add(${entity.model.var}.get${attribute.varUp}());
			#end			
		}
	#end
#end
        
        sqlSecondaryPart += ") where rownum <= ?";
        values.add(pageable.getPageSize());
        
        log.debug("SQL: " + sqlMainPart + " " + sqlSecondaryPart);
        List<$entity.model.type> $entity.model.vars = jdbcTemplate.query(sqlMainPart + " " + sqlSecondaryPart, 
        		values.toArray(), 
        		new BeanPropertyRowMapper<$entity.model.type>(${entity.model.type}.class));
        
        Page<$entity.model.type> page = new PageImpl<$entity.model.type>($entity.model.vars, pageable, total);
        
        return page;
    }

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