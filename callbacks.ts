
function fetchApi(url : string,callback : (valor: any) => any ){
    console.log('Iniciando callback')
    setTimeout(() => {
        callback('respuesta asincrona')
    }, 200);

    console.log('finalizando callback')
}

fetchApi('asdfad',result=>{
    console.log(result)
})



