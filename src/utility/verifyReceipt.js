const verifyReceipt = (name, store, address, val) => {
  let earned = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
  let bal = Number(localStorage.getItem("balance"));
  bal += earned;
  let finalBalance = bal.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  localStorage.setItem("balance", finalBalance);
  console.log(
    "%cForm Submitted" +
      "%c\nBalance: " +
      finalBalance +
      "\nName: " +
      name +
      "\nStore: " +
      store +
      "\nAddress: " +
      address +
      "\nReceipt ID: " +
      val,
    "color: #60BF88;",
    "color: #fff;"
  );
};

export default verifyReceipt;
