import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: clamp(8px, 4vw, 28px);
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Tr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(2px, 2vw, 8px);
`;

export const Th = styled.th<{ $isSunday: boolean }>`
  width: clamp(4px, 8vw, 32px);
  height: clamp(4px, 8vw, 32px);
  color: ${({ $isSunday }) => ($isSunday ? "#df1f55" : "#222222")};
`;

export const Td = styled.td<{ $isDday: boolean; $isSunday: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(4px, 8vw, 32px);
  height: clamp(4px, 8vw, 32px);
  background-color: #fff;
  color: ${({ $isSunday }) => ($isSunday ? "#df1f55" : "#222222")};
  font-weight: ${({ $isDday }) => ($isDday ? "600" : "400")};
`;

export const DDay = styled.div<{ $isDday: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(4px, 8vw, 32px);
  height: clamp(4px, 8vw, 32px);
  padding: 8px;
  background-color: ${({ $isDday }) => ($isDday ? "#e88ca6" : "#fff")};
  color: ${({ $isDday }) => ($isDday ? "#fdfdfd" : "#222222")};
  border-radius: ${({ $isDday }) => ($isDday ? "50%" : "")};
`;
