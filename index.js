// count title lis add

let titleCount = 1;
// total price
let totalPrice = 0;

const clickCards = document.querySelectorAll(".card");
for (const clickCard of clickCards) {
  const card = clickCard;

  card.addEventListener("click", function () {
    // get value
    const title = card.querySelector("h3").innerText;
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );
    const titleContainer = document.getElementById("title-container");

    const p = document.createElement("p");
    p.innerText = titleCount + ". " + title;
    titleContainer.appendChild(p);
    titleCount++;
    // total pric
    totalPrice += price;
    const hThere = document.getElementById("totalPrice");
    hThere.innerText = totalPrice;
  });
}

// discount area 20% start now

const btn = document.getElementById("apply-btn");

btn.addEventListener("click", function () {
  //   get the value input kup on
  const couponElement = document.getElementById("input-field");
  const inputValue = couponElement.value;
  const couponCode = inputValue.split(" ").join("").toUpperCase();
  if (totalPrice >= 200) {
    if (couponCode === "SELL200") {
      //  discount start
      const discount = document.getElementById("discountPrice");
      const discountPriceTotal = totalPrice * 0.2;
      discount.innerText = discountPriceTotal.toFixed(2);
      //   rest total
      const restTotal = document.getElementById("total");
      restTotal.innerText = totalPrice - discountPriceTotal.toFixed(2);
      //   clear input
      couponElement.value = " ";
    } else {
      alert("Invalid Coupon Code");
      const restTotal = document.getElementById("total");
      restTotal.innerText = totalPrice.toFixed(2);
      couponElement.value = " ";

      //   rest total
    }
  } else {
    const restTotal = document.getElementById("total");
    restTotal.innerText = totalPrice.toFixed(2);
    couponElement.value = " ";
    alert("plz less a 200$");
    couponElement.value = " ";
  }
});
