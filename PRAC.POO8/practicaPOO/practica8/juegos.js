class Videojuegos {
    constructor(nombre,empresa,year){
        this.nombre = nombre;
        this.empresa = empresa;
        this.año = year;
    }

    ConseguirNombre(){
        return this.nombre;
    }

    ConseguirEmpresa(){
        return this.empresa;
    }

    ConseguirYear(){
        return this.year;
    }
}

export default Videojuegos;