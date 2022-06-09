async function getData(){
    let response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=Rp6YidxPjnYQkHnoGkOuS4mrf2PSD03Y&limit=10&rating=g');
    response = await response.json();
    return response
}
getData().then(
    (response) => renderView(response)
);

function renderView(info){
    console.log(info);
    for (i=0; i <info.data.length; i++){
        const titles = document.createElement('h1')
        titles.innerHTML = info.data[i].id;
        document.getElementById("caja").appendChild(titles)
    }

}

