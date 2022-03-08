const clock = document.querySelector("h2#clock");

function getDate(){
    const date = new Date();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const second = date.getSeconds();
    clock.innerText = (`${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`);
}
// setInterval(sayHi, 1000);

getDate();
setInterval(getDate, 1000);