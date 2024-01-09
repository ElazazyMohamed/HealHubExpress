import RelationEnum from "../otherObjects/EmergencyContactEnums/RelationsEnum.js";

class RegisteredFamilyMember {
    username;
    relation;

    constructor(username, relation) {
        this.username = username;
        
        // check if relation have valid values
        if (Object.values(RelationEnum).includes(relation)) {
            this.relation = relation;
        } else {
            throw new FamilyMemberRelationError('relation');
        }
    }
}
