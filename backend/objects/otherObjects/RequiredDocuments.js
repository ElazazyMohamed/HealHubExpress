class RequiredDocuments {
    id;
    license;
    degree;
    speciality;

    constructor(id, license, degree, speciality) {
        this.id = id;
        this.license = license;
        this.degree = degree;
        this.speciality = speciality;
    }
}

module.exports = RequiredDocuments;
