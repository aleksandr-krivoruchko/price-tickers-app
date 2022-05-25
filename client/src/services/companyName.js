export function getCompanyNameByTicker(ticker) {
  let name;
  switch (ticker) {
    case "AAPL":
      name = "Apple";
      break;
    case "GOOGL":
      name = "Google";
      break;
    case "MSFT":
      name = "Microsoft";
      break;
    case "AMZN":
      name = "Amazon";
      break;
    case "FB":
      name = "Facebook";
      break;

    case "TSLA":
      name = "Tesla";
      break;

    default:
      break;
  }
  return name;
}
