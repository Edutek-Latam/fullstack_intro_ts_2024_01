interface IUsuario{
    nombres:string;
    apellidos:string;
    email: string;
}


class User {
    usuario: IUsuario = {
        nombres: "",
        apellidos: "",
        email: ""
    };

    constructor(data:IUsuario){
       const {nombres,apellidos,email} = data
       this.usuario.nombres = nombres;
       this.usuario.apellidos = apellidos;
       this.usuario.email = email;
        //this.usuario.nombres = data.nombres;
    }

    get email(){
        return this.usuario.email;
    }
}

const data : IUsuario ={
    nombres: "Sherwin",
    apellidos: "Gonzalez",
    email: "sagonzalezgt@gmail.com"
}

const userobj = new User(data);
console.log(userobj.email)