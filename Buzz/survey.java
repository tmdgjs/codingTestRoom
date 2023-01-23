import java.util.HashMap;

class Solution {
    public String solution(String[] survey, int[] choices) {
        String answer = "";
        Map<Character, Integer> result = new HashMap<>();
        result.put('R', 0);
        result.put('T', 0);
        result.put('C', 0);
        result.put('F', 0);
        result.put('J', 0);
        result.put('M', 0);
        result.put('A', 0);
        result.put('N', 0);

        for (int i = 0 ; i < survey.length ; i++) {
            Character character = null;
            int choice = choices[i];
            int point = 0;

            if (choice > 4) {
                character = survey[i].charAt(1);
            } else {
                character = survey[i].charAt(0);
            }

            switch (choice) {
                case 3:
                case 5:
                    point = 1;
                    break;
                case 2:
                case 6:
                    point = 2;
                    break;
                case 1:
                case 7:
                    point = 3;
                    break;
            }

            if (result.containsKey(character)) {
                result.put(character, result.get(character) + point);
            } else {
                result.put(character, point);
            }
        }

        if (result.get('R') >= (result.get('T'))) {
            answer += 'R';
        } else {
            answer += 'T';
        }

        if (result.get('C') >= (result.get('F'))) {
            answer += 'C';
        } else {
            answer += 'F';
        }

        if (result.get('J') >= (result.get('M'))) {
            answer += 'J';
        } else {
            answer += 'M';
        }

        if (result.get('A') >= (result.get('N'))) {
            answer += 'A';
        } else {
            answer += 'N';
        }
        
        return answer;
    }
}