function solution(maps) {
  // 상하좌우
  const directionX = [0, 0, 1, -1];
  const directionY = [1, -1, 0, 0];

  const lastX = maps.length - 1;
  const lastY = maps[0].length - 1;

  // 정답 넣을 큐
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const cur = queue.shift();
    if (cur[0] == lastX && cur[1] == lastY) {
      return move;
    }
    for (let i = 0; i < 4; i++) {
      const movedX = cur[0] + directionX[i];
      const movedY = cur[1] + directionY[i];

      if (
        movedX >= 0 &&
        movedY >= 0 &&
        movedX <= lastX &&
        movedY <= lastY &&
        maps[movedX][movedY] == 1
      ) {
        queue.push([movedX, movedY, move + 1]);
        maps[movedX][movedY] = 0;
      }
    }
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
