const userInput = prompt(`Please enter your comma-separated froyo flavors.`);
const flavorCount = {}
const flavors = userInput.split(`,`)

for (const flavor of flavors){
  if(flavor in flavorCount){
    flavorCount[flavor] += 1
  }else{
    flavorCount[flavor] = 1
  }
}

console.table(flavorCount)
