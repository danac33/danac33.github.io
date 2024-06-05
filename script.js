let inputt2 = document.getElementById("sassy2");

function thx(j) {
      if (j.value.length == 0)
       { 
          return false; 
       } else  {
        alert("hvala na poruci")
        return true;
       }
     

}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function contactC() {
  const myTimeout = setTimeout(g, 1000);
}

function g() {
  alert(
    "ako me zelite kontaktirati na drugi nacin:+387 62 633 883 ili danac_opasni@gmail.com"
  );
  clearTimeout(myTimeout);
}

function scrollToSection(className) {
  var element = document.querySelector(className);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
