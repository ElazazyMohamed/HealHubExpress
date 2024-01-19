// ageUpdateTask.js
import schedule from 'node-schedule';
import calculateAge from "../backend/models/helperFunctions/calculateAge.js";
import patientsModel from "../backend/models/schemas/Patients.js";
import doctorsModel from "../backend/models/schemas/Doctors.js";
import pharmacistsModel from "../backend/models/schemas/Pharmacists.js";

// Schedule a job to run every day at midnight
schedule.scheduleJob('0 0 * * *', async () => { // start at midnight
    try {
        const today = new Date();
        const todayMonth = today.getMonth() + 1; // Month is zero-based, so add 1
        const todayDay = today.getDate();

        // creating a query to check for todays birthday
        const dobQuery = {
            $expr: {
                $and: [
                    { $eq: [{ $dayOfMonth: "$dob" }, todayDay] },
                    { $eq: [{ $month: "$dob" }, todayMonth] },
                ],
            },
        };

        // fetch patients need to update age
        const patientsToUpdate = await patientsModel.find(dobQuery);
        // Update age for each patient
        await Promise.all(patientsToUpdate.map(async (patient) => {
            patient.age = calculateAge(patient.dob);
            await patient.save();
        }));

        // fetch doctors need to update age
        const doctorsToUpdate = await doctorsModel.find(dobQuery);
        // Update age for each doctor
        await Promise.all(doctorsToUpdate.map(async (doctor) => {
            doctor.age = calculateAge(doctor.dob);
            await doctor.save();
        }));

        // fetch pharmacists need to update age
        const pharmacistsToUpdate = await pharmacistsModel.find(dobQuery);
        // Update age for each pharmacist
        await Promise.all(pharmacistsToUpdate.map(async (pharmacist) => {
            pharmacist.age = calculateAge(pharmacist.dob);
            await pharmacist.save();
        }));

        console.log('Age update job completed successfully.');
    } catch (error) {
        console.error('Error updating ages:', error);
    }
});
