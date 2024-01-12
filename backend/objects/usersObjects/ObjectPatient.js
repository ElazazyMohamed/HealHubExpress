import { calculateAge } from "./helperFunctions/calculateAge.js"
import EmergencyContact from "../otherObjects/EmergencyContact.js";

class ObjectPatient {
    _id;
    name;
    email;
    dob;
    age;
    gender;
    phoneNumber;
    emergencyContact;
    wallet;
    doctors;
    healthRecords;
    appointments;
    registeredFamilyMembers;
    unRegisteredFamilyMembers;
    prescriptions;
    chats;

    // Constructor
    constructor(name, email, dob, gender, phoneNumber, eCFullName, eCPhoneNumber, eCRelation) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.age = calculateAge(dob);
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = new EmergencyContact(eCFullName, eCPhoneNumber, eCRelation);
        this.wallet = 0;
        this.doctors = [];
        this.healthRecords = [];
        this.appointments = [];
        this.registeredFamilyMembers = [];
        this.unRegisteredFamilyMembers = [];
        this.prescriptions = [];
        this.chats = [];
    }
}
  
module.exports = ObjectPatient;
  