function solution(k, tangerine) {
    const tans = {}
   tangerine.forEach((tan)=>{
    if(!tans[tan]){
        tans[tan]=0
    }
    tans[tan] +=1
   })


  const numberArr = Object.values(tans).sort((a,b) => b-a)

  let answer=0;
  let count = 0
  for(let i = 0; i<numberArr.length; i++){
    count += numberArr[i]
    if(count >= k){
        answer = i + 1
        break;
    }
  }
    return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]))