//i forgor how javascript works type shenanigans

document.addEventListener("keydown", (event) => {
    if (event.code == 'F1') {
        alert('hi :)');
    }
});


window.addEventListener("DOMContentLoaded", (event) => {
    //A+ coding right here
    //okay, srsly dit kan beter lmao
    const changeStateTitleBarTop = document.querySelector("main");
    const changeStateTitleBarMain = document.querySelector("#installshield-bigtext");
    const changeStateTitleBarNav = document.querySelector("#nav");
    const closeButton = document.querySelector("#close-button");

    changeStateTitleBarTop.addEventListener("click", () => {
        document.getElementById("top-title-bar").className = "title-bar inactive";
        document.getElementById("nav-title-bar").className = "title-bar inactive";
        document.getElementById("content-title-bar").className = "title-bar";
    });

    changeStateTitleBarMain.addEventListener("click", () => {
        document.getElementById("top-title-bar").className = "title-bar";
        document.getElementById("nav-title-bar").className = "title-bar inactive";
        document.getElementById("content-title-bar").className = "title-bar inactive";
    });

    changeStateTitleBarNav.addEventListener("click", () => {
        document.getElementById("nav-title-bar").className = "title-bar";
        document.getElementById("top-title-bar").className = "title-bar inactive";
        document.getElementById("content-title-bar").className = "title-bar inactive";
    });

    closeButton.addEventListener("click", () => {
        console.log("click");
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //ayo replit auto suggest???
    });
})


/*window.addEventListener("DOMContentLoaded", (event) => {
    //dit werkt wel, huh
    const inactive = document.querySelector("#top-title-bar");

    inactive.addEventListener("click", () => {
        console.log("test");
        document.getElementById("top-title-bar").className = "title-bar inactive";
        document.getElementById("content-title-bar").className = "title-bar";
    });
});*/
