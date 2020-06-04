import { Friends } from "../model/friends.class";

export class FriendsListComponent {
    
}

let f1: Friends = new Friends("Whitney", 32, "whitney@gmail.com", true);
let f2: Friends = new Friends("Jenny", 35, "jenny@gmail.com", false);
let f3: Friends = new Friends("Pat", 30, "pat@gmail.com", false);
let f4: Friends = new Friends("Jenna", 34, "jenna@gmail.com", false);
let f5: Friends = new Friends("Colleen", 40, "colleen@gmail.com", true);

let listFriends: Array<Friends> = [f1, f2, f3, f4, f5];
console.log( "Name:" + "\t" + "Age:" + "\t" + "Email:" + "\t" + "BFF?");

for(let Friends of listFriends) {
    console.log(Friends.about());
}