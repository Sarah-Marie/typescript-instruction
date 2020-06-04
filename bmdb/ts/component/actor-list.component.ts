
import { Actor } from "../model/actor.class";
import { ActorService } from "../service/actor.service";

export class ActorListComponent {

}
var readline = require('readline-sync');
let actorSvc: ActorService = new ActorService();

let a1: Actor = new Actor();
a1.id = 1;
a1.firstname = "Mark";
a1.lastname = "Hamill";
a1.birthdate = 1951;


a1.id = 2;
a1.firstname = "Harrison";
a1.lastname = "Ford";
a1.birthdate = 1942;

a1.id = 3;
a1.firstname = "Carrie";
a1.lastname = "Fisher";
a1.birthdate = 1956;




let a2: Actor = new Actor(1, "Jeff", "Bridges", 1949/12/04);
let a2: Actor = new Actor(2, "John", "Goodman", 1952/06/20);
let a2: Actor = new Actor(3, "Julianne", "Moore", 1960/12/03);

actorSvc.add(a1);
actorSvc.add(a2);

console.log("Welcome to bmdb Typescript!");

console.log("--------------------------------");

//command menu

let command: string = "";
while (command != "exit") {
    console.log("COMMAND MENU");
    console.log("-------------");
    console.log("list- list all actors");
    console.log("get - get an actor");
    console.log("add - add an actor");
    console.log("delete - delete an actor");
    console.log("exit - exit the app\n");
    command = readline.question("Command?  ");

    switch (command) {
        case "list":
            console.log("Actor List:");
            console.log("-----------");
        actorSvc.list().forEach(actor => {
            console.log(actor.about());
                
            });
            
            break;
            case "get":
                console.log("Get an actor by:");
                console.log("-----------");
                let id: number = readline.questionInt("Actor ID?");
                let actor: actor = actorSvc.get(id);
                console.log(actor.about());
                    break;

             case "add":
                    console.log("Add an actor:");
                    console.log("-----------");
                id = readline.questionInt("ID?");
                let firstname: string = readline.question("First Name?");
                let lastname:string  = readline.question("Last Name?");
                let birthdate: number = readline.questionInt("Birthdate?");
                
                actor = new Actor(id,firstname,lastname,birthdate);
                actorSvc.add(actor);
                    break;
                    
            case "del":
                console.log("Delete an actor:");
                 console.log("-----------");
                    id = readline.questionInt("ID?");
                    actorSvc.delete(id);
                    console.log("Actor deleted");            
                    break; 
                            
                case "exit":
             break;

                        case "list":
                            console.log("Invalid command. Try again.");
                            break;
    }
}