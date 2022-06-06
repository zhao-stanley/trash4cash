const verifyReceipt = (name, store, address, val) => {
  let earned = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
  let previousBalance = localStorage.getItem("balance")
    ? localStorage.getItem("balance")
    : "0";

  let bal = previousBalance.includes(",")
    ? Number(previousBalance.replace(",", "")) + earned
    : Number(previousBalance) + earned;

  let finalBalance = bal.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  localStorage.setItem("balance", finalBalance);
  console.log(
    `%cVerification Complete
    \n%cName: ${name}
    \nPrevious Balance: $${previousBalance}
    \nEarned: $${earned}
    \nNew Balance: $${finalBalance}
    \nStore: ${store}
    \nAddress: ${address}
    \nReceipt ID: ${val}`,
    "color: #60BF88;",
    "color: #fff;"
  );
};

export default verifyReceipt;
