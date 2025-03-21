const homepage = document.querySelector("#whatWhere");
const heroDiv = document.querySelector("#heroImg");
const credsDiv = document.querySelector("#credentials");

const injectHero = () => {
    const heroImg = `<img src="/NTSGgithub/assets/images/homepageHero.png" class="img-fluid" alt="New-To-Strings Guide: A compilation of expert teaching, useful resources, reproducible materials,
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


const injectCreds = () => {
    const credentialCards = `        <div id="credentials" class="mx-5">

            <h1>NTSG Credentials</h1>

            <nav>
                <div class="nav nav-tabs" data-toggle="tab" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-creator-tab" data-bs-toggle="tab" data-bs-target="#nav-creator"
                        type="button" role="tab" aria-controls="nav-creator" aria-selected="true">Creator</a>
                    <button class="nav-link" id="nav-contributors-tab" data-bs-toggle="tab" data-bs-target="#nav-contributors"
                        type="button" role="tab" aria-controls="nav-contributors" aria-selected="false">Contributors</a>
                    <button class="nav-link" id="nav-research-tab" data-bs-toggle="tab" data-bs-target="#nav-research" type="button" role="tab"
                        aria-controls="nav-research" aria-selected="false">Research</a>
                </div>
            </nav>

            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-creator" role="tabpanel"
                    aria-labelledby="nav-creator-tab" tabindex="0">
                    <h4 class="my-3">Stephanie Carr, NTSG Creator</h4>
                    <p class="mx-2">Hi, I'm Stephanie. I'm a native string player--cello primary--and a graduate of the
                        Florida State
                        University (BME 2013, MME 2017). From 2014-2018, I served as District leadership (Chair-Elect,
                        then Chairperson) for District 8 of the Florida Orchestra Association (FOA). I have been
                        coordinator of Central Florida Cellobration since 2013 and am co-founder of The Balance Point
                        (<a href="https://www.balancepointfl.com/">balancepointfl.com</a>).<br>
                        <br>
                        For my first two years of teaching, I was itinerant between two Title I middle schools. From
                        there, I taught middle school for seven more years at a single school in a more affluent
                        demographic. In 2022, I moved down the road to teach high school orchestra & guitar in
                        Windermere, FL.<br><br>
                        I love sharing my experiences with others so that they might learn from my challenges without
                        having to endure them personally, and use that knowledge to be even more successful in their own
                        right. I hope this site benefits you greatly. Please feel free to share with friends & reach out
                        if I can be of further assistance!
                    </p>
                </div>
                <div class="tab-pane fade" id="nav-contributors" role="tabpanel" aria-labelledby="nav-contributors-tab" tabindex="0">
                    <h4 class="my-3">
                        The resources & advice available on this site were generously contributed by...</h4>
                    <p class="mx-5">
                        Music supervisors<br>
                        Veteran music teachers<br>
                        Lifelong string players, teachers, and pedagogues<br>
                        Luthiers (people who make & repair string instruments)<br>
                        Cross-pollinators & band-to-orch/chorus-to-orch converts<br>
                        String experts who have built steamroller orchestras from the ground up<br>
                    </p>
                </div>
                <div class="tab-pane fade" id="nav-research" role="tabpanel" aria-labelledby="nav-research-tab" tabindex="0">
                    <h4 class="my-3">
                    Enjoy reading papers?</h4>
                    <p class="mx-2">
                        Below are more scholarly presentations of the materials used in the creation of this
                        website,<br>
                        if you're into that sort of thing.</p>
                    <a href="#" class="btn btn-primary">Review of Literature</a>
                    <a href="#" class="btn btn-primary">Outline & Notes</a>
                </div>
            </div>
        </div>`;
    credsDiv.innerHTML += credentialCards;
};


injectHero();
injectIntro();
injectCreds();
