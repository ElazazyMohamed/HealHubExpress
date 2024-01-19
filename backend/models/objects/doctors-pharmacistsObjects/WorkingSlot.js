import { AppSlot } from "../AppSlot";

export class WorkingSlot {
    day;
    slot;

    constructor(day, slotNumber) {
        this.day = day;
        this.slot = new AppSlot(slotNumber);
    }
}
