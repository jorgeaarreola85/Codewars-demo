//return all odd numbers from 1 - 100
//how would you like the returns in an array? etc..
//examples - "just to make sure i am understanding the task correctly, in this problem i would want to return etc etc etc..."
//ok im going to loop thru 1-100 and increment by 2 each time to make sure i 

function oddNumbers(){
    let arr = []
    for(let i = 0; i < 100; i++){
if(i % 2 ===1){
    arr.push(i)
}

    }
    return arr
}
console.log(oddNumbers())
    