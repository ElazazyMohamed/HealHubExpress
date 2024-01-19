export function calculateAge(dob) {

    const birthDate = new Date(dob);
    const currentDate = new Date();

    // Calculate the difference in years
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    const hasBirthdayOccurred = (currentDate.getMonth() > birthDate.getMonth() ||
                                (currentDate.getMonth() === birthDate.getMonth() && 
                                currentDate.getDate() >= birthDate.getDate())
                                );

    // If the birthday hasn't occurred yet, subtract 1 from the age
    if (!hasBirthdayOccurred) {
        age--;
    }
    return age;
}
