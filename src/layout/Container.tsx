import styled from "styled-components";

const Container = styled.div`
  border: 16px solid transparent; /* 테두리의 초기 값 설정 */
  border-image-source: url("/background.png"); /* 이미지 경로 설정 */
  border-image-slice: 30% 49%; /* 이미지의 크기 설정 */
  border-image-width: 280px; /* 테두리 이미지의 너비 설정 */
  background-color: #ffffff;
  width: 100vw;

  @media screen and (min-width: 560px) {
    width: 560px;
  }
`;
export default Container;
