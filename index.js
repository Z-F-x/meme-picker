import memesData from './data.js'

const memeContainer = document.getElementById('meme-container')
const getRandomMemeButton = document.getElementById('get-random-meme-button')
const rejectButton = document.getElementById('reject-button')
const acceptButton = document.getElementById('accept-button')





class getNewMeme{
    constructor(data){
        this.memes = data;
    }

    setMeme(index) {
        const meme = this.memes[index];
        return   `
<div class="meme-container-inner">
    <div class="rejected-seal-outer" id="rejected-seal">
    <img src="./images/nope-image.png" class="rejected-seal" />   
    </div>
    <div class="accepted-seal-outer" id="accepted-seal">
    <img src="./images/like-image.png" class="accepted-seal"/>   
    </div>
    <img src="${meme.source}" class="meme-img">
    <p class="meme-title">${meme.name}</p>
</div>
`
    }    
}
const myMemes = new getNewMeme(memesData);

getRandomMemeButton.addEventListener('click', (e)=>{
    if(e.target){
        const randomIndex = Math.floor(Math.random() * memesData.length);
        const randomMeme = myMemes.setMeme(randomIndex);
        memeContainer.innerHTML = randomMeme
    }
})

// let currentMeme = new getNewMeme(memesData)

// console.log(currentMeme.setMeme())

const randomIndex = Math.floor(Math.random() * memesData.length);
const randomMeme = myMemes.setMeme(randomIndex);
memeContainer.innerHTML = randomMeme

rejectButton.addEventListener('click', (e)=>{
    const rejectSeal = document.getElementById('rejected-seal')
    if(e.target){
        rejectSeal.style.display = "flex"
}
})

acceptButton.addEventListener('click', (e)=>{
    const acceptedSeal = document.getElementById('accepted-seal')
    if(e.target){
        acceptedSeal.style.display = "flex"
}

})
