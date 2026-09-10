export class User{
    #username;
    #email;
    #password;
    constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    }
    //getter
    get username (){
        return this.#username;
    }
    get email (){
        return this.#email;
    }
    

    //setter
    set username(newUsername) {
        if(typeof newUsername === "string" && newUsername.length >= 3){
            this.#username = newUsername;
        }else{
            throw new Error("El usuario debe ser un string y contener al menos 3 caracter");
        }
    }

    set email(newEmail) {
        if(typeof newEmail === "string" && newEmail.includes("@")) {
            this.#email = newEmail;
        } else {
            throw new Error("El email debe ser un string y contener '@'");
        }
    }

    set password(newPassword) {
        if(typeof newPassword === "string" && newPassword.length >= 6) {
            this.#password = newPassword;
        } else {
            throw new Error("El password debe ser un string y contener al menos 6 caracter");
        }
    }

    validatePassword(passwordToTest) {
        if(passwordToTest === this.#password) {
            return true;
        } else {
            return false;
        }
    }
}