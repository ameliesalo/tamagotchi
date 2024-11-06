let btnFeed = document.querySelector('#btnfeed')
let btnPlay = document.querySelector('#btnplay')
let btnCuddle = document.querySelector('#btncuddle')
let btnSleep = document.querySelector('#btnsleep')

let blob = {}
let blobClass = document.querySelector('.blob')

let feed = document.querySelector('#feed')
let play = document.querySelector('#play')
let cuddle = document.querySelector('#cuddle')
let sleep = document.querySelector('#sleep')

if(load()) {
    blob = JSON.parse(localStorage.getItem('blobData'))
}
else {
    blob = {
        feed: 0,
        maxFeed: 100,

        play: 0,
        maxPlay: 100,

        cuddle: 0,
        maxCuddle: 100,

        sleep: 0,
        maxSleep: 100
    }
}

console.log(blob)

const feedInterval = setInterval(() => {
    blob.feed++

    if(blob.feed >= 50){
        blobClass.classList.add('feedMe')
    }

    if(blob.feed === blob.maxFeed){
        gameOver()
    }
       
displayBlobStatus()
save()
}, 1000)

btnFeed.addEventListener('click', () =>{
    blob.feed -= 5

    if(blob.feed = 0){
        btnFeed.disabled = true
    }
    else{
        btnFeed.disabled = false
    }
})

const playInterval = setInterval(() => {
    blob.play++

    if(blob.play >= 51){
        blobClass.classList.remove('feedMe')
    }
    if(blob.play >= 50){
        blobClass.classList.add('playNow')}

    if(blobClass.play === blob.maxPlay){
        gameOver()
    }
   
displayBlobStatus()
save() 
}, 2000)

btnPlay.addEventListener('click', () =>{
    blob.play -= 5

    if(blob.play === blob.maxPlay){
        btnPlay.disabled = true
    }
    else{
        btnPlay.disabled = false
    }
})

const cuddleInterval = setInterval(() => {
    blob.cuddle++

    if(blob.cuddle >= 49){
        blobClass.classList.remove('playNow')
    }
    if(blob.cuddle >= 50){
       blobClass.classList.add('cuddleMe')
    }

    if(blob.cuddle === blob.maxCuddle){
        gameOver()
    }
    
displayBlobStatus()
save()
}, 3000)

btnCuddle.addEventListener('click', () =>{
    blob.cuddle -= 5
    if(blob.cuddle = 0){
        btnCuddle.disabled = true
    }
    else{
        btnCuddle.disabled = false
    }
})

const sleepInterval = setInterval(() =>{
    blob.sleep++

    if(blob.sleep >= 51){
        blobClass.classList.remove('cuddleMe')
    }
    if(blob.sleep >= 50){
        blobClass.classList.add('sleepNow')
    }

    if(blob.sleep === maxSleep){
        gameOver()
    }
    
displayBlobStatus()
save()
}, 4000)

btnSleep.addEventListener('click', () =>{
    blob.sleep -= 30

    if(blob.sleep = 100){
        btnSleep.disabled = true
    }
    else{
        btnSleep.disabled = false
    }
})

function displayBlobStatus(){
    let blobStatus = document.querySelector('#status')

    blobStatus.innerHTML = `
    <h1> STATUS <h1>
    <p> Hunger: ${blob.feed} / ${blob.maxFeed} <p>
    <p> Play: ${blob.play} / ${blob.maxPlay} <p>
    <p> Cuddle: ${blob.cuddle} / ${blob.maxCuddle} <p> 
    <p> Sleep: ${blob.sleep} / ${blob.maxSleep} <p>
    `
}

function gameOver(){
    if(blob.feed === blob.maxFeed || blob.play === blob.maxPlay || blob.cuddle === blob.maxCuddle || blob.sleep === blob.maxSleep){
        blob = {
            feed: 0,
            maxFeed: 100,
    
            play: 0,
            maxPlay: 100,
    
            cuddle: 0,
            maxCuddle: 100,
    
            sleep: 0,
            maxSleep: 100
        }
    }
}

function save() {
    localStorage.setItem('blobData', JSON.stringify(blob))
}

function load() {
    return localStorage.getItem('blobData')
}

