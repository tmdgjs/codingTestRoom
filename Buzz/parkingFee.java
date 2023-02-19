import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

class Solution {
    
    // 시간을 분으로 변경
    public Integer convertTimeToMinute(final String time) {
        String[] timeSplit = time.split(":");
        return (Integer.parseInt(timeSplit[0]) * 60) + Integer.parseInt(timeSplit[1]);
    }
    
    public int[] solution(int[] fees, String[] records) {
        int[] answer = {};

        // 차 번호, 누적 주차 시간
        // TreeMap으로 차 번호 오름차순 정리
        Map<String, Integer> carNumAndTimeMap = new TreeMap<>();
        Map<String, Boolean> carNumAndIsOut = new HashMap<>();

        int defaultTime = fees[0];
        int defaultPrice = fees[1];
        int unitTime = fees[2];
        int unitPrice = fees[3];

        // 차 번호 별 누적 주차 시간 설정
        for (final String record : records) {

            String[] recordSplit = record.split(" ");

            String time = recordSplit[0];
            String carNum = recordSplit[1];
            String inOrOut = recordSplit[2];

            if (carNumAndTimeMap.containsKey(carNum)) {
                Integer beforeTime = carNumAndTimeMap.get(carNum);
                carNumAndTimeMap.put(carNum, inOrOut.equals("IN") ? beforeTime - timeToconvertTimeToMinuteMinute(time) : beforeTime + convertTimeToMinute(time));
            } else {
                carNumAndTimeMap.put(carNum, -convertTimeToMinute(time));
            }

            carNumAndIsEnd.put(carNum, !inOrOut.equals("IN"));
        }

        // 차 번호 개수 만큼 배열 크기 설정
        answer = new int[carNumAndTimeMap.size()];

        AtomicInteger index =  new AtomicInteger();
        for (final String carNum : carNumAndTimeMap.keySet()) {

            Integer time = carNumAndTimeMap.get(carNum);

            // Out 기록이 없다면
            if (!carNumAndIsEnd.get(carNum)) {
                time += convertTimeToMinute("23:59");
            }

            // 기본 시간과 같을 때는 기본 요금만 청구함
            if (time <= defaultTime) {
                answer[index.getAndIncrement()] = defaultPrice;
            } else {
                answer[index.getAndIncrement()] = (int) (defaultPrice + Math.ceil((double)(time - defaultTime) / unitTime) * unitPrice);
            }
        }
        
        return answer;
    }
}