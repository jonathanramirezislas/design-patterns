class Office {

    constructor(name, employees){
        this.name= name;
        this.employees=employees;
    
    //if there is already a instance of Office we return that instance    
    if(typeof OfficePropTypes.instance ==="object"){
        return Office.instance;
    }

    Office.instance=this;
    return this;
    }
}

const office1= new Office("Principal", 30);
console.log(office1);

const office2= new Office("Second", 45);
console.log(office2);