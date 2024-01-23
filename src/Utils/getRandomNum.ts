export function getRandomNum ( min:number, max: number ){

  const difference = max - min
  return Math.random() * difference + min
}