if (document.querySelector('.popup')) {
    let start = document.querySelector('.start')
    let reset = document.querySelector('.reset')
    let min = document.querySelector('.min')
    let sec = document.querySelector('.sec')
    let startTimer = undefined
    let workel = document.querySelector('.work')


    let alerty = 0
    let audio = document.getElementById('sound')


    start.addEventListener('click', function () {
        if (startTimer === undefined) {
            workel.textContent = "Work Time !"
            workel.style["background-color"] = "greenyellow"
            startTimer = setInterval(timer, 1000)
            check()
        }
        else {
            alert("timer is already running")
        }

    })

    reset.addEventListener('click', function () {
        min.innerHTML = 35
        sec.innerHTML = "00"
        stopInterval()

        workel.textContent = "Start Again"
        workel.style["background-color"] = "rgb(217, 189, 250)"

        startTimer = undefined
    })

    function timer() {
        if (sec.innerHTML != 0) {
            sec.innerHTML--;
        }
        else if (min.innerHTML != 0 && sec.innerHTML == 0) {
            sec.innerHTML = 59
            min.innerHTML--
        }

        else {
            alerty = 0
            check()
        }
    }

    function stopInterval() {
        clearInterval(startTimer)
    }

    function check() {
        if (min.innerHTML <= 0 && sec.innerHTML <= 0 && alerty != 2) {
            workel.textContent = "Drink Water !"
            workel.style["background-color"] = "red"

            audio.play()


            alerty++

        }
    }




}







