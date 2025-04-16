import * as Text from "@/components/Text.tsx";
// import data from "data.json";
import * as Styled from "./styled.ts";

const Calendar = () => {
  // const { host } = data.greeting;
  // const { groom, bride } = host;
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dates = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30],
  ];

  return (
    <>
      <Styled.Container>
        <Text.Heading2 style={{ fontWeight: 600 }}>06월</Text.Heading2>
        <Styled.Table>
          <caption style={{ visibility: "hidden", height: 0 }}>2025년 06월 달력</caption>
          <thead>
            <Styled.Tr>
              {days.map((day, index) => (
                <Styled.Th key={index} $isSunday={day === "일"}>
                  {day}
                </Styled.Th>
              ))}
            </Styled.Tr>
          </thead>
          <tbody>
            {dates.map((week, weekIndex) => (
              <Styled.Tr key={weekIndex}>
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
              </Styled.Tr>
            ))}
          </tbody>
        </Styled.Table>
      </Styled.Container>
      {/* <div
        style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(8px, 4vw, 28px)" }}>
        <span>
          {groom.name}❤️{bride.name}의 결혼식
        </span>
      </div> */}
    </>
  );
};

export default Calendar;
