const theFooter = document.getElementById(`footer`)

const injectFooter = () => {
    const foot = `<nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid" style="justify-content: end;">
                <a class="navbar-brand" href="http://balancepointfl.com/">
                    Ready for more? Check out <img src="/assets/images/TBPlogo.png" width="30"
                        style="margin-left: 0.5rem;"> The Balance Point</a>
            </div>
        </nav>`;
    theFooter.innerHTML += foot;
};

injectFooter();
