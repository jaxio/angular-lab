##
## Unless required by applicable law or agreed to in writing, software
## distributed under the License is distributed on an "AS IS" BASIS,
## WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
## See the License for the specific language governing permissions and
## limitations under the License.
##
$output.java($entity.repository)##

#if ($entity.hasUniqueBigIntegerAttribute())
$output.require("java.math.BigInteger")##
#end
#if ($entity.hasUniqueDateAttribute() || $entity.root.hasDatePk())
$output.require("java.util.Date")##
#end
$output.require($entity.model)##
$output.require($entity.root.primaryKey)##
#foreach ($enumAttribute in $entity.uniqueEnumAttributes.list)
$output.require($enumAttribute)##
#end
$output.require("org.springframework.data.jpa.repository.*")##
#if ($entity.manyToOne.size > 0)
$output.require("java.util.List")##
#end

/**
 * $entity repository.
 * 
 * @author bertrand
 *
 */
public interface $output.currentClass extends JpaRepository<$entity.model.type, $entity.root.primaryKey.type> {

## --------------- Many to One
#foreach ($manyToOne in $entity.manyToOne.list)
	/**
	 * Find ${entity.model.vars} linked to an $manyToOne.to.var id (case: Many to One).
	 * 
	 * @param id ${manyToOne.to.var} id
	 * @return ${entity.model.var} list
	 */
#if ($manyToOne.toEntity.primaryKey.isSimple())
	List<$entity> findBy${manyToOne.to.type}Id(${manyToOne.toEntity.primaryKey.type} id);
	
#else
	// not yet implemented !
#end	
#end

## --------------- Many to many
#foreach ($manyToMany in $entity.manyToMany.list)
	/**
	 * Find ${entity.model.vars} linked to a $manyToMany.to.var id (case: Many to Many).
	 * 
	 * @param id ${manyToMany.to.var} id
	 * @return ${entity.model.var} list
	 */
#if ($manyToMany.toEntity.primaryKey.isSimple())
	List<$entity> findBy${manyToMany.to.type}sId(Integer id);
	
#else
	// not yet implemented !
#end
#end
}