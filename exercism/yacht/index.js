function calculateChoice(dice) {
  return dice.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

//  console.log(calculateChoice([5, 5, 5, 5, 5]));

function calculateYacht(dice) {
  return dice.every((die) => die === dice[0]) ? 50 : 0;
}

//   console.log(calculateYacht([5, 5, 5, 5, 5]));
//   console.log(calculateYacht([5, 5, 5, 5, 4]));

function calculateBigStraight(dice) {
  const bigStraight = JSON.stringify([2, 3, 4, 5, 6]);
  const sortedDice = JSON.stringify(dice.sort((a, b) => a - b));
  // don't need to check array length in this case as we know it's always 5 elements
  return bigStraight === sortedDice ? 30 : 0;
  //return dice.every((die) => bigStraight.includes(die)) ? 50 : 0;
}

//console.log(calculateBigStraight([2, 2, 6, 3, 1,]));

function determineDiceCounts(dice) {
  let diceCounts = {};
  dice.forEach((die) => {
    if (diceCounts[die]) {
      diceCounts[die]++;
    } else {
      diceCounts[die] = 1;
    }
  });
  return diceCounts;
}

//console.log(determineDiceCounts([2, 2, 2, 2, 1,]));

function countOfTwos(diceCountObj) {
  console.log(diceCountObj[2] * 2);
}
function countOfOnes(diceCountObj) {
  console.log(diceCountObj[1] * 1);
}

function countOfNumber(diceCountObj, number) {
    if (diceCountObj[number]) {
      return diceCountObj[number] * number;
    }
    return 0;

}

console.log(countOfNumber(determineDiceCounts([2, 2, 2, 2, 1]), 2));
console.log(countOfNumber(determineDiceCounts([2, 2, 2, 2, 1]), 1));
console.log(countOfNumber(determineDiceCounts([2, 2, 2, 2, 1]), 3));

function calculate4OfAKind(diceCountObj) {
  const count4 = Object.keys(diceCountObj).find(
    (key) => diceCountObj[key] === 4
  );
  return count4 ? count4 * 4 : 0;
}

// calculate4OfAKind(determineDiceCounts([2, 6, 2, 2, 1,]));
// console.log(calculate4OfAKind(determineDiceCounts([2, 2, 2, 2, 1,])));

function calculateFullHouse(diceCountObj) {
  const count2 = Object.keys(diceCountObj).find(
    (key) => diceCountObj[key] === 2
  );
  const count3 = Object.keys(diceCountObj).find(
    (key) => diceCountObj[key] === 3
  );
  console.log(count2, count3);
  return count2 && count3 ? Number(count2 * 2 + count3 * 3) : 0;
}
//  console.log(calculateFullHouse(determineDiceCounts([5, 5, 5, 1, 1])));

// console.log(calculate4OfAKind([2, 2, 2,2, 1,]));
// console.log(calculate4OfAKind([1, 1, 1, 1, 1,]));
// console.log(calculate4OfAKind([1, 2, 3, 4, 5,]));
// console.log(calculate4OfAKind([1, 2, 3, 4, 6,]));
// console.log(calculate4OfAKind([1, 2, 3, 4, 5,]));
