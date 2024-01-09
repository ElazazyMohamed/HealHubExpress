class ObjectAdmin {
  #_id;  
  name;

  // Constructor
  constructor(name) {
    this.name = name;
  }

  //getter and setter for #_id
  set_Id(id) {
    this.#_id = id;
  }

  get_Id() {
    return this.#_id;
  }
}
  
module.exports = ObjectAdmin;
  