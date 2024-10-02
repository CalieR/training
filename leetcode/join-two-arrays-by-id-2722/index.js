const join = function (arr1, arr2) {
    const combinedArrays = new Array(...arr1, ...arr2);
    const merged = {};

    combinedArrays.forEach(obj => {
        const id = obj.id
        if (!merged[id]) {
            merged[id] = obj
        } else {
            merged[id] = { ...merged[id], ...obj}
        }
    })
    const joinedArray = Object.values(merged)
    return joinedArray.sort((a, b) => a.id - b.id);
};


console.log(
  join(
    [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ],
    [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ]
  )
);
// console.log(
//   join(
//     [
//       { id: 1, x: 1 },
//       { id: 2, x: 9 },
//     ],
//     [{ id: 3, x: 5 }]
//   )
// );

// if both arrays are unique, just concat them
// Input:
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ],
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Output:
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]
