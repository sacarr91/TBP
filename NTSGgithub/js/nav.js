const theNavbar = document.querySelector("#header");

const injectNav = () => {
    const nav = `<nav class="navbar bg-body-tertiary mb-3 p-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style="font-size: xx-large;">
                    <img src="./assets/images/CSEE (2).png" alt="Logo" height="60px"
                        class="d-inline-block align-text-center">
                    New to Strings Guide
                </a>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" style="text-align: center;" href="#">Starting an </br>Orchestra</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style="text-align: center;" href="#">Maintaining an </br>Orchestra</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                            aria-expanded="false">Repertoire</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">ES</a></li>
                            <li><a class="dropdown-item" href="#">DS</a></li>
                            <li><a class="dropdown-item" href="#">CS</a></li>
                            <li><a class="dropdown-item" href="#">BS</a></li>
                            <li><a class="dropdown-item" href="#">AS</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                            aria-expanded="false">Pedagogy</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Violin</a></li>
                            <li><a class="dropdown-item" href="#">Viola</a></li>
                            <li><a class="dropdown-item" href="#">Cello</a></li>
                            <li><a class="dropdown-item" href="#">Bass</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Guitar</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                            aria-expanded="false">Guide to FOA</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">FOA 1</a></li>
                            <li><a class="dropdown-item" href="#">FOA 2</a></li>
                            <li><a class="dropdown-item" href="#">FOA 3</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Separated FOA</a></li>
                        </ul>
                    </li>
                   
                    <li class="nav-item">
                        <a class="nav-link" href="#">Useful Tools</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Resources</a>
                    </li>

                </ul>
            </div>
        </nav>`;
    theNavbar.innerHTML += nav;
};

injectNav();
