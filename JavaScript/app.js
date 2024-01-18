const addNumbers = (...numbers) => {
    return numbers.reduce((accumulator, value) => accumulator + value)
}

const sum = addNumbers(1,2,3,4,5,6)
console.log(`Sum: ${sum}`)