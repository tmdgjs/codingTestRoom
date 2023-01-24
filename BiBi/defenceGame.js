function solution(n, k, enemy) {

    // 준호가 처음 가지고 있는 병사의 수 n, 
    // 사용 가능한 무적권의 횟수 k, 
    // 매 라운드마다 공격해오는 적의 수가 순서대로 담긴 정수 배열 enemy가 매개변수로 주어집니다

    let answer = 0;

    if(k >= enemy.length){
      return enemy.length;
    }

    const winning = [];
    let right = -1
    for(let i=0; i < enemy.length; i++){
      winning.push(enemy[i]);
      n = n - enemy[i];
      right += 1;

      if(n <= 0){
         if(k>0){
            winning.sort((a,b)=> a-b)
            n = n + winning[right];
            winning.pop();
            right -= 1;
            k --;
         }else{
            break;
         }
      }
      answer ++;
    }
   return answer
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1] ))


// 아래 실패, 무적권 for문 안으로 넣으면 됨
//  // count 저장
//  let count = 0;

//  let index = 0;

//  // 무적권 없이 싸운 적군의 마지막 인덱스 저장

//  const winning =[]
//  // 무적권 미사용시 최대 이길 수 있는 수 찾기
 
//    for(let i=0; i<enemy.length; i++){
//       n = n - enemy[i];
//       if(n<=0){
//          index = i
//          break;
//       }
//       count += 1
//       winning.push(enemy[i]);
//    }

//  console.log(winning, "/")

//  // 다 구하면 정렬하여 제일 큰 값을 찾고
//  winning.sort((a, b)=>{
//     return  b-a
//  })


// // 제일 큰 enemy에서 무족권 사용, 해당 숫자 다시 아군에  넣어주기
// // 최대 이기는 숫자 다시 찾고 -> 반복(무적권이 0이 될때까지)

//  for(k; k > 0; k --){
//    console.log(winning)
//    n += winning[0];
//    winning.shift();
   
//    n = n - enemy[index];
//    winning.unshift(enemy[0])
//    index += 1
//    count += 1

//    let left = 0
//    let right = winning.length
//    let mid = Math.floor((right-left) /2)
//    winning.slice(0, mid).sort((a,b)=>{
//       b-a
//    })
//  }
// return count;



// enemy.map((ene)=>{
//     if(n - ene > 0){
//         if(n - ene < 0 || k >0 ){
//             k -= 1
//             return count+=1
//         }
//         if(n - ene < 0 && k >0 ){
//             k -= 1
//             return count+=1
//         }
//        n =  n - ene;
//        return count += 1;
//     }
// })
