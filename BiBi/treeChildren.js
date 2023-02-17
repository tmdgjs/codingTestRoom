function solution(number) {

    let count = 0;

    number.forEach((n, index)=>{
        for(let secondI = index+1; secondI<number.length; secondI++){
            for(let thirdI = secondI+1; thirdI<number.length; thirdI++){
                let sum = n + number[secondI] + number[thirdI]
                if(sum == 0){
                    count += 1
                }
            }
        }
    })
    return count;
}

console.log(solution([-2, 3, 0, 2, -5]))