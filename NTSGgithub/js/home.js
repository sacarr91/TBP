const homepage = document.querySelector("#main");
const heroDiv = document.querySelector("#heroImg");

const injectHero = () => {
        const heroImg = `<img src="./assets/images/Compiled by Stephanie Carr, Florida State University MME.png" class="img-fluid" alt="New-To-Strings Guide: A compilation of expert teaching, useful resources, reproducible materials,
        advice from native string players, and other burden-easing tidbits for the new-
        to-strings teacher. Compiled by Stephanie Carr, MME under the advisement of Dr. Kasia Bugaj, FSU">`;
        heroDiv.innerHTML += heroImg;
};

const injectIntro = () => {
    const homeText = `<div class="row p-4">
            <div class="col-6" style="text-align: center;">
                <h2>What Is This?</h2>
                <p class="poppins-extralight">This site is a resource meant to provide <i>approachable,</i>
                    <b>easy-access,</b> <u>quick-reference materials</u> for the music teacher tasked with taking on
                    their school's burgeoning orchestra program in addition to their regular band, chorus, guitar,
                    keyboard, or other duties. It may also be useful for string-primary music educators who are just
                    starting out.<br><br>
                    Many resources included can be saved, printed, and duplicated for use in your classroom. Where
                    copyright law applies, recommended resources are linked for you to purchase usage rights as you
                    would like. All of these resources have been used in real string classrooms, and there are no
                    affiliate links included anywhere.
                </p>
            </div>
            <div class="col-6" style="text-align: center;">
                <h2>Where Do I Start?</h2>
                <p class="poppins-extralight">
                    <u>Step 1:</u><br>
                    <b>BREATHE.</b><br>
                    <br>
                    <u>Step 2:</u><br>
                    Peruse the titles in the menu.<br>
                    <b><i>Click on what you need help with at this moment</i></b> or what interests you to learn more
                    about. These materials are not sequential and are meant to be utilized in a "grab-and-go" manner
                    that fits your busy multi-program music director lifestyle.
                </p>
            </div>`;
    homepage.innerHTML += homeText;
};

injectHero();
injectIntro();