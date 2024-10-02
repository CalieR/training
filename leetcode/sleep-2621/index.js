/**
 * @param {number} millis
 * @return {Promise}
 */
// async function sleep(millis) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`resolved after ${millis} milliseconds`);
//             //reject("promise rejected");
//         }, millis);
//     });

// }
async function sleep(millis) {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`resolved after ${millis} milliseconds`);
            //reject("promise rejected");
        }, millis);
    });

}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100