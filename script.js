let btnFeed = document.querySelector('#btnfeed')
let btnPlay = document.querySelector('#btnplay')
let btnCuddle = document.querySelector('#btncuddle')
let btnSleep = document.querySelector('#btnsleep')

let blob = document.querySelector('.blob')

let feed = document.querySelector('#feed')
let play = document.querySelector('#play')
let cuddle = document.querySelector('#cuddle')
let sleep = document.querySelector('#sleep')

feed = 0
let maxFeed = 100

play = 100
let minPlay = 0

cuddle = 0
let maxCuddle = 100

sleep = 100
let minSleep = 0


const feedInterval = setInterval(() => {
    feed++

    if(feed >= 50){
        blob.classList.add('feedMe')
    }

    if(feed === maxFeed){
        clearInterval(feedInterval)
    }
   
    
displayBlobStatus()
}, 1000)

btnFeed.addEventListener('click', () =>{
    feed -= 5
})

const playInterval = setInterval(() => {
    play--

    if(play == 51){
        blob.classList.remove('feedMe')
    }
    if(play <= 50){
        blob.classList.add('.playNow')}

    if(play === minPlay){
        clearInterval(playInterval)
    }

    
displayBlobStatus()
}, 2000)

btnPlay.addEventListener('click', () =>{
    play += 5
})

const cuddleInterval = setInterval(() => {
    cuddle++

    if(cuddle == 49){
        blob.classList.remove('playNow')
    }
    if(cuddle >= 50){
        blob.classList.add('.cuddleMe')
    }

    if(cuddle === maxCuddle){
        clearInterval(cuddleInterval)
    }

    
displayBlobStatus()
}, 3000)

btnCuddle.addEventListener('click', () =>{
    cuddle -= 5
})

const sleepInterval = setInterval(() =>{
    sleep--

    if(sleep == 51){
        blob.classList.remove('cuddleMe')
    }
    if(sleep <= 50){
        blob.classList.add('.sleepNow')
    }

    if(sleep === minSleep){
        clearInterval(sleepInterval)
    }

    
displayBlobStatus()
}, 4000)

btnSleep.addEventListener('click', () =>{
    sleep += 30
})

function displayBlobStatus(){
    let blobStatus = document.querySelector('#status')

    blobStatus.innerHTML = `
    <h1> STATUS <h1>
    <p> Hunger: ${feed} / ${maxFeed} <p>
    <p> Play: ${play} / ${minPlay} <p>
    <p> Cuddle: ${cuddle} / ${maxCuddle} <p> 
    <p> Sleep: ${sleep} / ${minSleep} <p>
    `
}

function gameOver(){
    if(feed === 100 && play === 0 && cuddle === 100 && sleep === 0){
       blobStatus.innerHTML = ``
    }this(
        blobStatus.innerHTML = `
        <h1> STATUS <h1>
        <p> DU DOG! <p>
        `
    )
}
