
var pokemones=[
    "veneko",
    "pikachu",
    "charizar"
];

var salud=[
    "1100",
    "1200",
    "1300"
];
var daño=[
    "500",
    "700",
    "800"
];

var name01=prompt("Escoja su pokemon 0)veneko salud:1100 daño:500 1)pikachu salud:1200 daño:700 2)chaizar  salud:1300 daño:800");
var name02=prompt("Escoja su pokemon 0)veneko salud:1100 daño:500 1)pikachu salud:1200 daño:700 2)chaizar  salud:1300 daño:800");

var name1 =parseInt(name01);
var name2 =parseInt(name02);


function restar (a,b){
    restar1(a-b);
};

if(name1 == 0 && name2 == 1) {
    var pelea = salud[0] - daño[1];
    alert("El jugador 2 gana" + " " + "vida restante:" + " " +pelea);
    alert("gana pikachu");
    
}else if (name1==0 && name2 ==2){
    var pelea = salud[0] - daño[2];
    alert("El jugador 2 gana" + " " + "vida restante:" + " " +pelea);
    alert("gana chaizar");
}else if (name1 == 0 && name2 == 0) {
    var pelea = salud[0] - daño[0];
    alert("Empate" + " " + "vida restante:" + " " + pelea);
    alert("no hay nagador");
}

else if(name1 == 1 && name2 == 0) {
    var pelea = salud[1] - daño[0];
    alert("El jugador 1 gana" + " " + "vida restante:" + " " + pelea);
}else if (name1==1 && name2 ==2){
    var pelea = salud[1] - daño[2];
    alert("El jugador 1 gana" + " " + "vida restante:" + " " + pelea);
    alert("gana pikachu");
}else if (name1 == 1 && name2 == 1) {
    var pelea = salud[1] - daño[1];
    alert("Empate" + " " + "vida restante:" + " " + pelea);
    alert("no hay nagador");
}

else if(name1 == 2 && name2 == 0) {
    var pelea = salud[2] - daño[0];
    alert("El jugador 1 gana" + " " + "vida restante:" + " " +pelea);
    alert("gana chaizar");
}else if (name1==2 && name2 ==1){
    var pelea = salud[2] - daño[1];
    alert("El jugador 1 gana" + " " + "vida restante:" + " " +pelea);
    alert("gana chaizar");
}else if (name1 == 2 && name2 == 2) {
    var pelea = salud[2] - daño[2];
    alert("Empate" + " " + "vida restante:" + " " + pelea);
    alert("no hay nagador");
};




