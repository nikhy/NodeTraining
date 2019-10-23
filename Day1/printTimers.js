function print(time){
    console.log("Hello after "+time+" seconds");
}
setTimeout(print, 4 * 1000,4);
setTimeout(print, 8 * 1000,8);
