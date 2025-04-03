// Nida Akkiswala
// ITMD 441 - Undergraduate Student

// 1. Change Heading of Page
(function () {
    document.querySelector('#hero h1').textContent = "Uplift Your Brand with Stellar Marketing";
})();

// 2. Change Subheading of Page
(function () {
    const subHead = document.querySelector("#hero p");
    if (subHead) {
        subHead.innerHTML = `Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel</i></b>.`;
    }
})();

// 3. Change background Image for Heading
(function () {
    const heroBack = document.querySelector("#hero");
    if (heroBack) {
        heroBack.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    }
})();

// 4. Match Header Color to Footer Color
(function () {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header && footer) {
        const ftclr = window.getComputedStyle(footer).backgroundColor;
        header.style.backgroundColor = ftclr;
    }

})();

// 5. Remove Get Started Button
(function () {
    const ctabtn = document.querySelector("#hero a");
    if (ctabtn) {
        ctabtn.remove();
    }
})();

// 6. Center Alignment
(function () {
   const head2 = document.querySelectorAll("section h2");
   head2.forEach(h2 => {
    h2.style.textAlign = "center";
   }) 
})();

// 7. Services Icon Color Change
(function () {
    document.querySelectorAll("#services .material-symbols-outlined").forEach(icon => {
        icon.style.color = "#47C714";
    })
 })();

 // 8. Icon Change of Digital Marketing
 (function () {
    const icon = document.querySelector('span[data-icon="digital"]');
    if (icon) {
        icon.textContent = "ads_click";
    }
 })();

// 9. Layout Change of Tiles
(function () {
    const style = document.createElement("style");
    style.textContent = `
        @media (min-width: 1024px) {
            [data-section="product_cards"] {
                grid-template-columns: repeat(4, 1fr) !important;
            }
        }
    `;
    document.head.appendChild(style);
})();

 // 10. Change Image of Musicians
(function () {
    const music = document.querySelector('img[alt="Musicians"]');
    if (music) {
        music.src = "https://picsum.photos/id/453/400/300";
    }
})();

// Form Submission (Extra Points?)
(function () {
    const frm = document.querySelector("form");
    if (frm) {
        frm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = frm.querySelector("input[name='name']")?.value.trim();
            const email = frm.querySelector("input[name='email']")?.value.trim();

            if (name && email) {
                alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
            } else {
                alert ("Please provide a name and email.");
            }
        })
    }
})();
