

let bt = document.getElementById("button");

bt.addEventListener('click',()=>{


    let name = document.getElementById("box").value;
   
    const url =`https://pokeapi.co/api/v2/pokemon/${name}`;


    fetch(url)
    .then(response =>response.json())
    .then((data) => {

    document.getElementById('pokemonName').innerHTML = data['name'];


    let img = data['sprites']['front_shiny'];
    document.getElementById('pokemonImg').setAttribute('src',img);

    })
    .catch(err=> console.log(err))


})




