import { SlotEnum } from './Enums/patient/AppointmentEnums/SlotEnum';

class Slot {
    date;
    day;
    slotNumber;
    startTime;
    endTime;
    isReserved;

    constructor(date, slotNumber) {
        const dateObj = new Date(date);

        // Extracting year
        let year = this.date.getFullYear();
        // Extracting month
        let month = this.date.getMonth() + 1; // Months are zero-based, so we add 1
        if(month.length < 2) {
            month = '0' + month;
        }
        // Extracting day
        let day = this.date.getDate();
        if(day.length < 2) {
            day = '0' + day;
        }

        const datePart = year + '-' + month + '-' + day;

        // check if slot have valid values
        if (Object.values(SlotEnum).includes(slotNumber)) {
            this.slotNumber = slotNumber;
        } else {
            throw new AppointmentErrors('slot');
        }
        
        let timePart;
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

        this.date = new Date(datePart+timePart);
        this.day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dateObj); // returns the day Name
        this.slotNumber = slotNumber;
        this.isReserved = false;
    }
}

module.exports = Slot;
