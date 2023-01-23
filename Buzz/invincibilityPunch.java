import java.util.PriorityQueue;

class Solution {
    public int solution(int soldier, int punch, int[] enemies) {
        int round = 0;
        PriorityQueue<Integer> queue = new PriorityQueue<>();

        if(punch >= enemies.length) {
            return enemies.length;
        }

        for (int enemy : enemies) {

            queue.add(enemy);

            if (queue.size() > punch) {
                soldier -= queue.poll();
            }

            if (soldier<0) {
                return round;
            }
            
            round++;
        }

        return enemies.length;
    }
}