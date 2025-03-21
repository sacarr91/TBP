const TbpNavbar = document.getElementById(`header`)

const injectTbpNav = () => {
    const nav = `<nav class="navbar navbar-expand-lg bg-body-tertiary mb-3 p-3">
        <div class="container-fluid">
            <img src="/assets/images/TBPlogo.png" alt="Logo" href="/index-2.html" height="60px"
                class="d-inline-block align-text-center">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" style="text-align: center;" href="/index-2.html">Home</a>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                href="/TBP/toolbox.html" role="button"
                                aria-expanded="false">Toolbox</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/TBP/Toolbox/activities.html">Activities</a></li>
                                <li><a class="dropdown-item" href="/TBP/Toolbox/resources.html">Resources</a></li>
                                <li><a class="dropdown-item" href="/TBP/Toolbox/tips.html">Tips</a></li>
                                <li><a class="dropdown-item" href="/TBP/Toolbox/DCs-hosts.html">District Chairs & Hosts</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/TBP/deepdive.html">Deep Dive</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/TBP/contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/NTSG/index.html">New to Strings Guide</a>
                        </li>
                    </ul>
            </div>
    </nav>`;
    TbpNavbar.innerHTML += nav;
};

injectTbpNav();
