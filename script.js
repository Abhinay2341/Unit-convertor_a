const inputs = document.querySelectorAll(".panel input");
const c = document.querySelector("#celsius");
const f = document.querySelector("#fahrenheit");
const k = document.querySelector("#kelvin");
const ms = document.querySelector("#meter_square");
const ks = document.querySelector("#kilometer_square");
const ha = document.querySelector("#hectare");
const mis = document.querySelector("#mile_square");
const h = document.querySelector("#hour");
const min = document.querySelector("#minute");
const s = document.querySelector("#second");
const m = document.querySelector("#meter");
const km = document.querySelector("#kilometer");
const cm = document.querySelector("#centimeter");
const mm = document.querySelector("#millimeter");
const mim = document.querySelector("#micrometer");
const nm = document.querySelector("#nanometer");
const l = document.querySelector("#liter");
const ml = document.querySelector("#milliliter");
const g = document.querySelector("#gram");
const kg = document.querySelector("#kilogram");
const mg = document.querySelector("#milligram");
const p = document.querySelector("#pound");
const o = document.querySelector("#ounce");

// Responsiveness in calculation when any one unit is changed of temperature units
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const temp_unit = e.target.id;
    const v = parseInt(e.target.value);
    if (temp_unit === "celsius") {
      f.value = parseFloat(v * 1.8 + 32).toFixed(10) * 1;
      k.value = parseFloat(v + 273.15).toFixed(10) * 1;
    } else if (temp_unit === "fahrenheit") {
      c.value = parseFloat(((v - 32) * 5) / 9).toFixed(10) * 1;
      k.value = parseFloat(((v - 32) * 5) / 9 + 273.15).toFixed(10) * 1;
    } else if (temp_unit === "kelvin") {
      c.value = parseFloat(v - 273.15).toFixed(10) * 1;
      f.value = parseFloat(((v - 273.15) * 9) / 5 + 32).toFixed(10) * 1;
    }
  });
});

// Responsiveness in calculation when any one unit is changed of area units
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const ar_unit = e.target.id;
    const A = parseInt(e.target.value);
    if (ar_unit === "meter_square") {
      ks.value = parseFloat(A / 1000000).toFixed(10) * 1;
      ha.value = parseFloat(A / 10000).toFixed(10) * 1;
      mis.value = parseFloat(A / (2.59 * 1000000)).toFixed(10) * 1;
    } else if (ar_unit === "kilometer_square") {
      ms.value = parseFloat(A * 1000000).toFixed(10) * 1;
      ha.value = parseFloat(A * 100).toFixed(10) * 1;
      mis.value = parseFloat(A / 2.59).toFixed(10) * 1;
    } else if (ar_unit === "hectare") {
      ms.value = parseFloat(A * 10000).toFixed(10) * 1;
      ks.value = parseFloat(A / 100).toFixed(10) * 1;
      mis.value = parseFloat(A / 259).toFixed(10) * 1;
    } else if (ar_unit === "mile_square") {
      ms.value = parseFloat(A * 2.59 * 1000000).toFixed(10) * 1;
      ks.value = parseFloat(A * 2.59).toFixed(10) * 1;
      ha.value = parseFloat(A * 259).toFixed(10) * 1;
    }
  });
});

// Responsiveness in calculation when any one unit is changed of time units
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const time_unit = e.target.id;
    const T = parseInt(e.target.value);
    if (time_unit === "hour") {
      min.value = parseFloat(T * 60).toFixed(10) * 1;
      s.value = parseFloat(T * 3600).toFixed(10) * 1;
    } else if (time_unit === "minute") {
      h.value = parseFloat(T / 60).toFixed(10) * 1;
      s.value = parseFloat(T * 60).toFixed(10) * 1;
    } else if (time_unit === "second") {
      h.value = parseFloat(T / 3600).toFixed(10) * 1;
      min.value = parseFloat(T / 60).toFixed(10) * 1;
    }
  });
});

// Responsiveness in calculation when any one unit is changed of length units
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const length_unit = e.target.id;
    const L = parseInt(e.target.value);
    if (length_unit === "meter") {
      km.value = parseFloat(L / 1000).toFixed(20) * 1;
      cm.value = parseFloat(L * 100).toFixed(20) * 1;
      mm.value = parseFloat(L * 1000).toFixed(20) * 1;
      mim.value = parseFloat(L * 1000000).toFixed(20) * 1;
      nm.value = parseFloat(L * 1000000000).toFixed(20) * 1;
    } else if (length_unit === "kilometer") {
      m.value = parseFloat(L * 1000).toFixed(20) * 1;
      cm.value = parseFloat(L * 100000).toFixed(20) * 1;
      mm.value = parseFloat(L * 1000000).toFixed(20) * 1;
      mim.value = parseFloat(L * 1000000000).toFixed(20) * 1;
      nm.value = parseFloat(L * 1000000000000).toFixed(20) * 1;
    } else if (length_unit === "centimeter") {
      m.value = parseFloat(L / 100).toFixed(20) * 1;
      km.value = parseFloat(L / 100000).toFixed(20) * 1;
      mm.value = parseFloat(L * 10).toFixed(20) * 1;
      mim.value = parseFloat(L * 10000).toFixed(20) * 1;
      nm.value = parseFloat(L * 10000000).toFixed(20) * 1;
    } else if (length_unit === "millimeter") {
      m.value = parseFloat(L / 1000).toFixed(20) * 1;
      km.value = parseFloat(L / 1000000).toFixed(20) * 1;
      cm.value = parseFloat(L / 10).toFixed(20) * 1;
      mim.value = parseFloat(L * 1000).toFixed(20) * 1;
      nm.value = parseFloat(L * 1000000).toFixed(20) * 1;
    } else if (length_unit === "micrometer") {
      m.value = parseFloat(L / 1000000).toFixed(20) * 1;
      km.value = parseFloat(L / 1000000000).toFixed(20) * 1;
      cm.value = parseFloat(L / 10000).toFixed(20) * 1;
      mm.value = parseFloat(L / 1000).toFixed(20) * 1;
      nm.value = parseFloat(L * 1000).toFixed(20) * 1;
    } else if (length_unit === "nanometer") {
      m.value = parseFloat(L / 1000000000).toFixed(20) * 1;
      km.value = parseFloat(L / 1000000000000).toFixed(20) * 1;
      cm.value = parseFloat(L / 10000000).toFixed(20) * 1;
      mm.value = parseFloat(L / 1000000).toFixed(20) * 1;
      mim.value = parseFloat(L / 1000).toFixed(20) * 1;
    }
  });
});
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const vol_unit = e.target.id;
    const V = parseInt(e.target.value);
    if (vol_unit === "liter") {
      ml.value = parseFloat(V * 1000).toFixed(10) * 1;
    } else if (vol_unit === "milliliter") {
      l.value = parseFloat(V / 1000).toFixed(10) * 1;
    }
  });
});

// Responsiveness in calculation when any one unit is changed of weight units
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const weight_unit = e.target.id;
    const W = parseInt(e.target.value);
    if (weight_unit === "gram") {
      kg.value = parseFloat(W / 1000).toFixed(20) * 1;
      mg.value = parseFloat(W * 1000).toFixed(20) * 1;
      p.value = parseFloat(W / 453.6).toFixed(20) * 1;
      o.value = parseFloat(W / 28.35).toFixed(20) * 1;
    } else if (weight_unit === "kilogram") {
      g.value = parseFloat(W * 1000).toFixed(20) * 1;
      mg.value = parseFloat(W * 1000000).toFixed(20) * 1;
      p.value = parseFloat(W * 2.205).toFixed(20) * 1;
      o.value = parseFloat(W * 35.274).toFixed(20) * 1;
    } else if (weight_unit === "milligram") {
      g.value = parseFloat(W / 1000).toFixed(20) * 1;
      kg.value = parseFloat(W / 1000000).toFixed(20) * 1;
      p.value = parseFloat(W / 453600).toFixed(20) * 1;
      o.value = parseFloat(W / 28350).toFixed(20) * 1;
    } else if (weight_unit === "pound") {
      g.value = parseFloat(W * 453.6).toFixed(20) * 1;
      kg.value = parseFloat(W / 2.205).toFixed(20) * 1;
      mg.value = parseFloat(W * 453600).toFixed(20) * 1;
      o.value = parseFloat(W * 16).toFixed(20) * 1;
    } else if (weight_unit === "ounce") {
      g.value = parseFloat(W * 28.35).toFixed(20) * 1;
      kg.value = parseFloat(W / 35.274).toFixed(20) * 1;
      mg.value = parseFloat(W * 28350).toFixed(20) * 1;
      p.value = parseFloat(W / 16).toFixed(20) * 1;
    }
  });
});

function openUnit(evt, unitName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(unitName).style.display = "block";
  evt.currentTarget.className += " active";
}
Foo