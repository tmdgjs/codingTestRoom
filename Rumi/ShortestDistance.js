function solution(maps) {
  let answer = -1

  // 1. 판의 크기를 구함
  const n = maps.length
  const m = maps[0].length

  // 2. 말이 이동 가능한 방향을 구함
  // 방향 순서로 효율성 테스트 실패여부가 갈렸음
  // 이 순서로는 통과함 (왜 일까??)
  const direction = [
    [1, 0], // 오른쪽
    [0, 1], // 아래
    [0, -1], // 위
    [-1, 0], // 왼쪽
  ]

  // 3. 말이 지나온 칸을 저장하는 배열
  const queue = []

  // 4. 출발지점을 처음에 지나가니까 0으로 > 1칸 이동
  maps[0][0] = 0
  // x, y, distance
  queue.push([0, 0, 1])

  // 다음칸이 더 없다면 종료
  while (queue.length > 0) {
    // 가로, 세로, 이동한 칸의 수
    const [x, y, distance] = queue.shift()

    // 마지막 도착지점에 도달했을때 종료
    if (x === n - 1 && y === m - 1) {
      answer = distance
      break
    }

    // 상하좌우 경우의 수 만큼 테스트
    for (let i = 0; i < direction.length; i++) {
      // 현재 위치에서 1칸 이동했을때의 위치
      const [nextX, nextY] = [x + direction[i][0], y + direction[i][1]]

      // 칸 밖으로 벗어나거나
      // 출발지점이거나
      // 막힌 칸이거나
      // 이 경우에는 패스하기
      if (
        nextX < 0 ||
        nextY < 0 ||
        nextX >= n ||
        nextY >= m ||
        maps[nextX][nextY] === 0
      ) {
        continue
      }

      // 지나갈 수 있다면 그곳을 0으로 바꿔주기
      maps[nextX][nextY] = 0
      // 다음칸의 대한 정보 넣어주기
      queue.push([nextX, nextY, distance + 1])
    }
  }

  return answer
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
)
