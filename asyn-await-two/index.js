async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/albums');
    response = await response.json();
    return response
}
getData().then(
    (response) => renderView(response)
)

function renderView(e){
    for(i=0; i < e.length; i++){
        const titleOne = document.createElement('h1')
        titleOne.innerHTML = e[i].id;
        document.getElementById('caja').appendChild(titleOne)
    }
    
}   