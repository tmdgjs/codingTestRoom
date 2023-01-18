function solution(survey, choices) {
    // 동일한 점수일때는 알파벳이 사전순으로 빠른 걸로

    const mbtiDict = {}

    const mbtis = ["R", "T", "C", "F", "J", "M", "A","N"]

    let answer = ""

    mbtis.map((mbti)=>{
        if(!mbtiDict[mbti]){
            mbtiDict[mbti] = 0
        }
    })

    for(let i = 0; i < choices.length; i ++){
        firstQ = survey[i].split('')[0];        
        secondQ = survey[i].split('')[1];
        
        if (choices[i] === 1){
            mbtiDict[firstQ] +=3
        }
        if (choices[i] === 2){
            mbtiDict[firstQ] +=2
        }
        if (choices[i] === 3){
            mbtiDict[firstQ] +=1
        }

        if (choices[i] === 5){
            mbtiDict[secondQ] +=1
        }
        if (choices[i] === 6){
            mbtiDict[secondQ] +=2
        }
        if (choices[i] === 7){
            mbtiDict[secondQ] +=3
        }

    }

    for(let i=0; i<mbtis.length; i++){

        if(mbtiDict[mbtis[i]]>mbtiDict[mbtis[i+1]]){
            answer += mbtis[i]
        }else if(mbtiDict[mbtis[i]]<mbtiDict[mbtis[i+1]]){
            answer += mbtis[i+1]
        }else{
            answer += mbtis[i]<mbtis[i+1] ? mbtis[i] : mbtis[i+1]
        }

        i += 1
    }


    return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]))