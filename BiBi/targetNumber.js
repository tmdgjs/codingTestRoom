function solution(numbers, target) {

    let answer = 0; 
    const length = numbers.length
    // 음수전환

    function plusMinus(index, sum){
        if(length ===index){
            if(sum===target){
                answer +=1;
            }
            return;
        }

        plusMinus(index+1, sum+numbers[index])
        plusMinus(index+1, sum-numbers[index])
    
    }
    plusMinus(0,0)
    return answer;
    
    }

    // console.log(numberDict)


console.log(solution([1, 1, 1, 1, 1], 3))
console.log(solution([4, 1, 2, 1], 4))


// 실패작
// function solution(numbers, target) {

//     let answer = 0; 
//     numberDict = {};
//     length = numbers.length
//     // 음수전환

//     numbers.forEach((number, index)=>{
//         let minusNumberString = ''
//         let plusNumberString = ''
//         let getToTargetMinus = 0;
//         let getToTargetPlus = 0;

//         // 음수처리
//         numbers.forEach((number2, index2)=>{
//             if(index === index2){
//                 getToTargetMinus -= number2
//                 minusNumberString += `-${number2}`
//             }else{
//                 if(getToTargetMinus >= target){
//                     getToTargetMinus -= number2
//                     minusNumberString += `-${number2}`
//                 }else{
//                     getToTargetMinus += number2
//                     minusNumberString += `+${number2}`
//                 }
//             }
//         })
//         if(getToTargetMinus == target){
//             if(!numberDict[minusNumberString]){
//                numberDict[minusNumberString] = 1
//             }else{
//                 numberDict[minusNumberString] += 1
//             }
//         }

//         //양수처리
//         numbers.forEach((number2, index2)=>{
//             if(index === index2){
//                 getToTargetPlus += number2
//                 plusNumberString += `+${number2}`
//             }else{
//                 if(getToTargetPlus >= target){
//                     getToTargetPlus -= number2
//                     plusNumberString += `-${number2}`
//                 }else{
//                     getToTargetPlus += number2
//                     plusNumberString += `+${number2}`
//                 }
//             }
//         })
//         if(getToTargetPlus == target){
//             if(!numberDict[plusNumberString]){
//                 numberDict[plusNumberString] = 1
//              }else{
//                 numberDict[plusNumberString] += 1
//             }
//         }
//     })

//     answer = Object.keys(numberDict).length
//     return answer;
    
//     }