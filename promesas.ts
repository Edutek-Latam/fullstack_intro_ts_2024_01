function getData(estado: boolean){
    return new Promise((
        resolve : (value: unknown) => void,
        reject : (value: unknown) => void)=>{

            if(estado){
                setTimeout(() => {
                    resolve({status:'OK', code:100,msg:'Operacion Exitosa'}) 
             }, 500);
            }else{
                setTimeout(() => {
                    reject({status:'ERR', code:5,msg:'Operacion Exitosa'}) 
             }, 500);
            }
           
    })
}

//console.log(getData());
/* getData(false)
.then(user=>{
    console.log(user)
})
.catch(error=>{
    console.error(error)
})
 */


async function consultar() {
    setTimeout(() => {
            console.log('funcion async')
    }, 2000);
}

(async ()=>{
    console.log('HOla') 
    await consultar()
    console.log('HOla2')
    //console.log('hola mundo')
})()
