//Products
class ProductIphone {
    constructor(modelo){
        this.modelo=modelo
    }
  }
  
   class ProductIpad {
     constructor(modelo){
         this.modelo=modelo
     }
  }
  
  //Factories
  class IphoneFactory {
    createProduct(modelo){
      return new ProductIphone(modelo);
    }
  }
  
  class IpadFactory  {
    createProduct(modelo) {
      return new ProductIpad(modelo);
    }
  }
  
//Factory

 class AppleFactory{
    constructor(){
        this.ProductIphone = new IphoneFactory;
        this.ProductIpad = new IpadFactory;
    }

    obtenerIphone(){
        return this.ProductIphone;
    }

    
    obtenerIpad(){
        return this.ProductIpad;
    }

 }

 const Factory = new AppleFactory();
 const iphone = Factory.obtenerIphone().createProduct('SE 488');
 const ipad = Factory.obtenerIpad().createProduct('ol');
