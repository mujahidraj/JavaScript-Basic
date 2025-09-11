

const clock = document.getElementById("clock");

let num = 0;
const clockRun = () => {
    num++;
    clock.innerHTML = `
    <p>${num}</p>
    `

    if (num >= 10) {
        clearInterval(intervalId)
    }
}

const intervalId = setInterval(clockRun, 1000)



