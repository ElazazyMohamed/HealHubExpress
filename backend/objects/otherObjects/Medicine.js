class Medicine {
    name;
    ingredients;
    price;
    quantity;
    archive;
    salesHistory;
    description;
    medicalUse;
    prescribed;
    image;

    constructor(name, ingredients, price, quantity, description, medicalUse, prescribed, image) {
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
        this.quantity = quantity;
        this.archive = false;
        this.salesHistory = [];
        this.description = description;
        this.medicalUse = medicalUse;
        this.prescribed = prescribed;
        this.image = image;
    }
}

module.exports = Medicine;
