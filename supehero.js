const SUPERHERO_TOKEN = '1553537888449897	'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

// const newHeroButton = document.getElementById('newHeroButton')

// const heroImageDiv = document.getElementById('heroImage')

// const searchButton = document.getElementById('searchButton')

// const searchInput = document.getElementById('searchInput')
const herobutton=document.getElementById("herobutton")
const heroimage=document.getElementById('heroImage');
const searchButton=document.getElementById("searchbutton")
const searchedhero=document.getElementById('searchedhero')
const stats =document.getElementById("stats")

const getSuperHero = (id) => {
    
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json=>{
        console.log(json)
        const namehero=`<h2>${json.name}</h2>`
        const intelligence =`<p> intelligence:${json.powerstats.intelligence}</p>`
        const strength=`<p> strength:${json.powerstats.strength}</p>`
        heroimage.innerHTML=`${namehero}<img src='${json.image.url}' width =300 height=300/> ${intelligence}${strength}`
    //   showHeroInfo(superHero) 
    })
}
 const getsearchedsuperhero=(name)=>{
    console.log(searchedhero.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
        const hero=json.results[0]
        const heroname=`<h2>${hero.name}</h2>`
        const intelligence =`<p> intelligence:${hero.powerstats.intelligence}</p>`
        const strength=`<p> strength:${hero.powerstats.strength}</p>`
        heroimage.innerHTML=` ${heroname} <img src ='${hero.image.url}' height=200 widht=200/> ${intelligence}${strength}`
         
     })



 }
const getparameter=()=>{

    const parameter=Math.floor(Math.random()*500)
    return parameter;
}

randomherobutton.onclick=()=>getSuperHero(getparameter())
searchButton.onclick=()=>getsearchedsuperhero(searchedhero.value)


// .then(json=>{
//     dogImage.innerHTML +=`<img src='${json.message}'width =300 height=300/>`
