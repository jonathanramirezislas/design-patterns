
  
  class Comida{

    cook(){
        console.log('Food is ready');
    }
  }
  
  class Hotdog extends Comida {
      constructor(){

        console.log('New Hotdog');
        super();
        this.cook();
      }
  }
  
  class Hambuguer extends Comida {
      constructor(){

        console.log('New Hamburger');
        super();
        this.cook();
      }

      addCheese(){
          console.log('cheese added')
      }
  }
  
  class JonaRestaruant   {
    createProduct(name) {
      switch(name) {
        case 'hotdog':
          return new Hotdog();
        case 'hamburguer':
          return new Hambuguer();
        default:
          return null;
      }
    }
  }
  

    const factory = new JonaRestaruant();
    const hotdog = factory.createProduct('hotdog');

    const hambuguer = factory.createProduct('hamburguer');
    hambuguer.addCheese();
