import { calculateAge } from "./helperFunctions/calculateAge.js"

class ObjectDoctor {
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
    employmentContract;
    WorkingSlots;
    patients;
    appointments;
    chats;
    
    // Constructor
    constructor(name, email, dob, gender, phoneNumber, affiliation, educationBg) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.age = calculateAge(dob);
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.affiliation = affiliation;
        this.educationBg = educationBg;
        this.status = "registered";
        this.requiredDocuments = {};
        this.employmentContract = {};
        this.WorkingSlots = [];
        this.patients = [];
        this.appointments = [];
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
  
module.exports = ObjectDoctor;
  