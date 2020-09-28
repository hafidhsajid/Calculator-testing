import { incrementQty, decrementQty, recalculate } from "./helpers.js";

const incrButton = document.querySelector("#incr");
const decrButton = document.querySelector("#decr");
const qtyInput = document.querySelector("#qty");
const price = document.querySelector("#price");
const subtotal = document.querySelector("#subtotal");
const kodepromoinput = document.querySelector("#code");
const kodepromobutton = document.querySelector("#confirmButton");

incrButton.addEventListener("click", () => {
  qtyInput.value = incrementQty(parseInt(qtyInput.value));
  subtotal.innerHTML = `Rp. ` + recalculate(price.value, qtyInput.value);
});

decrButton.addEventListener("click", () => {
  qtyInput.value = decrementQty(parseInt(qtyInput.value));
  subtotal.innerHTML = `Rp. ` + recalculate(price.value, qtyInput.value);
});

kodepromobutton.addEventListener("click", () => {
  if (kodepromoinput.value == "kodepromo") {
    subtotal.innerHTML = `Rp. ` + recalculate(price.value, qtyInput.value, 10);
  } else {
    subtotal.innerHTML = `Rp. ` + recalculate(price.value, qtyInput.value);
  }
});
