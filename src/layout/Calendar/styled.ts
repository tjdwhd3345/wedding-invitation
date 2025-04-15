import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 24px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th<{ $isSunday: boolean }>`
  padding: 8px;
  color: ${({ $isSunday }) => ($isSunday ? "red" : "#222222")};
`;

export const Td = styled.td<{ $isDday: boolean; $isSunday: boolean }>`
  width: 32px;
  height: 32px;
  background-color: #fff;
  color: ${({ $isSunday }) => ($isSunday ? "red" : "#222222")};
  font-weight: ${({ $isDday }) => ($isDday ? "600" : "400")};
`;

export const DDay = styled.div<{ $isDday: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  background-color: ${({ $isDday }) => ($isDday ? "#e88ca6" : "#fff")};
  color: ${({ $isDday }) => ($isDday ? "#fafafa" : "#222222")};
  border-radius: ${({ $isDday }) => ($isDday ? "50%" : "")};
`;
