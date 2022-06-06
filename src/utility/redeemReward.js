const redeemReward = (balance, denom) => {
  const email = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "johndoe@email.com";
  if (denom === 0) return;
  let previousBalance = balance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
  let finalBalance = 0;

  balance -= denom;

  if (balance > 0) {
    finalBalance = balance.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });
  }

  localStorage.setItem("balance", finalBalance);
  console.log(
    `%cSuccessfully Redeemed
    \n%cPrevious Balance: $${previousBalance}
    \nGift Card Denomination: $${denom}
    \nNew Balance: $${finalBalance}
    \nSent to email: ${email}`,
    "color: #60BF88;",
    "color: #fff;"
  );
};

export default redeemReward;
