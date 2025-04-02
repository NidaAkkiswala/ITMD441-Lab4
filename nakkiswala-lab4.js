// Nida Akkiswala
// ITMD 441 - Undergraduate Student

// Change Heading of Page
(function () {
    document.querySelector('#hero h1').textContent = "Uplift Your Brand with Stellar Marketing";
})();

// Change Subheading of Page
(function () {
    const subHead = document.querySelector("#hero p");
    if (subHead) {
        subHead.innerHTML = `Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel</i></b>.`;
    }
})();

// Change background Image for Heading
(function () {
    const heroBack = document.querySelector("#hero");
    if (heroBack) {
        heroBack.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    }
})();

// Match Header Color to Footer Color
(function () {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header && footer) {
        const ftclr = window.getComputedStyle(footer).backgroundColor;
        header.style.backgroundColor = ftclr;
    }

})();