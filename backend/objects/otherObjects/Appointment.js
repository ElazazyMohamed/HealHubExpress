import { DayEnum } from './Enums/patient/AppointmentEnums/DayEnum.js';
import { SlotEnum } from './Enums/patient/AppointmentEnums/SlotEnum.js';
import { StatusEnum } from './Enums/patient/AppointmentEnums/StatusEnum.js';
import { TypeEnum } from './Enums/patient/AppointmentEnums/TypeEnum.js';
import AppointmentErrors from '../errors/patients/AppointmentErrors.js';

class Appointments {
    date;
    day;
    slot;
    status;
    type;
    user; // doctor _id or patient _id

    constructor(date, day, slot, status, type, user) {
        this.date = date;

        // check if day have valid values
        if (Object.values(DayEnum).includes(day)) {
            this.daya = day;
        } else {
            throw new AppointmentErrors('day');
        }

        // check if slot have valid values
        if (Object.values(SlotEnum).includes(slot)) {
            this.daya = day;
        } else {
            throw new AppointmentErrors('slot');
        }

        // check if status have valid values
        if (Object.values(StatusEnum).includes(status)) {
            this.daya = day;
        } else {
            throw new AppointmentErrors('status');
        }

        // check if type have valid values
        if (Object.values(TypeEnum).includes(type)) {
            this.daya = day;
        } else {
            throw new AppointmentErrors('type');
        }

        this.user = user;
    }
}