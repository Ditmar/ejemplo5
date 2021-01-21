var numbers = 12.3434;
var strings = "ESTO ES UNA CADENA";
var obj = {
  name: "Carlos",
  lastname: "Flores",
  calcularSalario: function (salariobruto) {
    return salariobruto - salariobruto * 0.13;
  },
};
console.log(numbers);
console.log(strings);
console.log(obj);
console.log(obj.name);
console.log(obj.lastname);
console.log(obj.calcularSalario(2000));
var animals = [
  "ANTONIO",
  "MANUEL",
  "JOSE",
  "FRANCISCO",
  "DAVID",
  "JUAN",
  "JOSE ANTONIO",
  "JAVIER",
  "DANIEL",
  "JOSE LUIS",
  "FRANCISCO JAVIER",
  "CARLOS",
  "JESUS",
  "ALEJANDRO",
  "MIGUEL",
  "JOSE MANUEL",
  "RAFAEL",
  "MIGUEL ANGEL",
  "PEDRO",
  "PABLO",
  "ANGEL",
  "SERGIO",
  "JOSE MARIA",
  "FERNANDO",
  "JORGE",
  "LUIS",
  "ALBERTO",
  "JUAN CARLOS",
  "ALVARO",
  "ADRIAN",
  "JUAN JOSE",
  "DIEGO",
  "RAUL",
  "IVAN",
  "JUAN ANTONIO",
  "RUBEN",
  "ENRIQUE",
  "OSCAR",
  "RAMON",
  "VICENTE",
  "ANDRES",
  "JUAN MANUEL",
  "JOAQUIN",
  "SANTIAGO",
  "VICTOR",
  "EDUARDO",
  "MARIO",
  "ROBERTO",
  "JAIME",
  "FRANCISCO JOSE",
  "MARCOS",
  "IGNACIO",
  "ALFONSO",
  "JORDI",
  "HUGO",
  "RICARDO",
  "SALVADOR",
  "GUILLERMO",
  "EMILIO",
  "GABRIEL",
  "MARC",
  "GONZALO",
  "JULIO",
  "JULIAN",
  "MOHAMED",
  "JOSE MIGUEL",
  "TOMAS",
  "MARTIN",
  "AGUSTIN",
  "JOSE RAMON",
  "NICOLAS",
  "ISMAEL",
  "JOAN",
  "FELIX",
  "SAMUEL",
  "CRISTIAN",
  "AITOR",
  "LUCAS",
  "HECTOR",
  "JUAN FRANCISCO",
  "IKER",
  "JOSEP",
  "JOSE CARLOS",
  "ALEX",
  "MARIANO",
  "DOMINGO",
  "SEBASTIAN",
  "ALFREDO",
  "CESAR",
  "JOSE ANGEL",
  "FELIPE",
  "JOSE IGNACIO",
  "VICTOR MANUEL",
  "RODRIGO",
  "LUIS MIGUEL",
  "MATEO",
  "JOSE FRANCISCO",
  "JUAN LUIS",
  "XAVIER",
  "ALBERT",
];
var ci = [
  "8511030",
  "13229787",
  "10560487",
  "6675023",
  "8638110",
  "6706251",
  "8533019",
  "8517159",
  "8535547",
  "8616522",
  "13165417",
  "8637482",
  "8533906",
  "8524390",
  "8619869",
  "13167172",
  "8539525",
  "8616302",
  "10537034",
  "8533859",
  "8523768",
  "8526297",
  "13325484",
  "8523798",
  "8585089",
  "8519669",
  "8521143",
  "8507242",
  "8621267",
  "12687449",
  "8576050",
  "13661788",
  "8655332",
  "10471634",
  "6603504",
  "6671951",
  "14346089",
  "8617009",
  "8525850",
  "10470395",
  "8520658",
  "10468751",
  "8617006",
  "12813031",
  "8522855",
  "10513638",
];
var studentNames = [
  "MUÑOZ MAURICIO DAYLER",
  "RAMIREZ JHAMILE MARCELA",
  "ANZE SALVATIERRA JOSE MANUEL",
  "BARRERA LORA JULIO CESAR",
  "BERAZAIN PEREZ YASSIR ALEXANDER",
  "BOBARIN MARTINEZ MAURICIO",
  "CASTILLO CONDORI GROVER",
  "CEJAS PATRICIO ARIEL ERWIN",
  "CHARA LLANOS PEDRO LUIS",
  "CHOQUE VILLCA KEVIN BRANDON",
  "CHURA IPORRE CRISTHIAN",
  "COLQUE APAZA GUALBERTO JOSE",
  "COLQUE CHECCHI JHONN DERLIS",
  "CORO PORCEL VICTOR HUGO",
  "DELGADILLO VILLARROEL DANIEL DILAN",
  "DELGADO MAMANI CAMILA VICTORIA",
  "DIAZ TERRAZAS NICOLAS FERNANDO",
  "FABIAN TORREZ JENNY MARILYN",
  "FLORES CHAMBI LUANA KAREN",
  "GARCIA CRUZ JHERSON REYNALDO",
  "GARNICA GUTIERREZ JHON ELVIS JESUS",
  "GOMEZ RAMOS MAGAYI",
  "HUARACHI APAZA LUIS ALEJANDRO",
  "HUMANES MéNDEZ RODRIGO",
  "LLANOS LOPEZ HENRY DEYVID",
  "MALDONADO RAMIREZ WILLIAN",
  "MAMANI CORDOVA ALFREDO",
  "MAMANI IBARRA GABRIEL JHAMIL",
  "MAMANI OSORIO MAJHORY",
  "MARINO CONDORI WILVER DAVID",
  "MENCHACA VELÁSQUEZ BECKET RAMIRO",
  "MENDOZA LÓPEZ YÁSCARA MARIANED",
  "MENDOZA MANRIQUE CRISTIAN NELSON",
  "MIRANDA FLORES MARIA FERNANDA",
  "MONDACA VARGAS CRISTHIAN",
  "ÑUCO MAMANI NILDA KATERYN",
  "QUISPE APAZA SAUL FERNANDO",
  "RAMOS ORCKO YOVANA EDITH",
  "ROMANO MARCA CESAR MANUEL",
  "RUIZ CHAMBI JESUS JUNIOR",
  "RUIZ SACACA DEYANEIRA NICOL",
  "SORIA ALI MARCO ANTONIO",
  "TACURI JUCHANI SERGIO ARMANDO",
  "TITO TORREZ ROSAYCELA",
  "VASQUEZ GONZALES ADRIANA ISABEL",
  "ZAMUDIO TRUJILLO GONZALO",
];

animals.push("Leon");
console.log("Recorrido con un for");
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
console.log("========== TERMINA EL FOR =================");
//evento por  eseo javascript
//se dice que tiene el paradigma de programacion
//orientado a eventos

console.log("el recorrido con map");
animals.map((item) => {
  console.log(item);
});
console.log("========== TERMINA EL RECORRIDO MAP =================");
console.log("Recorrido con un foreach");
animals.forEach((item) => {
  console.log(item);
});
console.log("========== TERMINA EL RECORRIDO FORECH =================");

animals = animals.sort();

animals = animals.filter((item) => {
  if (item.match(/^A.+$/g) != null) {
    return true;
  }
  return false;
});

//crear un hashmap
var hashmap = [];
for (var i = 0; i < ci.length; i++) {
  hashmap[ci[i]] = {
    lastname:
      studentNames[i].split(" ")[0] + " " + studentNames[i].split(" ")[1],
    name: studentNames[i].split(" ")[2],
  };
}
console.log(hashmap["8507242"]);
