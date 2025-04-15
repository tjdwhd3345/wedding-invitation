import * as Text from "@/components/Text.tsx";
import * as Styled from "./styled.ts";

const Calendar = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dates = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30],
  ];

  return (
    <Styled.Container>
      <Text.Heading2 style={{ fontWeight: 600 }}>06월</Text.Heading2>
      <Styled.Table>
        <caption style={{ visibility: "hidden", height: 0 }}>2025년 06월 달력</caption>
        <thead>
          <tr>
            {days.map((day, index) => (
              <Styled.Th key={index} $isSunday={day === "일"}>
                {day}
              </Styled.Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dates.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const date = week[dayIndex];
                const isSunday = dayIndex === 0;
                const isDday = date === 21;
                return (
                  <Styled.Td key={dayIndex} $isSunday={isSunday} $isDday={isDday}>
                    {isDday ? <Styled.DDay $isDday={isDday}>{date}</Styled.DDay> : date}
                  </Styled.Td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Container>
  );
};

export default Calendar;
