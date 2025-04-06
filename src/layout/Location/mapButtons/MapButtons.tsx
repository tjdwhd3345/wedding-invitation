import data from "data.json";
import Button from "@/components/Button.tsx";
import navermapicon from "@/assets/icons/icon_navermap_w48.png";
import kakaomapicon from "@/assets/icons/icon_kakaonavi_w48.png";
import * as Styled from "./styled.ts";

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <Styled.MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}>
        <img src={navermapicon} alt="naver map icon" style={{ width: 24 }} />
        네이버 지도
      </Button>
      <Button onClick={() => window.open(kakaoMap)}>
        <img src={kakaomapicon} alt="kakao map icon" style={{ width: 24 }} />
        카카오 내비
      </Button>
    </Styled.MapButtonWrapper>
  );
};

export default MapButtons;
