import data from "data.json";
import mainImg from "@/assets/images/01.jpg";
import * as Styled from "./styled.tsx";

const Main = () => {
  const { greeting } = data;
  return (
    <Styled.Wrapper>
      <Styled.MainImg src={mainImg} />
      <Styled.MainTitle>
        모성종<span style={{ fontSize: 14 }}> 그리고 </span>이승애
      </Styled.MainTitle>
      <Styled.SubTitle>{greeting.eventDetail}</Styled.SubTitle>
    </Styled.Wrapper>
  );
};

export default Main;
