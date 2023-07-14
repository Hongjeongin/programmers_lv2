let targets = [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]];
let maxNum = 1;

targets.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});
let currentTarget = targets[0];

for (let i in targets) {
    let currentMaxNum = 1;
    if (currentTarget[1] <= targets[i][0]) {
        currentTarget = targets[i];
        maxNum++;
    }
}

// for (let i in targets) {
//     let currentMaxNum = 1;
//     let currentTarget = targets[i];
//     let length = targets.length;
//     for (let j = 0; j < length; j++) {
//         if (currentTarget[1] <= targets[j][0]) {
//             currentTarget = targets[j];
//             currentMaxNum++;
//         }
//     }
//     if (currentMaxNum > maxNum) {
//         maxNum = currentMaxNum;
//     }
// }

console.log(maxNum);