function solution(x, y, n) {
    var answer = 0;

    while(x <= y){
        x = x+n;
        x = x*2;
        x = x*3;
    }


    return answer;
}

console.log(soltuion(10, 40, 5))