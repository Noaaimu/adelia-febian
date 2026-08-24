document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // DATA FOTO
    // =========================

    const photos = [
        "foto1.jpg",
        "foto2.jpg",
        "foto3.jpg",
        "foto4.jpg",
        "foto5.jpg"
    ];

    let current = 0;


    // =========================
    // ELEMENT
    // =========================

    const img =
        document.getElementById("mainPhoto");

    const wrap =
        document.querySelector(".photo-wrap");

    const dots =
        document.getElementById("photoDots");


    // =========================
    // PHOTO DOTS
    // =========================

    photos.forEach((photo, index) => {

        const dot =
            document.createElement("button");

        dot.type = "button";

        dot.className =
            index === 0
                ? "dot active"
                : "dot";

        dot.addEventListener("click", (event) => {

            event.stopPropagation();

            showPhoto(index);
        });

        dots.appendChild(dot);
    });


    // =========================
    // CHANGE PHOTO
    // =========================

    function showPhoto(index) {

        current =
            (index + photos.length)
            % photos.length;

        img.style.opacity = "0";

        setTimeout(() => {

            img.src =
                photos[current];

            img.style.opacity = "1";

        }, 150);


        updateDots();
    }


    function updateDots() {

        const allDots =
            dots.querySelectorAll(".dot");

        allDots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === current
            );
        });
    }


    // =========================
    // PHOTO CLICK
    // =========================

    wrap.addEventListener("click", () => {

        openGallery();

    });


    // =========================
    // FULLSCREEN GALLERY
    // =========================

    const gallery =
        document.getElementById(
            "galleryFullscreen"
        );

    const galleryImage =
        document.getElementById(
            "galleryImage"
        );

    const galleryClose =
        document.getElementById(
            "galleryClose"
        );

    const galleryPrev =
        document.getElementById(
            "galleryPrev"
        );

    const galleryNext =
        document.getElementById(
            "galleryNext"
        );


    function openGallery() {

        galleryImage.src =
            photos[current];

        gallery.classList.add("show");

        gallery.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";
    }


    function closeGallery() {

        gallery.classList.remove("show");

        gallery.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";
    }


    galleryClose.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            closeGallery();
        }
    );


    galleryPrev.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            current =
                (current - 1 + photos.length)
                % photos.length;

            galleryImage.src =
                photos[current];

            img.src =
                photos[current];

            updateDots();
        }
    );


    galleryNext.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            current =
                (current + 1)
                % photos.length;

            galleryImage.src =
                photos[current];

            img.src =
                photos[current];

            updateDots();
        }
    );


    gallery.addEventListener(
        "click",
        (event) => {

            if (
                event.target === gallery
            ) {
                closeGallery();
            }
        }
    );


    // =========================
    // KEYBOARD
    // =========================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !gallery.classList.contains(
                    "show"
                )
            ) {
                return;
            }


            if (
                event.key === "Escape"
            ) {
                closeGallery();
            }


            if (
                event.key === "ArrowLeft"
            ) {
                galleryPrev.click();
            }


            if (
                event.key === "ArrowRight"
            ) {
                galleryNext.click();
            }
        }
    );


    // =========================
    // MUSIC
    // =========================

    const music =
        document.getElementById("music");

    const musicBtn =
        document.getElementById(
            "musicBtn"
        );

    const musicText =
        document.getElementById(
            "musicText"
        );


    musicBtn.addEventListener(
        "click",
        async () => {

            try {

                if (music.paused) {

                    await music.play();

                    musicText.textContent =
                        "Pause Magnolia";

                } else {

                    music.pause();

                    musicText.textContent =
                        "Play Magnolia";
                }

            } catch (error) {

                musicText.textContent =
                    "Music unavailable";
            }
        }
    );


    // =========================
    // FALLING PETALS
    // =========================

    const petals =
        document.querySelector(".petals");


    function createPetal() {

        const petal =
            document.createElement("span");

        petal.className = "petal";

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.setProperty(
            "--drift",
            (Math.random() * 180 - 90)
            + "px"
        );

        petal.style.animationDuration =
            (10 + Math.random() * 6)
            + "s";

        petals.appendChild(petal);


        setTimeout(() => {

            petal.remove();

        }, 16000);
    }


    // HP lebih ringan


    setInterval(
        createPetal,
        3000
    );



    // =========================
    // SCROLL REVEAL
    // =========================

    const revealItems =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("show");

                                observer.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        revealItems.forEach(
            (item) => {

                observer.observe(item);
            }
        );

    } else {

        revealItems.forEach(
            (item) => {

                item.classList.add(
                    "show"
                );
            }
        );
    }


    // =========================
    // SURPRISE
    // =========================

    const surpriseBtn =
        document.getElementById(
            "surpriseBtn"
        );

    const surpriseModal =
        document.getElementById(
            "surpriseModal"
        );

    const closeSurprise =
        document.getElementById(
            "closeSurprise"
        );


    surpriseBtn.addEventListener(
        "click",
        () => {

            surpriseModal.classList.add(
                "show"
            );

            surpriseModal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow =
                "hidden";
        }
    );


    closeSurprise.addEventListener(
        "click",
        () => {

            surpriseModal.classList.remove(
                "show"
            );

            surpriseModal.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.style.overflow =
                "";
        }
    );


    surpriseModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                surpriseModal
            ) {

                surpriseModal.classList.remove(
                    "show"
                );

                surpriseModal.setAttribute(
                    "aria-hidden",
                    "true"
                );

                document.body.style.overflow =
                    "";
            }
        }
    );

});


// =========================
// MEMORY ALBUM - MOBILE FIX
// =========================

const memoryCards = document.querySelectorAll(".memory-card");

const memoryAlbum = document.createElement("div");
memoryAlbum.className = "memory-album";

memoryAlbum.innerHTML = `
    <div class="memory-album-card">

        <button class="memory-album-close" type="button">×</button>

        <button class="memory-album-prev" type="button">‹</button>

        <img class="memory-album-image" src="" alt="Memory">

        <button class="memory-album-next" type="button">›</button>

        <div class="memory-album-caption"></div>

    </div>
`;

document.body.appendChild(memoryAlbum);

const albumCard =
    memoryAlbum.querySelector(".memory-album-card");

const albumImage =
    memoryAlbum.querySelector(".memory-album-image");

const albumCaption =
    memoryAlbum.querySelector(".memory-album-caption");

const albumClose =
    memoryAlbum.querySelector(".memory-album-close");

const albumPrev =
    memoryAlbum.querySelector(".memory-album-prev");

const albumNext =
    memoryAlbum.querySelector(".memory-album-next");

let albumIndex = 0;

const memories = [...memoryCards].map(card => {

    const image = card.querySelector("img");
    const caption = card.querySelector("p");

    return {
        src: image.src,
        caption: caption ? caption.textContent : ""
    };

});

function showMemory(index) {

    albumIndex =
        (index + memories.length) % memories.length;

    albumImage.src = memories[albumIndex].src;
    albumCaption.textContent = memories[albumIndex].caption;

}


// TAP / TOUCH FOTO
memoryCards.forEach((card, index) => {

    card.style.cursor = "pointer";

    card.addEventListener("click", function (e) {

        if (
            e.target.closest("button") ||
            e.target.closest("a")
        ) return;

        showMemory(index);

        memoryAlbum.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


// CLOSE
albumClose.addEventListener("click", function () {

    memoryAlbum.classList.remove("show");

    document.body.style.overflow = "";

});


// PREVIOUS
albumPrev.addEventListener("click", function (e) {

    e.stopPropagation();

    showMemory(albumIndex - 1);

});


// NEXT
albumNext.addEventListener("click", function (e) {

    e.stopPropagation();

    showMemory(albumIndex + 1);

});


// KLIK BACKGROUND
memoryAlbum.addEventListener("click", function (e) {

    if (e.target === memoryAlbum) {

        memoryAlbum.classList.remove("show");

        document.body.style.overflow = "";

    }

});


// KEYBOARD LAPTOP
document.addEventListener("keydown", function (e) {

    if (!memoryAlbum.classList.contains("show")) return;

    if (e.key === "Escape") {
        albumClose.click();
    }

    if (e.key === "ArrowLeft") {
        albumPrev.click();
    }

    if (e.key === "ArrowRight") {
        albumNext.click();
    }

});