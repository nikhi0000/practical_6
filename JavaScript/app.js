const addNumbers = (...numbers) => {
    const result = numbers.reduce((accumulator, value) => accumulator + value)
    const log = `
    Date: ${new Date}
    Total numbers: ${numbers.length}
    numbers: ${numbers}
    result: ${result}
    `
    return [result, log]
}

const sum = addNumbers(1,2,3,4,5,6)
console.log(sum)