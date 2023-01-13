import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.time.format.DateTimeFormatter;
import java.time.LocalDate;

class Solution {
    public int[] solution(String today, String[] terms, String[] privacies) {

        List<Integer> list = new ArrayList<>();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.MM.dd");
        LocalDate date = LocalDate.parse(today, formatter);

        Map<String, Integer> termsMap = new HashMap<>();

        for (String term : terms) {
            String[] split = term.split(" ");
            termsMap.put(split[0], Integer.parseInt(split[1]));
        }

        for (int i = 0 ; i < privacies.length ; i++) {

            String[] privacy = privacies[i].split(" ");
            int month = termsMap.get(privacy[1]);

            LocalDate privacyDate = date.minusMonths(month);

            if (!LocalDate.parse(privacy[0], formatter).isAfter(privacyDate)) {
                list.add(i+1);
            }
        }
        
        return list.stream()
                .mapToInt(Integer::intValue)
                .toArray();
    }
}