const nome = document.querySelector("#nome")
const cnpj = document.querySelector("#cnpj")
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

    fetch(`${URL}Fornecedors/ByName?name=${search}`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
})


cnpj.addEventListener("blur",(e)=>{
    let search = cnpj.value
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`${URL}Fornecedors/ByCnpj?cnpj=${search}`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
})