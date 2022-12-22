function displayTrailer() {
    let video = document.querySelector(".trailer");
    video.classList.remove("none");

    let iFrame = video.getElementsByTagName('iframe');
    let url = iFrame[0].getAttribute('src');
    iFrame[0].setAttribute('src', url + "&amp;autoplay=1");
    console.log(stop);

    //close trailer vide with button
    let closeItem = video.querySelector(".close");

    closeItem.addEventListener("click", function () {
        video.classList.add("none");
        iFrame[0].setAttribute('src', '');
        iFrame[0].setAttribute('src', url);
    });

    //close trailer vide with key (escape)
    window.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            video.classList.add("none");
            iFrame[0].setAttribute('src', '');
            iFrame[0].setAttribute('src', url);
        }
    });
}

let btn = document.querySelector(".play-trailer");
btn.addEventListener("click", displayTrailer);