class Contacts {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  print() {
    var log = `Primer nombre ${this.name} \n Email: ${this.email} \n edad:  ${this.age} \n`;
    console.log(log);
  }
}
export default Contacts;
