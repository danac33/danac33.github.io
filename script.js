function thx() {
    alert("hvala na poruci");
    location.reload();
}

function contactC() {
    const myTimeout = setTimeout(g, 1000);
}

function g() {
    alert("ako me zelite kontaktirati na drugi nacin:+387 62 633 883 ili danac_opasni@gmail.com")
    clearTimeout(myTimeout);
}

function scrollToSection(className) {
    var element = document.querySelector(className);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

