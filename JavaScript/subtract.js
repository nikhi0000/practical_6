const subtractNumbers = (...numbers) => {
    const result = numbers.reduce((accumulator, value) => accumulator - value)
    const log = `
    Date: ${new Date}
    Total numbers: ${numbers.length}
    numbers: ${numbers}
    result: ${result}
    `
    return [result, log]
}

const difference = subtractNumbers(1,2,3,4,5,6)
console.log(difference)