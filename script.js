function scrollToSection(className) {
    var element = document.querySelector(className);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
alert("this took soo long")