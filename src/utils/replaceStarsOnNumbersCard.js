export const replaceStarsOnNumbersCard =(numberCard) => {
  const arr = ['*', '*', '*', '*', ' ', '*', '*', '*', '*', ' ', '*', '*', '*', '*', ' ', '*', '*', '*', '*']
  if(numberCard){
    for(let i = 0; i < numberCard.length; i++){
      arr[i] = numberCard[i]
    }
  }
  return arr.join('')
}