import * as reverse from "lodash/reverse"

class Producto {
    price: number;
    name: string;
    constructor(name: string, price: number) {
        this.price = price;
        this.name = name;
    }

getPrice(){
return this.price;

}
}

class ProductoElectronico extends Producto {
    apps:string[]
    constructor(name: string, price: number, useBatteries){
        super(name,price,);
        this.setUseBatteries(useBatteries)
    }
    setApps(apps:string[]){
        this.apps=apps;

    }
    getAppsReverse(){
      return reverse(this.apps)

    }
    useBatteries:boolean=false;
    setUseBatteries(usa:boolean){
        this.useBatteries=usa;
    }

}
function main(){
    const iphone = new ProductoElectronico("iphone x",500000, true);
    iphone.setApps(["1","2","3","4"])
    console.log(iphone.getAppsReverse())
  
}
main()