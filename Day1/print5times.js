let timer, count = 5;
function print(time) {
    console.log("Hello World");
    if (--count === 0)
        clearInterval(timer);
}
timer = setInterval(print, 1 * 1000); 