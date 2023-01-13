import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;

class Solution {
    public int solution(int[] topping) {
        int answer = 0;
        int size = topping.length;
        
        Set<Integer> brother = new HashSet<>();
        Map<Integer, Integer> my = new HashMap<>();
            
        for (int i = 0 ; i < size; i++) {
            int cnt = my.getOrDefault(topping[i], 0);
            my.put(topping[i], cnt + 1);   
        }
        
        for (Integer top : topping) {
            brother.add(top);
            my.put(top, my.get(top) -1);
            
            if (my.get(top) == 0) {
                my.remove(top);
            }
            
            if (my.size() < brother.size()) {
                break;
            }
            
            if (brother.size() == my.size()) {
                answer++;
            }
        }      
        return answer;
    }
}