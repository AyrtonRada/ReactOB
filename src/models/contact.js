export class Contact {
    name = ''
    last_name = ''
    email = ''
    connect_status = true

    constructor(name, last_name, email, conect_status){
        this.name = name
        this.last_name = last_name
        this.email = email
        this.connect_status = conect_status
    }
}