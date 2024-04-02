class Venta {
    constructor(juego,cuota1,cuota2){
        this.juego = juego;
        this.cuota1 = cuota1;
        this.cuota2 = cuota2;
    }

    VenderJuego(){
        return this.juego;
    }

    ConseguirCuota1(){
        return this.cuota1;
    }

    ConseguirCuota2(){
        return this.cuota2;
    }
}

export default Venta