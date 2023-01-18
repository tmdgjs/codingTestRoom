function solution(n, k, enemy) {

    // 준호가 처음 가지고 있는 병사의 수 n, 
    // 사용 가능한 무적권의 횟수 k, 
    // 매 라운드마다 공격해오는 적의 수가 순서대로 담긴 정수 배열 enemy가 매개변수로 주어집니다

    // 최대 count 저장
    let max = 0;

    // count 저장
    let count = 0;

    // 무적권으로 이길 수 있을만한 경우의 수를 뽑기

    enemy.map((ene)=>{
        if(n - ene > 0){
            if(n - ene < 0 || k >0 ){
                k -= 1
                return count+=1
            }
            if(n - ene < 0 && k >0 ){
                k -= 1
                return count+=1
            }
           n =  n - ene;
           return count += 1;
        }
    })


    return count;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1] ))