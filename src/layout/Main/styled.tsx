import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
export const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding-top: 20px;
`;

export const MainTitle = styled.p`
  font-size: 24px;
  line-height: 150%;
  color: #2f2120;
  white-space: pre-line;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  color: #2f2120;
  line-height: 140%;
  white-space: pre-line;
`;
