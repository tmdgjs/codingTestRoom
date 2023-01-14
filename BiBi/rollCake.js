function solution(topping) {
    let answer = 0;
    const toppingbro = {}
    let toppingbroCount = 0
    const toppingDict = {};

    //토핑의 갯수 구하기
    for(let i=0; i<topping.length; i++){
    if(!toppingDict[topping[i]]){
        toppingDict[topping[i]] = 1;
    }
    else{
        toppingDict[topping[i]] += 1;
    }}

    let toppingDictCount = Object.keys(toppingDict).length
    for(let i=0; i<topping.length; i++){
        if(!toppingbro[topping[i]]){
            toppingbro[topping[i]] = 1;

            toppingbroCount +=1
        }

        toppingDict[topping[i]] -= 1
        if(toppingDict[topping[i]] == 0){
            // delete toppingDict[topping[i]];
            toppingDictCount -= 1
        }

        if (toppingbroCount === toppingDictCount){
            answer +=1
        }
    }

    return answer
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]))

//topping.forEach((top)=>{
//     if(!toppingDict[top]){
//         toppingDict[top] = 1;
//     }
//     else{
//         toppingDict[top] += 1;
//     }
// })
// const countList = Object.values(toppingDict);
// const onlyOneTopping = [];
// countList.forEach((count)=>{
//     if(count === 1){
//         onlyOneTopping.push(count);
//     }
// })

// // 이미 안되는 케이스
// if(onlyOneTopping.length%2 !== 0){
//     return 0;