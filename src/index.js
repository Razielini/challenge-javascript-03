const factorial = (number) => {
  let res = 1
  for(i=1; i<=number; i++) {
    res = res * i
  }
  return res
}

module.exports = factorial;