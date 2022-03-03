function plus(a, b) {
    console.log(a + b);
}

// plus(12, 16);

const player = {
    name: "khS",
    sayHello: function(name){
        console.log("hi " + name + " nice to meets you~");
    },
};

// console.log(player.name);
// player.sayHello("kwon");

const calcul = {
    add: function(a, b) {
        alert(a+b);
    },
    sub: function(a, b) {
        alert(a-b);
    },
    mux: function(a, b) {
        alert(a*b);
    },
    div: function(a, b) {
        alert(a/b);
    },
    gegob: function(a, b) {
        alert(a**b);
    }
}
// ctrl + shift + f => 한 번에 바뀜
// const ca = calcul.add(3, 5);
// console.log(ca);
const fage = 28;
function calkrage(age) {
    return age + 2;
}

// const krage = calkrage(fage);s

// console.log(krage);

// const age = prompt("how old are you?");

//parseInt("15");

// document.title1 = "Hello from JS!";
// const title = document.getElementById("title");
// title.innerText = "hate you!!!";

// const si = document.getElementById("sibal");
// si.innerText = "ok~";

// const hellos = document.getElementsByClassName("hello");

// const hi = document.querySelector(".hi h1");
// console.log(hi);

// const his = document.querySelectorAll(".hi h1");
// console.log(his);

// const title = document.querySelector("div.hi h1");

// title.style.color = "red";

const work = document.querySelector("div.hello:first-child h1");

// work.style.color = "red";

// const rechk = document.querySelector("div.hi:first-child h1");

// rechk.style.color = 'blue';

// function handleTitleClick() {
//     const curColor = work.style.color;
//     let newColor;
//     if(curColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     work.style.color = newColor;
// }

// function handleMouseEnter() {
//     work.innerText = "Mouse is here!";

// }

// function handleMouseleave() {
//     work.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor ="tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("sos no wifi!");
// }

// function handleWindowOnline() {
//     alert("all good! wifi on!");
// }


// work.onClick = handleTitleClick;
// work.onmouseenter = handleMouseEnter;
// // work.addEventListener("mouseenter", handleMouseEnter);
// work.addEventListener("mouseleave", handleMouseleave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline)
// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (work.classList.contains(clickedClass)){
//         work.classList.remove(clickedClass);
//     } else {
//         work.classList.add(clickedClass);
//     }
// }

function handleTitleClick() {
    const clickedClass = "clicked";
    work.classList.toggle(clickedClass);
}

work.addEventListener("click", handleTitleClick);


