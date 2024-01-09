import { calculateAge } from "./helperFunctions/calculateAge.js"

class ObjectPharmacist {
    #_id;
    name;
    email;
    dob;
    age;
    gender;
    phoneNumber;
    hourlyRate;
    affiliation;
    educationBg;
    status;
    requiredDocuments;
    chats;
    
    // Constructor
    constructor(name, email, dob, gender, phoneNumber, hourlyRate, affiliation, educationBg) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.age = calculateAge(dob);
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.hourlyRate = hourlyRate;
        this.affiliation = affiliation;
        this.educationBg = educationBg;
        this.status = "registered";
        this.requiredDocuments = {};
        this.chats = [];
    }

    //getter and setter for #_id
    set_Id(id) {
        this.#_id = id;
    }

    get_Id() {
        return this.#_id;
    }
}
  
module.exports = ObjectPharmacist;
  