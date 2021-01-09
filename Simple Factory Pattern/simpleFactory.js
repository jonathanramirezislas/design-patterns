class Pizza{
    constructor(jamon ,pinya){
        this.jamon= jamon;
        this.pinya=pinya;
    }

    rodajsjamon(){
        return this.jamon
    }
    rodajasPiya(){
        return this.pinya;
    }
}

class Hamburguesa{

    constructor(bacon, queso){
        this.bacon= bacon;
        this.queso=queso;
    }

    rodajasPiya(){
        return this.pinya;
    }

    piezasdequeso(){
        return this.queso;
    }
}


const PizzaFactiria = {
    cocinarPizza: (jamon, piya)=> new Pizza(jamon,piya)
}


const HamburguesaFactiria = {
    cocinarHamburguesa: (bacon, queso)=> new Hamburguesa(bacon, queso)
}

const pizza1= PizzaFactiria.cocinarPizza(false,true);

console.log(pizza1);