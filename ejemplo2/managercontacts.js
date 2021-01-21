import fs from "fs";
import Contacts from "./contacts.js";
class ManagerContact {
  constructor() {
    //fs.writeFileSync("./db.txt", "");
    this.cache = [];
    this.readFile();
  }
  createContacts(name, email, age) {
    var contact = new Contacts(name, email, age);
    this.cache.push(contact);
    this.storageData();
  }
  seach(key) {
    var newresult = this.cache.filter((item) => {
      var reg = new RegExp(item, "i");
      if (item.name.match(reg) != null) {
        return true;
      }
      return false;
    });
    newresult.map((item) => {
      item.print();
    });
  }
  showData() {
    this.cache.map((item) => {
      item.print();
    });
  }
  readFile() {
    var datos = fs.readFileSync("./db.txt");
    if (datos != "") {
      var cacheaux = JSON.parse(datos.toString());
      for (var i = 0; i < cacheaux.length; i++) {
        var contact = new Contacts(
          cacheaux[i].name,
          cacheaux[i].email,
          cacheaux[i].age
        );
        this.cache.push(contact);
      }
      console.log(this.cache);
    }
  }
  storageData() {
    var cad = JSON.stringify(this.cache);
    fs.writeFileSync("./db.txt", cad);
  }
}
export default ManagerContact;
