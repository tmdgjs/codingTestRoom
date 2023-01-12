// 프로그래머스 2023 카카오 개인정보 수집 유효기간
// 실패작
// function solution(today, terms, privacies) {

//     const answer = []
    
//        privacies.map((privacy, index)=>{
//             nalzza = privacy.split(' ')[0]
//             gaype = privacy.split(' ')[1]


//             terms.map((term)=>{

//                 // term을 돌면서 약관 및 날짜를 비교
//                yakgwan = term.split(" ")[0]
//                yakgwanMonth = term.split(" ")[1]
         
//             if(gaype === yakgwan){
//                 year =  nalzza.split('.')[0]
//                 month = nalzza.split('.')[1]
//                 day = nalzza.split('.')[2]
//                 const manryo = month+ yakgwanMonth
//                 if(yakgwanMonth+month>12){
//                    year += Math.floor((yakgwanMonth+month)/12)
//                    month = (yakgwanMonth+month)/12
//                    day = day-1

//                    if(Number(today.split('.')[0])<=year
//                    && Number(today.split('.')[1]) <= month ){
//                    }
//                 }

//             }
//         })
//     })

//     return answer;
// }

// 성공작
function solution(today, terms, privacies) {

    const todays = new Date(today)

    var yakgwanDict = new Object()
    
    terms.forEach((element)=>{
        yakgwanDict[element.split(" ")[0]] = Number(element.split(" ")[1])
    })


    const answer = []
    
    privacies.forEach((element, index) => {
        const day = new Date(element.split(" ")[0])
        const yakwgan = element.split(" ")[1]

        const month = yakgwanDict[yakwgan]

        const mangy =  new Date(day.setMonth(day.getMonth()+ month))

        if(mangy <= todays){
            answer.push(index+1)
        }
    });

    return answer;
}

console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))