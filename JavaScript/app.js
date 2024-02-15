const addNumbers = (...numbers) => {
    const result = numbers.reduce((accumulator, value) => accumulator + value)
    const log = `
    Date: ${new Date}
    Total numbers: ${numbers.length}
    numbers: ${numbers}
    result: ${result}
    `
    return [result, log]
    // This file was upadted on 1-2-2024
}

const sum = addNumbers(1,2,3,4,5,6)
console.log(sum)