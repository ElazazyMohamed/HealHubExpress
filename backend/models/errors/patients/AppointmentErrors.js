export class AppointmentErrors extends Error {
    constructor(errorName) {
        super('Invalid appointment ' + errorName);
        this.name = "InvalidAppointment" + errorName.charAt(0).toUpperCase() + errorName.slice(1) + "Error";
    }
}
