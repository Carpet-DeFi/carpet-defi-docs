import React from "react";

export default ({
  backing = "2 million",
  supply = "6969",
  price = "a lot of money ",
  taxType = "idiot",
  tax = "1000",
  feeSentToBacking = "123.4",
  doneWithFee = "is laundered through a washing machine.",
}) => {
  return (
    <>
      <h2>Assumptions</h2>
      Let's assume here now that the total backing is <code>{backing}$</code>,
      the total supply is <code>{supply} CARPET</code> (meaning price is {price}
      $), the {taxType} tax is <code>{tax}%</code> of the transaction, and{" "}
      <code>{feeSentToBacking}%</code> {doneWithFee}
    </>
  );
};
