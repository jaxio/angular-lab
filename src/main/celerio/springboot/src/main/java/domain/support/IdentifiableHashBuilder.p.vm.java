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
$output.java($ModelSupport, "IdentifiableHashBuilder")##

$output.require("java.io.Serializable")##
$output.require("java.util.logging.Logger")
$output.require("com.jaxio.jpa.querybyexample.Identifiable")##

/**
 * The first time the {@link ${pound}hash(Logger, Identifiable)} is called, we check if the primary key is present or not.
 * <ul>
 * <li>If yes: we use it to get the hash</li>
 * <li>If no: we use a VMID during the entire life of this instance even if later on this instance is assigned a primary key.</li>
 * </ul>
 */
public class $output.currentClass implements Serializable {
    private static final long serialVersionUID = 1L;
    private Object technicalId;

    public int hash(Logger log, Identifiable<?> identifiable) {
        if (technicalId == null) {
            if (identifiable.${identifiableProperty.iser}()) {
                technicalId = identifiable.${identifiableProperty.getter}();
            } else {
                technicalId = new java.rmi.dgc.VMID();
                log.warning("DEVELOPER: hashCode is not safe." //
                        + "If you encounter this message you should take the time to carefuly " //
                        + "review the equals/hashCode methods for: " + identifiable.getClass().getCanonicalName() //
                        + " You may consider using a business key.");
            }
        }
        return technicalId.hashCode();
    }
}
