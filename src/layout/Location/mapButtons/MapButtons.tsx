import data from "data.json";
import kakaomapicon from "@/assets/icons/icon_kakaonavi_w48.png";
import navermapicon from "@/assets/icons/icon_navermap_w48.png";
import Button from "@/components/Button.tsx";
import * as Styled from "./styled.ts";

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <Styled.Wrapper>
      <Button onClick={() => window.open(naverMap)} style={{ fontSize: 14 }}>
        <img src={navermapicon} alt="naver map icon" style={{ width: 24 }} />
        네이버 지도
      </Button>
      <Button onClick={() => window.open(kakaoMap)} style={{ fontSize: 14 }}>
        <img src={kakaomapicon} alt="kakao map icon" style={{ width: 24 }} />
        카카오맵
      </Button>
    </Styled.Wrapper>
  );
};

export default MapButtons;
