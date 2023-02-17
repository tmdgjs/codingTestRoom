function solution(cards) {
    var answer = 0;

    let answerList =[]

    const cardIndex = {}
    let number = 1;
    let index;

    cards.forEach((card, index)=>{
        cardIndex[index+1] = card;
    })


    // i가 배열 길이 다 다르기 전까지
    // 해당 숫자 + 해당 인덱스를 저장 해놓고 계속 비교
    for(let i = 0; i < cards.length; i++){

        if( cardIndex[number] == 0 || cardIndex[number] == number ){

            cardIndex[number] = 0
            answerList.push(answer)
            answer = 0
            number = i + 2

        }else{
            index = number
            number = cardIndex[index];
            cardIndex[index] = 0
            answer += 1
        }

        if(i == cards.length-1){
            answerList.push(answer)
        }
    }
    
    answerList.sort((a,b)=>{
        b - a
    })

    return answerList[0] * answerList[1]
}


console.log(solution([8,6,3,7,2,5,1,4]))