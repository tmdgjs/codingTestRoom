import java.util.*;

class Solution {
    public int solution(int k, int[] tangerine) {
        
        int answer = 0;
        Map<Integer, Integer> map = new HashMap<>();
        for (int i : tangerine) {
            map.put(i, map.getOrDefault(i, 0) + 1);
        }

        List<Integer> list = (List<Integer>) map.values();

        // 최소
        list.sort(Collections.reverseOrder());

        int sum = 0;
        for (Integer integer : list) {
            answer++;
            sum += integer;
            
            if (sum >= k) {
                break;
            }
        }
        return answer;
    }
}