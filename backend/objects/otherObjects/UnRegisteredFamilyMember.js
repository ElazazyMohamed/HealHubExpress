import RelationEnum from "../otherObjects/EmergencyContactEnums/RelationsEnum.js";

class UnRegisteredFamilyMember {
    name;
    nationalId;
    age;
    gender;
    relation;

    constructor(name, nationalId, age, gender, relation) {
        this.name = name;
        this.nationalId = nationalId;
        this.age = age;
        this.gender = gender;

        // check if relation have valid values
        if (Object.values(RelationEnum).includes(relation)) {
            this.relation = relation;
        } else {
            throw new FamilyMemberRelationError('relation');
        }
    }
}
