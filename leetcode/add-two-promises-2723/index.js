// var addTwoPromises = async function (promise1, promise2) {
//  return await promise1 + await promise2;
// };

// const addTwoPromises = async function (promise1, promise2) {
//     return Promise.all([promise1, promise2]).then(
//         ([num1, num2]) => num1 + num2
//     )
// }
const addTwoPromises = async function (promise1, promise2) {
    return Promise.all([promise1, promise2])
    .then((values) => {
        return values[0] + values[1];
    }
    )
}

// dont forget to return the promise!!

console.log(addTwoPromises(Promise.resolve(1), Promise.resolve(2)));
