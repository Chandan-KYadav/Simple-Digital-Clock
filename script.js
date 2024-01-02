const clock = document.querySelector('#clock');



setInterval( () => {
    let time = new Date();
    let actalTime = time.toLocaleTimeString();
    clock.innerHTML = actalTime;
}, 1000)