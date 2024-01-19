export class AppSlot {
    slotNumber;
    startTime;
    endTime;

    constructor(slotNumber) {
        this.slotNumber = slotNumber;
        
        switch (slotNumber) {
            case "1st":
                this.startTime = "9:00 AM";
                this.endTime = "10:30 AM";
                timePart = "T9:00:00.000Z";
            break;
            case "2nd":
                this.startTime = "10:45 AM";
                this.endTime = "12:15 PM";
                timePart = "T10:45:00.000Z";
            break;
            case "3rd":
                this.startTime = "12:30 PM";
                this.endTime = "2:00 PM";
                timePart = "T12:30:00.000Z";
            break;
            case "4th":
                this.startTime = "2:30 PM";
                this.endTime = "4:00 PM";
                timePart = "T14:30:00.000Z";
            break;
            case "5th":
                this.startTime = "4:30 PM";
                this.endTime = "6:00 PM";
                timePart = "T16:30:00.000Z";
            break;
        }
    }
}
