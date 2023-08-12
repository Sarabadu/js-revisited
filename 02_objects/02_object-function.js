/**
 *  Let's create a function that returns an object.
 */


function createClient(name,surname){
    let client = {
        name:name,
        surname:surname, 
        sayHi(){
            return "Hi " + this.name+ ", " + this.surname ;
        },
        nameLength:name.length
    }
    return client;
}


let client = createClient("its", "me")
console.log(client.sayHi(), client.nameLength)
