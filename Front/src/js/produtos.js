const nome = document.querySelector("#nome")

const URL = 'https://localhost:44347/api/'

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}




nome.addEventListener("blur",(e)=>{
    let search = nome.value
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`${URL}Produtos/ByName?name=${search}`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
})


