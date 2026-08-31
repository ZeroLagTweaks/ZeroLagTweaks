// ==============================
// ZeroLagTweaks Website
// ==============================


// FAQ SYSTEM

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question =
        item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const alreadyOpen =
            item.classList.contains("active");

        // Close all FAQ items
        faqItems.forEach((otherItem) => {

            otherItem.classList.remove("active");

            const icon =
                otherItem.querySelector(
                    ".faq-question span"
                );

            if (icon) {
                icon.textContent = "+";
            }

        });


        // Open selected item
        if (!alreadyOpen) {

            item.classList.add("active");

            const icon =
                question.querySelector("span");

            if (icon) {
                icon.textContent = "−";
            }

        }

    });

});


// PRO BUTTON

const proButton =
    document.getElementById("proButton");

if (proButton) {

    proButton.addEventListener("click", () => {

        alert(
            "ZeroLagTweaks PRO is coming soon."
        );

    });

}


// DOWNLOAD CHECK

const downloadButton =
    document.querySelector(".large-download");

if (downloadButton) {

    downloadButton.addEventListener(
        "click",
        () => {

            console.log(
                "ZeroLagTweaks download started."
            );

        }
    );

}


// NAVBAR SCROLL EFFECT

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(6, 4, 10, 0.96)";

    } else {

        navbar.style.background =
            "rgba(6, 4, 10, 0.82)";

    }

});


// SIMPLE FADE-IN ANIMATION

const animatedElements =
    document.querySelectorAll(
        ".feature-card, .download-box, .pro-box"
    );

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


animatedElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});