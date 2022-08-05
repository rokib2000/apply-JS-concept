function dolerToTaka(doler) {
  const Taka = doler * 94.73;
  return Taka;
}

const usd = 54;
const BDT = dolerToTaka(usd);
console.log(BDT);
