import styled from "styled-components";

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
  overflow: hidden;
`;

export const ImageMoreWrap = styled.div<{ $isMoreView: boolean }>`
  position: relative;
  max-height: ${(props) =>
    props.$isMoreView
      ? ""
      : "60vh"}; /* isMoreView 상태가 true일 때는 높이 제한 없이, false일 때는 195px로 작게 보이도록 */
  overflow: hidden;
`;

export const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 90%);
`;

export const PlusButton = styled.div`
  width: 100%;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
`;
