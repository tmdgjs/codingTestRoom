function solution(brackets) {

    if(brackets == ""){
        return ""
    }

    const bracketList = brackets.split("");

    //처음 올바른 문자열 확인
    let ifRight = rightCheck(bracketList);

    if(ifRight === true){
        return brackets;
    }


    // 올바른 문자열이 아닌 경우 아래 처리
    console.log("올바르지 않음")

    const uList = [];
    const vList = [];
    let firstCount = 0;
    let secondCount = 0;

    for (const bracket of bracketList){
        if(uList.length == 0){
            uList.push(bracket);
            if(bracket=="("){
                firstCount += 1;
            }else {
                secondCount += 1;
            }
        }else{
            if( firstCount == secondCount ){
                vList.push(bracket);
            }else{
                if(bracket=="("){
                    firstCount += 1;
                }else {
                    secondCount += 1;
                }
                    uList.push(bracket);
                }
        }
        }

        console.log(uList, vList)
        if(rightCheck(uList)){
            const u = uList.join("");
            return u + solution(vList.join(""));
        }else{
            return makeRight(uList, vList)
        }

}

//올바른 문자열인지 확인
function rightCheck(bracketList){
    const right =[]
    for (const bracket of bracketList){
        if(bracket == "("){
            right.push(bracket)
        }else{
            if(right.length > 0){
                right.pop();
            }else{
                right.push("random")
                break;
            }
        }
    }
    if( right.length === 0 ){
        return true;
    }else{
        return false;
    }
}

function makeRight(uList, vList){
    v = solution(vList.join(""))
    let returnBracket = "("+v+")"
    for(let i = 1; i<uList.length-1; i++){
        if(uList[i] == "("){
            returnBracket += ")"
        }else{
            returnBracket += "("
        }
    }
    return returnBracket;
}

// function numberCheck(p){
//     if(p === "("){

//     }
// }

// console.log(solution("(()())()"))

console.log(solution("()))((()"))