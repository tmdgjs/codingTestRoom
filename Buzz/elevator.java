class Solution {
    public int solution(int storey) {
        int answer = 0;
        
        while(storey > 0) {

            int number = storey % 10;
            boolean isUp = false;

            if (number < 5) { // 5미만이면 내림
                answer += number;
            } else if (number > 5) { // 5초과면 올림
                answer += 10 - number;
                isUp = true;
            } else { // 5면?

                int nextNumber = (storey / 10) % 10;

                if (nextNumber >= 5) {
                    answer += 10 - number;
                    isUp = true;
                } else {
                    answer += number;
                }
            }

            storey /= 10;
            storey = isUp ? storey + 1 : storey;
        }

        return answer;
    }
}