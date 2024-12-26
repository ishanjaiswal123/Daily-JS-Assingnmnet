document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#increment-button");
    const increment = document.querySelector("#increment-speed");
    const triggered = document.querySelector("#increment-count");

    let pressedCount = 0;
    let triggerCount = 0;

    const debounceCount = _.debounce(()=>{
        triggered.innerHTML = ++triggerCount;
    }, 800)

    btn.addEventListener("click", () => {
        increment.innerHTML = ++pressedCount;
        debounceCount();
    });
});