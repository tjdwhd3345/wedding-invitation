import styled from "@emotion/styled";
import data from "data.json";
import mainImg from "@/assets/images/01.jpg";

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg src={mainImg} />
      {/* <MainTitle>{greeting.title}</MainTitle> */}
      <MainTitle>
        모성종<span style={{ fontSize: 14 }}> 그리고 </span>이승애
      </MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding-top: 20px;
`;

const MainTitle = styled.p`
  // font-family: HSSanTokki20-Regular, serif;
  font-size: 24px;
  line-height: 150%;
  color: #2f2120;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2f2120;
  line-height: 140%;
  white-space: pre-line;
`;
