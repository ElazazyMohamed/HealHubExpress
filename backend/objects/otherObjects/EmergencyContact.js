import { RelationEnum } from './Enums/patient/EmergencyContactEnums/RelationsEnum.js';
import FamilyMemberRelationError from '../errors/patients/FamilyMemberErrors.js';

class EmergencyContact {
    fullName;
    phoneNumber;
    relation;

    // Constructor
    constructor(fullName, phoneNumber, relation) {
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;

        // check if relation have valid values
        if (Object.values(RelationEnum).includes(relation)) {
            this.relation = relation;
        } else {
            throw new FamilyMemberRelationError('relation');
        }
    }
}

module.exports = EmergencyContact;
