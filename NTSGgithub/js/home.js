const homepageIntro = document.querySelector("#main");
const homepageHero = document.querySelector("#heroImg");

const injectHero = () => {
        const heroImg = `<img src="./assets/images/Compiled by Stephanie Carr, Florida State University MME.png" class="img-fluid" alt="New-To-Strings Guide: A compilation of expert teaching, useful resources, reproducible materials,
        advice from native string players, and other burden-easing tidbits for the new-
        to-strings teacher. Compiled by Stephanie Carr, MME under the advisement of Dr. Kasia Bugaj, FSU">`;
        homepageHero.innerHTML += heroImg;
};

const injectIntro = () => {
    const homeText = `<a>Intro text goes here</a>`;
    homepageIntro.innerHTML += homeText;
};

injectHero();
injectIntro();