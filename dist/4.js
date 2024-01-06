class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * (100000 - 100) + 100);
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.tenants = [];
        this.key = key;
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
            console.log("Welcome! The door is open.");
        }
        else {
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
//# sourceMappingURL=4.js.map