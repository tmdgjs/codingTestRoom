function solution(fees, records) {
	const cars = {}
	const answer = []
	records.forEach((record) => {
		const f = record.split(" ")
		const time = f[0].split(":")
		const minutes = Number(time[0]) * 60 + Number(time[1])
        if(!cars[f[1]]){
            cars[f[1]]={}
        }
		if (f[2] == "IN") {
			cars[f[1]]['in'] = minutes
            cars[f[1]]['needOut'] = true
		} else {
			const totalTime = minutes - cars[f[1]]['in']
            if(!cars[f[1]]['totalTime']){
                cars[f[1]]['totalTime'] = totalTime
            }else{
                cars[f[1]]['totalTime'] += totalTime
            }
            cars[f[1]]['needOut'] = false
		}
	})

    carAlphabet = Object.keys(cars).sort((a,b)=>{
        return a-b
    })
    
		for(car of carAlphabet){
		if (cars[car]['needOut'] == true) {
			const lastTime = 1439 - cars[car]['in']
            if(cars[car]['totalTime']){
                cars[car]['totalTime']  += lastTime
            }else{
                cars[car]['totalTime'] = lastTime
            }
            console.log(cars[car]['totalTime'])
		    const totalMoney = getMoney(cars[car]['totalTime'], fees[0], fees[1], fees[2], fees[3])
                cars[car]['totalMoney'] = totalMoney
		}else{
            cars[car]['totalMoney'] = getMoney(cars[car]['totalTime'], fees[0], fees[1], fees[2], fees[3])
        }
		answer.push(cars[car]['totalMoney'])
		}
		return answer
}

function getMoney(time, baseTime, base, additionalTime, addition){
    if(time <= baseTime){
        return base
    }else{
        return base + Math.ceil((time - baseTime)/additionalTime) * addition
    }
    
}