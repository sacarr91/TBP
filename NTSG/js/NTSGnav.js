const theNavbar = document.getElementById(`header`)

const injectNav = () => {
    const nav = `<nav class="navbar navbar-expand-lg bg-body-tertiary mb-3 p-3">
            <div class="container-fluid">
                <img src="/NTSG/assets/images/NTSGlogo.png" alt="Logo" href="#" height="60px"
                    class="d-inline-block align-text-center">
                <a class="navbar-brand px-3" href="/NTSG/index.html" style="font-size: xx-large;">New to Strings
                    Guide</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <ul class="nav nav-pills">
                        <li class="nav-item">
                                <a class="nav-link" style="text-align: center;" href="/NTSG/index.html">Home</a>
                            <li class="nav-item">
                                <a class="nav-link" style="text-align: center;" href="/NTSG/pages/starting.html">Starting an
                                    Orchestra</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="text-align: center;"
                                    href="/NTSG/pages/maintaining.html">Maintaining an
                                    Orchestra</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                    href="/NTSG/pages/repertoire/repertoire.html" role="button"
                                    aria-expanded="false">Repertoire</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/NTSG/pages/repertoire/repertoire.html">Overview</a></li>
                                    <li><a class="dropdown-item" href="#">ES</a></li>
                                    <li><a class="dropdown-item" href="#">DS</a></li>
                                    <li><a class="dropdown-item" href="#">CS</a></li>
                                    <li><a class="dropdown-item" href="#">BS</a></li>
                                    <li><a class="dropdown-item" href="#">AS</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                    href="/NTSG/pages/pedagogy/pedagogy.html" role="button"
                                    aria-expanded="false">Pedagogy</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/NTSG/pages/pedagogy/pedagogy.html">Overview</a></li>
                                    <li><a class="dropdown-item" href="/NTSG/pages/pedagogy/violin-pedagogy.html">Violin</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/NTSG/pages/pedagogy/viola-pedagogy.html">Viola</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/NTSG/pages/pedagogy/cello-pedagogy.html">Cello</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/NTSG/pages/pedagogy/bass-pedagogy.html">Bass</a>
                                    </li>
                                
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/NTSG/pages/FOA/FOA.html"
                                    role="button" aria-expanded="false">Guide to FOA</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/NTSG/pages/FOA/FOA.html">What is FOA?</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">All-State</a></li>
                                    <li><a class="dropdown-item" href="#">Solo & Ensemble</a></li>
                                    <li><a class="dropdown-item" href="#">Concert MPA</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/NTSG/pages/tools.html">Useful Tools</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/NTSG/pages/resources.html">Resources</a>
                            </li>

                        </ul>
                </div>
        </nav>`;
    theNavbar.innerHTML += nav;
};

injectNav();
