class Key {
    private signature: number;
    constructor() {
        this.signature = Math.floor(Math.random() * (100000 - 100) + 100); 
    }

    getSignature():number {
        return this.signature;
    }
}

class Person {
    constructor(private key:Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key; 
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key; 
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key; 
    }
  
    comeIn(person:Person):void {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {

    openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true; 
            console.log("Welcome! The door is open.");
        } else {
            this.door = false; 
            console.log("Try another key! The door could not be opened.");
        }
        
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};