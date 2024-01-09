class HealthRecord {
    date;
    uploadedBy;
    description;
    file;
    doctorNotes;

    constructor(date, uploadedBy, description, file, doctorNotes) {
        this.date = date;
        this.uploadedBy = uploadedBy;
        this.description = description;
        this.file = file;
        this.doctorNotes = doctorNotes;
    }
}