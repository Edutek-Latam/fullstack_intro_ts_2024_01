class FormatDate{
    static now(){
        return new Date();
    }
}

console.log(FormatDate.now())

class Usuario {
    private _nombres:string;
    private _apellidos:string;
    private _email: string;

    static isActive: boolean;
    /**
     * 
     * @param {string} nombre - el valor tienen que ser una cadena
     * @param {string} apellido - el valor tienen que ser una cadena
     * @param {string} email - el valor tienen que ser una cadena
     */
    constructor(nombre: string, apellido: string, email: string ){    
        this._nombres = nombre;
        this._apellidos = apellido;
        this._email = email;
    }

    set nombre(arg: string){
        this._nombres = arg;
    }

    get nombre() : string{
        return this._nombres
    }

    fullName(){
        return `${this._nombres} ${this._apellidos}`
    }
}


const user = new Usuario('sherwin','gonzalez','sagonzalezgt@gmail.com')
console.log(user.nombre);
user.nombre = 'Antonio'
console.log(user.nombre)


