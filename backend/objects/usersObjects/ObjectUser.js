class ObjectUser {
  username;
  password;
  role;
  referenceId;

  // Constructor
  constructor(username, password, role, referenceId) {
    this.username = username;
    this.password = password;
    this.role = role;
    this.referenceId = referenceId;
  }
}
  
module.exports = ObjectUser;
  