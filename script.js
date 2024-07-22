const typeBtn = document.querySelector(".type-button");
const typeBtnCircle = document.querySelector(".circle");

const card01 = document.getElementById("card-01");
const card02 = document.getElementById("card-02");
const card03 = document.getElementById("card-03");

const prices = {
  annually: {
    "card-01": "$199.99",
    "card-02": "$249.99",
    "card-03": "$399.99",
  },
  monthly: {
    "card-01": "$19.99",
    "card-02": "$24.99",
    "card-03": "$39.99",
  },
};

let isAnnually = true;

const checkoutBtnClick = () => {
  if (typeBtn && typeBtnCircle) {
    const currentRight = typeBtnCircle.style.right;

    if (!currentRight) {
      typeBtnCircle.style.left = "";
      typeBtnCircle.style.right = "5px";
    } else {
      typeBtnCircle.style.right = "";
      typeBtnCircle.style.left = "5px";
    }

    if (isAnnually) {
      card01.textContent = prices.monthly["card-01"];
      card02.textContent = prices.monthly["card-02"];
      card03.textContent = prices.monthly["card-03"];
    } else {
      card01.textContent = prices.annually["card-01"];
      card02.textContent = prices.annually["card-02"];
      card03.textContent = prices.annually["card-03"];
    }

    isAnnually = !isAnnually;
  }
};
