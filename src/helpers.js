const incrementQty = (qty) => Number.parseInt(qty) + 1;

function decrementQty(qty) {
  if (qty <= 1) {
    return qty;
  } else {
    return qty - 1;
  }
}

function recalculate(price, qty, disc) {
  if (disc != null) {
    return price * qty - (disc / 100) * (price * qty);
  } else {
    return price * qty;
  }
}

module.exports = {
  incrementQty,
  decrementQty,
  recalculate,
};
