export class PrescriptionMedicine {
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

export class Prescription {
    doctor;
    date;
    medicines;

    constructor(doctor, date) {
        this.doctor = doctor;
        this.date = date;
        this.medicines = [];
    }
}
