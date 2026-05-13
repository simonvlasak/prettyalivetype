function updateSize(value) {
  document.querySelector(".sample1").style.fontSize = value + "px";
  document.getElementById("sizeLabel1").textContent = value; // add this
}

function updateLineHeight(newVal) {
  document.querySelector(".sample1").style.lineHeight = newVal + "px";
  document.getElementById("sizeLabel1").textContent = newVal;
}

function updateFont(newVal) {
  $(".sample1").css("font-family", newVal);
}

function updateSize2(value) {
  document.querySelector(".sample2").style.fontSize = value + "px";
  document.getElementById("sizeLabel2").textContent = value; // add this
}

function updateLineHeight2(newVal) {
  document.querySelector(".sample2").style.lineHeight = newVal + "px";
  document.getElementById("sizeLabel2").textContent = newVal;
}

function updateFont2(newVal) {
  $(".sample2").css("font-family", newVal);
}

function updateSize3(value) {
  document.querySelector(".sample3").style.fontSize = value + "px";
  document.getElementById("sizeLabel3").textContent = value; // add this
}

function updateLineHeight3(newVal) {
  document.querySelector(".sample3").style.lineHeight = newVal + "px";
  document.getElementById("sizeLabel3").textContent = newVal;
}

function updateFont3(newVal) {
  $(".sample3").css("font-family", newVal);
}

function updateSize3_1(value) {
  document.querySelector(".sample3_1").style.fontSize = value + "px";
  document.getElementById("sizeLabel3_1").textContent = value; // add this
}

function updateLineHeight3_1(newVal) {
  document.querySelector(".sample3_1").style.lineHeight = newVal + "px";
  document.getElementById("sizeLabel3_1").textContent = newVal;
}

function updateFont3_1(newVal) {
  $(".sample3_1").css("font-family", newVal);
}

function updateSize3_2(value) {
  document.querySelector(".sample3_2").style.fontSize = value + "px";
  document.getElementById("sizeLabel3_2").textContent = value; // add this
}

function updateLineHeight3_2(newVal) {
  document.querySelector(".sample3_2").style.lineHeight = newVal + "px";
  document.getElementById("sizeLabel3_2").textContent = newVal;
}

function updateFont3_2(newVal) {
  $(".sample3_2").css("font-family", newVal);
}

function updateSize4(value) {
  document.querySelector(".sample4").style.fontSize = value + "px";
  document.getElementById("sizeLabel4").textContent = value; // add this
}

function updateLineHeight4(newVal) {
  document.querySelector(".sample4").style.lineHeight = newVal + "px";
  document.getElementById("sizeLabel4").textContent = newVal;
}

function updateFont4(newVal) {
  $(".sample4").css("font-family", newVal);
}

function updateSize5(newVal) {
  var newFontSize = newVal + "px";
  $(".sample5").css("font-size", newFontSize);
}

function updateLineHeight5(newVal) {
  var newFontSize = newVal + "px";
  $(".sample5").css("line-height", newFontSize);
}

function updateFont5(newVal) {
  $(".sample5").css("font-family", newVal);
}

function updateSize6(newVal) {
  var newFontSize = newVal + "px";
  $(".sample6").css("font-size", newFontSize);
}

function updateLineHeight6(newVal) {
  var newFontSize = newVal + "px";
  $(".sample6").css("line-height", newFontSize);
}

function updateFont6(newVal) {
  $(".sample6").css("font-family", newVal);
}

function updateSize7(value) {
  document.querySelector(".sample7").style.fontSize = value + "px";
  document.getElementById("sizeLabel7").textContent = value; // add this
}

function updateLineHeight7(newVal) {
  var newFontSize = newVal + "px";
  $(".sample7").css("line-height", newFontSize);
}

function updateFont7(newVal) {
  $(".sample7").css("font-family", newVal);
}

function updateSize8(value) {
  document.querySelector(".sample8").style.fontSize = value + "px";
  document.getElementById("sizeLabel8").textContent = value; // add this
}

function updateLineHeight8(newVal) {
  var newFontSize = newVal + "px";
  $(".sample8").css("line-height", newFontSize);
}

function updateFont8(newVal) {
  $(".sample8").css("font-family", newVal);
}

function updateFont9(value) {
  document.querySelector(".sample9").style.fontFamily = value;
}
function updateSize9(value) {
  var el = document.querySelector(".sample9");
  el.style.fontSize = value + "px";
  document.getElementById("sizeLabel9").textContent = value;
  if (value < 25) {
    el.style.columnCount = 4;
  } else if (value < 45) {
    el.style.columnCount = 3;
  } else {
    el.style.columnCount = 1;
  }
}
function updateLineHeight9(value) {
  document.querySelector(".sample9").style.lineHeight = value + "px";
}

window.addEventListener("load", function () {
  updateSize9(20);
});

function updateSize10(value) {
  document.querySelector(".sample10").style.fontSize = value + "px";
  document.getElementById("sizeLabel10").textContent = value; // add this
}

function updateLineHeight10(newVal) {
  var newFontSize = newVal + "px";
  $(".sample10").css("line-height", newFontSize);
}

function updateFont10(newVal) {
  $(".sample10").css("font-family", newVal);
}

function updateSize11(value) {
  document.querySelector(".sample11").style.fontSize = value + "px";
  document.getElementById("sizeLabel11").textContent = value; // add this
}

function updateLineHeight11(newVal) {
  var newFontSize = newVal + "px";
  $(".sample11").css("line-height", newFontSize);
}

function updateFont11(newVal) {
  $(".sample11").css("font-family", newVal);
}

function updateFont12(value) {
  document.querySelector(".sample12").style.fontFamily = value;
}
function updateSize12(value) {
  var el = document.querySelector(".sample12");
  el.style.fontSize = value + "px";
  document.getElementById("sizeLabel12").textContent = value;
  if (value < 25) {
    el.style.columnCount = 4;
  } else if (value < 45) {
    el.style.columnCount = 3;
  } else {
    el.style.columnCount = 1;
  }
}
function updateLineHeight12(value) {
  document.querySelector(".sample12").style.lineHeight = value + "px";
}

window.addEventListener("load", function () {
  updateSize12(20);
});

function updateSize13(value) {
  document.querySelector(".sample13").style.fontSize = value + "px";
  document.getElementById("sizeLabel13").textContent = value; // add this
}

function updateLineHeight13(newVal) {
  var newFontSize = newVal + "px";
  $(".sample13").css("line-height", newFontSize);
}

function updateFont13(newVal) {
  $(".sample13").css("font-family", newVal);
}

function updateSize13_1(value) {
  document.querySelector(".sample13_1").style.fontSize = value + "px";
  document.getElementById("sizeLabel13_1").textContent = value; // add this
}

function updateLineHeight13_1(newVal) {
  var newFontSize = newVal + "px";
  $(".sample13_1").css("line-height", newFontSize);
}

function updateFont13_1(newVal) {
  $(".sample13_1").css("font-family", newVal);
}

function updateSize14(value) {
  document.querySelector(".sample14").style.fontSize = value + "px";
  document.getElementById("sizeLabel14").textContent = value; // add this
}

function updateLineHeight14(newVal) {
  var newFontSize = newVal + "px";
  $(".sample14").css("line-height", newFontSize);
}

function updateFont14(newVal) {
  $(".sample14").css("font-family", newVal);
}

function toggleColor(sampleClass, color) {
  var el = document.querySelector("." + sampleClass);
  var current = window.getComputedStyle(el).color;
  el.style.color = current === "rgb(0, 0, 0)" ? color : "#000000";
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function changeSlide(dir) {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + dir + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
    document.getElementById("slide-counter").textContent =
      `${currentSlide + 1} / ${slides.length}`;
  }
  window.changeSlide = changeSlide;
});

