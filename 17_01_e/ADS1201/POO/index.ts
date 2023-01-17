class seresVivos {  //SUPERCLASSE


}



class Animais extends seresVivos{ //SUPERCLASSE - SUBCLASSE
     latir(): void{
        console.log("AUAUAUAUAU");
    }
    correr(): void{
        console.log("O animal está correndo")
    }
    miar(): void {
        console.log("miauauauau");
    }
}

class Cachorros extends Animais { //SUBCLASSE
    correrAtrasDoProprioRabo(): void {

    }
}

let cachorro = new Cachorros()
cachorro.latir()

class Gatos extends Animais {
    lamberOsPelos(): void {

    }
}

let gato = new Gatos()
gato.miar()
/*
let ato = new Animal();
animal.latir();
animal.correr();
*/