let live_time=document.querySelector("#clock");

setInterval(() => {
        let date = new Date();

        live_time.innerText =
            date.toLocaleString();
    }, 1000);


 let count = 0;
    let timer;

    let stopwatch = document.querySelector("#stopwatch");

    document.querySelector("#start-btn").addEventListener("click", () => {
        if (!timer) {
            timer = setInterval(() => {
                count++;
                stopwatch.innerText = count;
            }, 1000);
        }
    });

    document.querySelector("#stop-btn").addEventListener("click", () => {
        clearInterval(timer);
        timer = null;
    });

    document.querySelector("#reset-btn").addEventListener("click", () => {
        clearInterval(timer);
        timer = null;
        count = 0;
        stopwatch.innerText = count;
    });