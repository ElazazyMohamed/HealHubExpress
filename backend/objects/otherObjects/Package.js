class Package {
    type;
    price;
    clinicDiscount;
    pharmacyDiscount;
    familyDiscount;

    constructor(type, price, clinicDiscount, pharmacyDiscount, familyDiscount) {
        this.type = type;
        this.price = price;
        this.clinicDiscount = clinicDiscount;
        this.pharmacyDiscount = pharmacyDiscount;
        this.familyDiscount = familyDiscount;
    }
}

module.exports = Package;
