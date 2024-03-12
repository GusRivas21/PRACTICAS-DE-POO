//clase abstracta
/*class serVivo {
    constructor(){

    }

    alimentarse(){

    }
}
class Planta extends serVivo {
constructor(){
    super()
}
alimentarse(){
    console.log("la plana se alimenta de la luz")
}
}

class Animal extends serVivo{

}

class AnimalCarnivoro extends Animal{
    constructor(){
        super()
    }

    alimentarse(){
        console.log("el animal carnivoro se alimenta de carner")
    }
}

const plantita = new Planta();
plantita.alimentarse();
const leon = new AnimalCarnivoro()
leon.alimentarse()*/

//polimorfismo
/*class Vehiculo{
    constructor(placa,marca,modelo){
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
    }
    mostrarDatos(){
        return `El vehiculo ${this.marca} es de un modelo ${this.modelo} con placa ${this.placa}`
    }
}

class Sedan extends Vehiculo{
    constructor(placa,marca,modelo,puertas){
        super(placa,marca,modelo)
        this.puertas = puertas;
    }
    mostrarDatos(){
        return console.log(`el vehiculo ${this.marca} de marca ${this.modelo} con placa de ${this.placa} tiene ${this.puertas} puertas`);
    }
}

const toyotaC = new Sedan("p-345320","toyota","corolla",4);
toyotaC.mostrarDatos();*/

