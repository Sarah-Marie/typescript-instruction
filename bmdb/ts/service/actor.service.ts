import { Actor } from "../model/actor.class";
export class ActorService {
    // Our actor service class. Holds a list of actors
    // and provides CRUD functions.
    actors: Actor[] = [];

    list(): Actor[] {
        return this.actors;
    }
    get(id: number): Actor {
       let a: Actor = new Actor();

        for (let actor of this.actors) {
            if (actor.id == id) {
                a = actor;
            }
        }

       return a;
    }

    add(actor: Actor): void {
        this.actors.push(actor);
    }

    delete(id: number): void {
       for (let actor of this.actors) {
           if (actor.id == id) {
               let idx: number = this.actors.indexOf(actor);
               this.actors.splice(idx,1);
           }
       }
       
    }
}