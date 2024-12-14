let dayscontainer  = document.getElementById('days')
let minutesContainer = document.getElementById('minutes')
let hourContainer = document.getElementById('hours')
let secondsContainer = document.getElementById('seconds')
let preview = document.getElementById('preview')

function updateContainer() {
    
    let newYear = new Date('January 1, 2025 00:00:00')
    let currentTime = new Date()
    let diff = newYear - currentTime
    let days = Math.floor(diff / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); 
    let seconds = Math.floor((diff % (1000 * 60)) / 1000); 

    dayscontainer.innerHTML = days + '<span> Days </span>'
    minutesContainer.innerHTML = minutes + '<span> Minutes </span>'
    hourContainer.innerHTML = hours + '<span> Hours </span> '
    secondsContainer.innerHTML = seconds + '<span> Seconds </span>' 
    preview.addEventListener('click', () => {
        element1 = document.createElement('video')
        element2 = document.createElement('p')
        element1.setAttribute('id', 'myVideo')
        element2.setAttribute('id', 'Happy-New-Year')
        element1.src = './images/1061521417-preview.mp4'
        element2.textContent = 'Happy New Year'
        element1.autoplay = true
    element1.loop = true
        document.body.appendChild(element2)
        document.body.appendChild(element1)

       
    })
   
}


setInterval(updateContainer, 1000)


