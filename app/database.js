const { v4: uuidv4 } = require('uuid');
const { validate: uuidValidate } = require('uuid');
const Err = require('./errors.js');

module.exports = class Database {

    constructor() {
        this.persons = [];
    }

    async addPerson(obj) {
        if ((typeof (obj.name) !== 'string' || typeof (obj.age) !== 'string' || !Array.isArray(obj.hobbies))) {
            throw new Err('fields name,age should be strings, hobbies should be array of strings or empty array', 400);
        } else if (!obj.name || !obj.age || !obj.hobbies) {
            throw new Err('fields name,age,hobbies are required!', 400);
        } else {
            this.persons.push({
                id: uuidv4(),
                name: obj.name,
                age: obj.age,
                hobbies: obj.hobbies
            });
            const result = await this.persons[this.persons.length-1];
            return result;
        }

    }

    async updatePerson(id,obj) {
        if (uuidValidate(id)) {
            const index = this.persons.findIndex(el => el.id === id);
            if (index >= 0) {
                const toUpdate = this.persons.find(el => el.id === id);

                const keys = Object.keys(obj);
                for (const el of keys) {
                    toUpdate[el] = obj[el]
                }
                const result = await toUpdate;
                return result;
            } else {
                throw new Err('No user with such id', 404);
            }
        } else {
            throw new Err('Bad id', 400);
        }


    }

    deletePerson(id) {
        if (uuidValidate(id)) {
            const index = this.persons.findIndex(el => el.id === id);
            if (index >= 0) {
                this.persons.splice(index, index + 1);
                return;
            } else {
                throw new Err('No user with such id', 404);
            }
        } else {
            throw new Err('Bad id', 400);
        }


    }

    getPerson(id) {
        if (uuidValidate(id)) {
            const result = this.persons.find(el => el.id === id ? el : '');
            if (result) {
                return result;
            } else {
                throw new Err('No user with such id', 404);
            }
        } else {
            throw new Err('Bad id', 400);
        }
    }
}

