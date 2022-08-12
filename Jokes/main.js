const joke = document.querySelector('#btn');

const addJokes = document.querySelector('#jokes');

const getJoke = async () =>{
    try{
        const header = {headers:{Accept:'application/json'}}
        const res =await axios.get( 'https://icanhazdadjoke.com/',header)
        return res.data.joke;
    }
    catch(e){
        return "Sorry Server Down"
    }
   
}

const addJoke = async () =>{
     const dadJoke = await getJoke();
     const newLi = document.createElement('li');
     newLi.append(dadJoke);
     addJokes.append(newLi);
     color()
}

function color(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const randColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = randColor;
}

joke.addEventListener('click',addJoke )