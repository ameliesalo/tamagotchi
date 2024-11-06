let btnFeed = document.querySelector('#btnfeed')
let btnPlay = document.querySelector('#btnplay')
let btnCuddle = document.querySelector('#btncuddle')
let btnSleep = document.querySelector('#btnsleep')

let blob = document.querySelector('.blob')

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

        play: 100,
        minPlay: 0,

        cuddle: 0,
        maxCuddle: 100,

        sleep: 100,
        minSleep: 0
    }
}

console.log(blob)

const feedInterval = setInterval(() => {
    blob.feed++

    if(blob.feed >= 50){
        blob.classList.add('feedMe')
    }

    if(blob.feed === blob.maxFeed){
        clearInterval(feedInterval)
    }
   
save()    
displayBlobStatus()
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
    blob.play--

    if(blob.play <= 51){
        blob.classList.remove('feedMe')
    }
    if(blob.play <= 50){
        blob.classList.add('playNow')}

    if(blob.play === blob.minPlay){
        clearInterval(playInterval)
    }

save()    
displayBlobStatus()
}, 2000)

btnPlay.addEventListener('click', () =>{
    blob.play += 5

    if(blob.play = 100){
        btnPlay.disabled = true
    }
    else{
        btnPlay.disabled = false
    }
})

const cuddleInterval = setInterval(() => {
    blob.cuddle++

    if(blob.cuddle >= 49){
        blob.classList.remove('playNow')
    }
    if(blob.cuddle >= 50){
        blob.classList.add('cuddleMe')
    }

    if(blob.cuddle === blob.maxCuddle){
        clearInterval(cuddleInterval)
    }

save()    
displayBlobStatus()
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
    blob.sleep--

    if(blob.sleep <= 51){
        blob.classList.remove('cuddleMe')
    }
    if(blob.sleep <= 50){
        blob.classList.add('sleepNow')
    }

    if(blob.sleep === minSleep){
        clearInterval(sleepInterval)
    }

save()    
displayBlobStatus()
}, 4000)

btnSleep.addEventListener('click', () =>{
    blob.sleep += 30

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
    <p> Play: ${blob.play} / ${blob.minPlay} <p>
    <p> Cuddle: ${blob.cuddle} / ${blob.maxCuddle} <p> 
    <p> Sleep: ${blob.sleep} / ${blob.minSleep} <p>
    `
}

function gameOver(){
    if(feed === 100 && play === 0 && cuddle === 100 && sleep === 0){
        blob = {
            feed: 0,
            maxFeed: 100,
    
            play: 100,
            minPlay: 0,
    
            cuddle: 0,
            maxCuddle: 100,
    
            sleep: 100,
            minSleep: 0
        }
    }
}

function save() {
    console.log("saving data")
    localStorage.setItem('blobData', JSON.stringify(blob))
}

function load() {
    console.log("loading data")
    return localStorage.getItem('blobData')
}