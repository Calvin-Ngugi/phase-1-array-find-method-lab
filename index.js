// code your solution here 

function superbowlWin(record) {
    for (let W of record) {
        while (W.result === "W") {
            return W.year;
        }
    }
}

console.log(superbowlWin())