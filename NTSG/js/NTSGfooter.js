const theFooter = document.getElementById(`footer`)

const injectFooter = () => {
    const foot = `<div style="text-align: center;">
            <h1><b>~Hello, Footer!~</b></h1>
        </div>`;
    theFooter.innerHTML += foot;
};

injectFooter();
