const formatPrice = ({
  price,
  currency = "£",
  isDecimal = true,
  decimalCount = 2,
  isThousandsSplit = true,
}) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 0 : decimalCount;

    const isNegative = price < 0;

    let i = parseInt(
      (price = Math.abs(Number(price) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      currency +
      (isNegative ? "-" : "") +
      (j ? i.substr(0, j) + (isThousandsSplit ? "," : "") : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + (isThousandsSplit ? "," : "")) +
      (decimalCount
        ? (isDecimal ? "." : "") +
          Math.abs(price - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (error) {
    console.info({ error });
  }
};

export {formatPrice}