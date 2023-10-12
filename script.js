// import * as calci from "calci.js";
// calci = require("calci");
$("#add-icon").on("click", (e) => {
  if ($(".input__input").length <= 6)
    $(".input__content").clone().appendTo(".input__container");
});

$(".input__input").on("blur", (e) => {
  console.log("blurr", e.target.value);
  var curValue = e.target.value;
  calculateNumerology(curValue);
});
