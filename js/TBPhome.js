const heroDiv = document.querySelector("#heroImg");

const injectHero = () => {
    const heroImg = `<img src="/assets/images/TBPheroImg.png" class="img-fluid" alt="The Balance Point: Resources and ideas for the 21st-century string music educator">`;
    heroDiv.innerHTML += heroImg;
};

injectHero();