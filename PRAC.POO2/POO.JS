class Empleado {
    constructor(id, Nombre, FechaIngreso, Salario){
        this.id = id;
        this.Nombre = Nombre;
        this.FechaIngreso = FechaIngreso;
        this.Salario = Salario;
    }

    CalcularTiempo(){
        let fechaActual = new Date();
        let fechaYear = fechaActual.getFullYear();
        let fechaSplit = this.FechaIngreso.split("-");
        return console.log(fechaYear - fechaSplit[2]);
    }

    getSalario() {
        return this.Salario;
    }

    setNombre(Nombre){
        return this.Nombre = Nombre;
    }

    setSalario(Salario){
        return this.Salario = Salario;
    }

    CalcularBonificacion(){
        if(this.CalcularTiempo() == 1){
            let bonificacion = this.Salario * 0.05;
            console.log("La bonificacion es de :$" + bonificacion);
        }else if(this.CalcularTiempo() == 2){
            let bonificacion = this.Salario * 0.01;
            console.log("la bonificacion es de : $" + bonificacion);
        }else if(this.CalcularTiempo() == 3){ // parte agregada
            let bonificacion = this.Salario * 0.15;
            console.log("La bonificacion es de : $" + bonificacion);
        }else if(this.CalcularTiempo() == 4){
            let bonificacion = this.Salario * 0.2;
            console.log("La bonificacion es de : $" + bonificacion);
        } else {
            return console.log("No tienes ninguna bonificacion.");
        }
    }
}

class Departamento{
    constructor(nombre){
        this.nombre = nombre;
        this.empleadoList = [];
        this.gerente;
    }

    AgregarEmpleadoList(Empleado){
        let empleadoExiste = this.empleadoList.indexOf(Empleado);
        if(empleadoExiste != -1){

        console.log("No se encontro al empleado");
        }else{
            this.empleadoList.push(Empleado);
            console.log("Se agreago el empleado correctamente");
        }
    }

    CalcularSumaSalario(){
        let sumaSalario = 0
        if(this.empleadoList.length > 0){
            this.empleadoList.forEach}((Empleado => {
                sumaSalario += Empleado.getSalario;
            }));
            console.log("Suma del departamento: $" + sumaSalario);
        }

    AsignarGerente(gerente) { //parte agregada
        this.gerente = gerente;
        console.log("Se asignó un gerente al departamento: " + gerente.Nombre);
    }

    EliminarEmpleadoList(Empleado){
        let posicionEmpleado = this.empleadoList.indexOf(Empleado);

        if(posicionEmpleado != -1){
            this.empleadoList.splice(posicionEmpleado, 1)
            console.log("Empleado eliminado correctamente");
        } else {
            console.log("no se econtro al empleado en el departamento");
        }
    }
}

const Empleado1 = new Empleado(1, "Gustavo","02-05-1999", 450);
const Empleado2 = new Empleado(2, "Michelle","03-06-2001",500);

const depa = new Departamento("RRHH");
depa.AgregarEmpleadoList(Empleado1);
depa.AgregarEmpleadoList(Empleado2);

const gerenteDepartamento = new Empleado(3, "Gerente Orlin", "1995-03-10", 800);
depa.AsignarGerente(gerenteDepartamento);

depa.EliminarEmpleadoList(Empleado1);
Empleado1.CalcularTiempo();

// solo pude puede hacer la parte del gerente y llamar al empleado eliminado. :(