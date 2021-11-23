const { v4: uuidv4 } = require('uuid');
const err = require('./errors.js');

module.exports = class Database {
    constructor() {
        this.persons = []
    }

    addPerson (name,age,hobbies) {
        if  (typeof(name)==='string' && typeof(age)==='string' && Array.isArray(hobbies)) {
            this.persons.push({
                id: uuidv4(),
                name,
                age,
                hobbies
            }) 
        } else {
            return new err('name  and age should be a strings, hobbies should be array of strings or empty array')
        }
    
    }
    
    deletePerson (id) {
        const index =  this.persons.find((el,i) => el.id === id ? i:'');
        this.persons.splice(index,index+1);
    }
    
}




console.log(uuidv4())