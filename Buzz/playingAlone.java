import java.util.*;
class Solution {
    public int solution(int[] cards) {
        int answer = 0;

        int size = cards.length;

        boolean[] cardGroupFlagArr = new boolean[size];
        Arrays.fill(cardGroupFlagArr, false);

        PriorityQueue<Integer> group = new PriorityQueue<>(Collections.reverseOrder());

        for (int card : cards) {

            int idx = card;
            int total = 0;
            while (true) {
                idx--;
                if (cardGroupFlagArr[idx]) {
                    break;
                }

                cardGroupFlagArr[idx] = true;
                idx = cards[idx];
                total++;
            }
            
            group.add(total);
        }

        if (group.size() >= 2) {
            answer = group.poll() * group.poll();
        } else {
            return 0;
        }
        return answer;
    }
}