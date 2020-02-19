var data = [1,2,3,4,5]
//[1,7,3,4,5]
//data.splice(2,2);//[index, item to be removed, replacement]

data.findIndex((arr)=>{
    return arr === 5
})
console.log(data)