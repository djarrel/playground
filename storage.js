const data = [1,2,3,'design',4,5,6]

const number = data.find((num) => {
    return num === 'design';
})

const data2 = data.findIndex((num) => {
    return num === 'design'
})
console.log(number)
console.log(data2)