function statGenerator() {
    let statArray = [1, 1, 1, 1, 1, 1]
    statArray.forEach((stat, idx) => {
        let statCalc = [1, 1, 1]
        statCalc.forEach((roll, idx) => {
            statCalc[idx] = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        })
        statArray[idx] = statCalc.reduce((pv, cv) => pv + cv, 0)
    })
    return statArray
}

module.exports = statGenerator