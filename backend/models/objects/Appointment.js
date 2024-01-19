import { AppSlot } from "./AppSlot";

export class Appointments {
    date;
    day;
    slot;
    status;
    type;
    user;

    constructor(date, day, slotNumber, status, type, user) {
        this.date = date;
        this.day = day;
        this.slot = new AppSlot(slotNumber);
        this.status = status;
        this.type = type;
        this.user = user;
    }
}
