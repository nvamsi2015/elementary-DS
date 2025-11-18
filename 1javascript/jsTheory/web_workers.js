const worker = new Workder('worker.js')
const sumButton = document.querySelector("#subButton")
const bgButton = document.querySelector*("#bgButton")

sumButton.addEventListener("click", (event)=>{
    worker.postMessage('hello')
})


worker.onmessage = function(message) {
    alert('The final sum is ${message.data}')
}




//  web worker are effective, allows you to offload some expecsive work to background thread that can do work and let you know when it is finished. throwugh postMessage api 

