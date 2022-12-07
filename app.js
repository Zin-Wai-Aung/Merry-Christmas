let giftBox =document.querySelector(".giftbox");
    let text = document.querySelector(".text");
    let audio = document.querySelector(".audio");

    giftBox.addEventListener("click",_=>{
        text.style.display = "inline-block";

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    })