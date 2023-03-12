function solution(numbers, target) {
  let answer = 0

  dfs(0, 0)

  function dfs(level, sum) {
    // 자식노드 도달 시
    if (level === numbers.length) {
      // 타겟넘버와 합이
      if (sum === target) {
        answer += 1
      }
      return
    }

    // 자식노드로 1단계씩 최하위까지 들어감 & (+)인 경우
    dfs(level + 1, sum + numbers[level])
    // 가장 하위 자식노드 (+) 마친 후 level (-)인 경우
    dfs(level + 1, sum - numbers[level])

    // level 5 (+) -> (-)
    // level 4 (+) -> (-) ...
  }
  return answer
}
console.log(solution([1, 1, 1, 1], 3))

// https://jjnooys.medium.com/프로그래머스-타겟-넘버-javascript-1d7983d423b5
