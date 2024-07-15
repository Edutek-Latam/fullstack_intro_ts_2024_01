function fetchApiA(url,callback){
    setTimeout(() => {
        callback('mesanje')
    }, 200);
}


fetchApiA('aaaaa',result=>{
    console.log(result)
})