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
$output.java($primaryKey.packageName, $primaryKey.type)##

$output.requireStatic("org.apache.commons.lang.StringUtils.isNotEmpty")##
$output.require("com.google.common.base.Objects")##
$output.require("javax.persistence.Transient")##
$output.require("java.io.Serializable")##
#if($configuration.has($COPYABLE))
$output.require($ModelSupport,"Copyable")##    
#end

$output.dynamicAnnotationTakeOver("javax.persistence.Embeddable")
public class $output.currentClass implements Comparable<$output.currentRootClass>#if($configuration.has($COPYABLE)), Copyable<${primaryKey.type}>#end, Serializable {
    private static final long serialVersionUID = 1L;

#foreach ($attribute in $primaryKey.attributes)
$output.require($attribute)##
    private $attribute.type $attribute.var;
#end

    /**
     * Simple constructor.
     */
    public ${output.currentClass}() {
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
#generateSimpleOrCompositeKeyForURL($str1 $str2 $str3 $str4 $str5 $str6 $str7 $str8 $str9 $str10 $primaryKey.entity.attributes.list)    
    /**
     * Constructor with each part of the composite key as a parameter.
     */
    public ${output.currentClass}($str5) {
#foreach ($attribute in $primaryKey.attributes)
        this.$attribute.var = $attribute.var;
#end
    }

    /**
     * Helper to determine if this composite primary key is fully set.
     */
    @Transient
    public boolean areFieldsSet() {
        return#foreach ($attribute in $primaryKey.attributes)#if ($velocityCount>1) &&#end ${attribute.has}()#end;
    }

    /**
     * Helper method to determine if this instance is considered empty, that is,
     * if all the non primary key columns are null.
     */
    @Transient
    public boolean isEmpty() {
        return #foreach($pkAttribute in $primaryKey.attributes)#if ($velocityCount != 1) && #end!${pkAttribute.has}()#end;
    }

#foreach ($attribute in $primaryKey.attributes)

    //-- [${attribute.var}] ------------------------------

#if($attribute.hasComment())$attribute.javadoc#end
#foreach ($annotation in $attribute.custom.annotations)
    $annotation
#end
#foreach ($annotation in $attribute.validation.annotations)
    $annotation
#end
#foreach ($annotation in $attribute.jpa.annotations)
    $annotation
#end
#foreach ($annotation in $attribute.formatter.annotations)
    $annotation
#end
    public $attribute.type ${attribute.getter}() {
        return $attribute.var;
    }
#if ($attribute.isEnum())

    public boolean is($attribute.type $attribute.var) {
        return ${attribute.getter}() == $attribute.var;
    }
#end

    public void ${attribute.setter}($attribute.type $attribute.var) {
        this.$attribute.var = $attribute.var;
    }

    public ${output.currentRootClass} ${attribute.with}($attribute.type $attribute.var) {
    	${attribute.setter}($attribute.var);
    	return ${output.currentRootCast}this;
    }
    
#if ($attribute.hasIntSetter())

    /**
     * Helper method to set the $attribute.var attribute via an int.
     * @see ${pound}${attribute.setter}($attribute.type)
     */
    public void ${attribute.setter}(int $attribute.var) {
        this.$attribute.var = ${attribute.type}.valueOf($attribute.var);
    }

    public ${output.currentRootClass} ${attribute.with}(int $attribute.var) {
    	${attribute.with}($attribute.var);
    	return ${output.currentRootCast}this;
    }
    
#end

    /**
     * Helper that determines if this attribute is set or not.
     */
    @Transient
    public boolean ${attribute.has}() {
        return ${attribute.getter}() != null#if ($attribute.isString() && !$attribute.isEnum()) && !${attribute.getter}().isEmpty()#elseif($attribute.isBlob()) && ${attribute.getter}().length != 0#end;
    }
#end

    @Override
    public boolean equals(Object other) {
        return this == other || (other instanceof $output.currentClass && hashCode() == other.hashCode());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(
#foreach ($attribute in $primaryKey.attributes)
            ${attribute.getter}()$project.print($velocityHasNext,", //", ");")
#end
    }

    @Override
    public int compareTo($primaryKey.type other) {
        return other == null ? -1 : hashCode() - other.hashCode();
    }

   /**
    * Return the string representation of the composite primary key, it should be reversable by version produced by the {@link ${pound}String()} method
    */
    @Override
    public String toString() {
        StringBuilder result = new StringBuilder();
#foreach ($attribute in $primaryKey.attributes)
#if ($velocityCount > 1)
        result.append(":");
#end
        if (${attribute.has}()) {
#if ($attribute.isDate())
            result.append(${attribute.getter}().getTime());
#else
            result.append(${attribute.getter}());
#end
        }
#end

        return result.toString();
    }

    /**
     * Build an instance from a string version produced by the {@link ${pound}toString()} method
     */
    public static $output.currentRootClass fromString(String string) {
        $output.currentRootClass result = new ${output.currentRootClass}();
        String[] values = string.split(":");
#foreach ($attribute in $primaryKey.attributes)
#set( $index = $velocityCount - 1)##
        if (isNotEmpty(values[$index])) {
#if($attribute.isEnum() || $attribute.isLong() || $attribute.isInteger() || $attribute.isDouble() || $attribute.isFloat())
            result.${attribute.setter}(${attribute.type}.valueOf(values[$index]));
#else
            result.${attribute.setter}(${attribute.mappedType.getJavaDefinition("values[$index]")});
#end
        }
#end

        return result;
    }
#if ($configuration.has($COPYABLE))

    /**
     * Return a copy of the current object
     */
    @Override
    @Transient
    $output.dynamicAnnotation("javax.xml.bind.annotation.XmlTransient")
    public ${primaryKey.type} copy() {
    	${primaryKey.type} ${primaryKey.var} = new ${primaryKey.type}();
        copyTo(${primaryKey.var});
        return ${primaryKey.var};
    }

    /**
     * Copy the current properties to the given object
     */
    @Override
    @Transient
    $output.dynamicAnnotation("javax.xml.bind.annotation.XmlTransient")
    public void copyTo(${primaryKey.type} ${primaryKey.var}) {
#foreach ($attribute in $primaryKey.attributes)
        ${primaryKey.var}.${attribute.setter}(${attribute.getter}());
#end
    }
#end
}
