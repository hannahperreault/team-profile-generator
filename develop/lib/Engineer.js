// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, engineerGithub) {
    super(name, id, email);
    this.engineerGithub = engineerGithub;
  }
  getRole() {
    return 'Engineer';
  }

  getGithub() {
    return this.engineerGithub;
  }
}

module.exports = Engineer;
