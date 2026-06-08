const logo = document.getElementById("ssbLogo");
const menu = document.getElementById("menuPanel");

let opened = false;

logo.addEventListener("click", () => {

    const sponsors = document.querySelectorAll(".supporter");

    if (!opened) {

        sponsors.forEach((item, index) => {

            item.style.transition =
            "all .8s ease";

            item.style.transform =
            "scale(0)";

            item.style.opacity =
            "0";

        });

        setTimeout(() => {
            menu.classList.add("active");
        }, 800);

        opened = true;

    }

});

menu.addEventListener("click", (e) => {

    if (e.target === menu) {

        menu.classList.remove("active");

        const sponsors =
        document.querySelectorAll(".supporter");

        sponsors.forEach(item => {

            item.style.transform =
            "scale(1)";

            item.style.opacity =
            "1";

        });

        opened = false;
    }

});
