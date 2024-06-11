let inputt2 = document.getElementById("sassy2");

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal");

var btn2 = document.getElementById("myBtn2");


btn2.onclick = function() {
  modal.style.display = "block";
}


var modal3 = document.getElementById("myModal");

var btn3 = document.getElementById("myBtn3");

btn3.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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
