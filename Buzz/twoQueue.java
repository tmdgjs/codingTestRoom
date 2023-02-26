import java.util.*;

class Solution {
    public int solution(int[] queue1, int[] queue2) {
        
        int answer = 0;

        int queue1Index = 0;
        int queue2Index = 0;

        // 큐로 변경
        Integer[] boxedBuff1 = Arrays.stream(queue1).boxed().toArray(Integer[]::new);
        Queue<Integer> realQueue1 = new LinkedList<>(Arrays.asList(boxedBuff1));

        Integer[] boxedBuff2 = Arrays.stream(queue2).boxed().toArray(Integer[]::new);
        Queue<Integer> realQueue2 = new LinkedList<>(Arrays.asList(boxedBuff2));

        // 두 큐의 합 구하기 ( 오버플로우 long )
        int queue1Sum = Arrays.stream(queue1).sum();
        int queue2Sum = Arrays.stream(queue2).sum();

        while (queue1Sum != queue2Sum) {
            
            // 두 큐를 모두 순환했음에도 결과가 도출되지 않으면 -1 리턴
            if (queue1Index == queue1.length && queue2Index == queue2.length) {
                return -1;
            }

            Integer poll;
            if (queue1Sum > queue2Sum) {
                poll = realQueue1.poll();
                realQueue2.add(poll);
                
                queue1Sum -= poll;
                queue2Sum += poll;
                
                // 기존 큐의 길이만큼만 증가
                if (queue2Index < queue2.length) {
                    queue2Index++;
                }
                
            } else {
                poll = realQueue2.poll();
                realQueue1.add(poll);

                queue2Sum -= poll;
                queue1Sum += poll;

                // 기존 큐의 길이만큼만 증가
                if (queue1Index < queue1.length) {
                    queue1Index++;
                }
            }
            answer++;
        }

        return answer;
    }
}