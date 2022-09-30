function calcolovincitore(caselle) {
    const linee = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < linee.length; i++) {
      const [a, b, c] = linee[i]
      if (caselle[a] && caselle[a] === caselle[b] && caselle[a] === caselle[c]) {
        return caselle[a]
      }
    }
    return null
  }
  
  export default calcolovincitore;