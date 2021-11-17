class Ninja{

    constructor(name){
        this.name = name;
        this.health = 100;
        var speed = 3;
		var strength = 3;

        this.showStats = function() {
            console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
            return this;
        }

        this.kick = function(ninja){
            ninja.health = ninja.health - strength * 15;
            console.log(ninja.name, "was kicked by", this.name ,"and lost", strength * 15 , "Health!")
        }
    
    }

        punch(ninja){
            ninja.health = ninja.health - 5;
            console.log(ninja.name, "was punched by", this.name ,"and lost 5 Health!")
        }

        sayName() {
			console.log("My name is " + this.name);
			return this;
		}

		drinkSake(){
			this.health += 10;
			return this;
		}

}

const ninja = new Ninja("Juanito");
const ninja2 = new Ninja("Pedro");
		ninja.sayName();
        ninja.kick(ninja2);
		ninja2.showStats();