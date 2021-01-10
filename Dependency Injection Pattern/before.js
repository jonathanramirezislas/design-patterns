class Cerveza{
    constructor(nombre, alcohol){
        this.nombre =  nombre;
        this.alcohol= alcohol;
        //Issue doing this is bad practtices beacuse if you add a new prop here you have to add in th rest of code (Cantiner , instances )
    }
}

class Cantinero {

    constructor(nombre, nombreCerveza, alcohol){
        this.nombre = nombre;
        this.cerveza =  new this.cerveza(nombreCerveza, alcohol)
    }

    servir(){
        console.log(`${this.nombre} sirviendo cerveza ${this.cerveza.nombre}`)
    }

}

let cantinero = new Cantinero("Jonathan","Hineka", 20);
cantinero.cerveza();