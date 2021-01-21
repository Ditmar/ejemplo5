const stdin = process.openStdin();
import ManagerContact from "./managercontacts.js";
async function main() {
  var manager = new ManagerContact();
  do {
    console.log("[1] Agregar Contacto");
    console.log("[2] Buscar Contacto");
    console.log("[3] Eliminar Contacto");
    console.log("[4] Mostrar todos");
    console.log("[5] Salir");
    var keyborad = await readKeyBoard();
    var options = parseInt(keyborad);
    switch (options) {
      case 1: {
        console.log("Ponga el nombre");
        var name = await readKeyBoard();
        console.log("Ponga el email");
        var email = await readKeyBoard();
        console.log("Ponga la edad");
        var edad = await readKeyBoard();
        manager.createContacts(name, email, edad);
        break;
      }
      case 2: {
        console.log("Buscar por nombre");
        var key = await readKeyBoard();
        manager.seach(key);
        break;
      }
      case 3: {
        break;
      }
      case 4: {
        manager.showData();
        break;
      }
    }
  } while (options != 5);
  console.log("TERMINO!");
}
function readKeyBoard() {
  return new Promise((resolve, reject) => {
    stdin.addListener("data", (read) => {
      resolve(read.toString());
    });
  });
}
main();
