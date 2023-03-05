function solution(queue1, queue2) {
    let queue1Sum = queue1.reduce((a, b) => a+b)
    let queue2Sum = queue2.reduce((a, b) => a+b)

    let totalSum = queue1Sum + queue2Sum
    let half = totalSum/2
    let count=0;
    const end = queue1.length *3

    let queue1Index = 0;
    let queue2Index = 0;

    while (count < end){
        if(queue2Sum > half ){
            queue1Sum = queue1Sum + queue2[queue2Index]
            queue2Sum = queue2Sum - queue2[queue2Index]
            queue1.push(queue2[queue2Index])
            queue2Index += 1
            count += 1
        }else if(queue2Sum < half ){
            queue2Sum = queue2Sum + queue1[queue1Index]
            queue1Sum = queue1Sum - queue1[queue1Index]
            queue2.push(queue1[queue1Index])
            queue1Index += 1
            count += 1
        }else if(queue1Sum === half){
            break;
        }
    }

    if(count >= end ){
        return -1
    }
    return count
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]))