class PrescriptionMedicine {
    medicineName;
    dosage;
    duration;
    instructions;
    filled;

    constructor(medicineName, dosage, duration, instruction, filled) {
        this.medicineName = medicineName;
        this.dosage = dosage;
        this.duration = duration;
        this.instruction = instruction;
        this.filled = filled;
    }
}

class Prescription {
    doctor;
    date;
    medicines;

    constructor(doctor, date, medicineName, dosage, duration, instruction, filled) {
        this.doctor = doctor;
        this.date = date;
        this.medicines = new PrescriptionMedicine(medicineName, dosage, duration, instruction, filled);
    }
}

module.exports = Prescription;