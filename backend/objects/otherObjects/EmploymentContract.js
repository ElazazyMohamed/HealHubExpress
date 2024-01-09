class EmploymentContract {
    employeeName;
    employerName;
    startDate;
    endDate;
    jobTitle;
    speciality;
    hourlyRate;
    signature;
    signingDate;

    constructor(employeeName, startDate, endDate, jobTitle, speciality, hourlyRate, markup) {
        this.employeeName = employeeName;
        this.employerName = "HEALHUBEXPRESS HOSPITAL";
        this.startDate = startDate;
        this.endDate = endDate;
        this.jobTitle = jobTitle;
        this.speciality = speciality;
        this.hourlyRate = hourlyRate;
        this.markup = markup;
    }
}

module.exports = EmploymentContract;
