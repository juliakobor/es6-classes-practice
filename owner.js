export class Owner {
    firstname;
    lastname;
    birthdate;
    idnumber;
    constructor(firstname, lastname, birthdate, idnumber) {
        this.firstname=firstname;
        this.lastname=lastname;
        this.birthdate=birthdate;
        this.idnumber=idnumber;
    }
    get fullname () {
        return this.firstname + this.lastname;
    }
}