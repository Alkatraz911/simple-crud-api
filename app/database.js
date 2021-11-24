const { v4: uuidv4 } = require('uuid');
const Err = require('./errors.js');
module.exports = class Database {
    constructor() {
        this.persons = [];
    }

    addPerson(obj) {
        if ((typeof (obj.name) !== 'string' || typeof (obj.age) !== 'string' || !Array.isArray(obj.hobbies))) {
            throw new Err('fields name,age should be strings, hobbies should be array of strings or empty array');
        } else if (!obj.name || !obj.age || !obj.hobbies) {
            throw new Err('fields name,age,hobbies are required!');
        } else {
            this.persons.push({
                id: uuidv4(),
                name: obj.name,
                age: obj.age,
                hobbies: obj.hobbies
            });
        }

    }

    deletePerson(id) {
        const index = this.persons.map((el, i) => el.id === id ? i : '');
        this.persons.splice(index, index + 1);
    }

    getPerson(id) {
        const result = this.persons.find(el => el.id === id ? el : '');
        return result;
    }

}

