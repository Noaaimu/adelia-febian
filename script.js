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