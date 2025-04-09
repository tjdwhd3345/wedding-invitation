import { useEffect, useRef } from "react";
import data from "data.json";
// import { increment, onValue, ref, update } from 'firebase/database';
// import { realtimeDb } from 'firebase.ts';
import JSConfetti from "js-confetti";
import Heart from "@/assets/icons/heart_plus.svg?react";
import Share from "@/assets/icons/share.svg?react";
import Upward from "@/assets/icons/upward.svg?react";
import Button from "@/components/Button.tsx";
import * as Styled from "./styled.ts";

const jsConfetti = new JSConfetti();

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {
  const { emojis } = data;

  const shareRef = useRef<HTMLAnchorElement>(null);

  // TODO: count 기능 사용 원할시 firebase realtime db 연결!
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  // TODO: realtime db 에 likes 객체 추가.
  //   const dbRef = ref(realtimeDb, 'likes');
  //   onValue(dbRef, (snapshot) => {
  //     setCount(Number(snapshot.val()));
  //   });
  // }, []);

  const handleCopy = () => {
    // navigator.clipboard.writeText(window.location.href).then(
    //   () => {
    //     alert("주소가 복사되었습니다.😉😉");
    //   },
    //   () => {
    //     alert("주소 복사에 실패했습니다.🥲🥲");
    //   },
    // );
  };

  const handleCount = () => {
    jsConfetti.addConfetti({ emojis });

    // 버튼 클릭시 likes 수 증가
    // const dbRef = ref(realtimeDb);
    // void update(dbRef, {
    //   likes: increment(1),
    // });
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (window.Kakao.isInitialized() && shareRef.current) {
      // TODO: 썸네일 이미지 변경
      window.Kakao.Share.createDefaultButton({
        container: `#${shareRef.current.id}`,
        objectType: "location",
        address: "서울 송파구 천호대로 996 라비니움",
        addressTitle: "천호 라비니움, 4층 블룸홀",
        content: {
          title: "모성종 ♡ 이승애 결혼합니다",
          description: "2025년 6월 21일 (토) 오후 4시 20분",
          imageUrl: "https://wedding-invitation-smoky-seven.vercel.app/thumbnail.jpg",
          link: {
            mobileWebUrl: "https://wedding-invitation-smoky-seven.vercel.app/",
            webUrl: "https://wedding-invitation-smoky-seven.vercel.app/",
          },
        },
        buttons: [
          {
            title: "청첩장 보기",
            link: {
              mobileWebUrl: "https://wedding-invitation-smoky-seven.vercel.app/",
              webUrl: "https://wedding-invitation-smoky-seven.vercel.app/",
            },
          },
        ],
      });
    }
  }, [window.Kakao.isInitialized(), shareRef.current]);

  return (
    <Styled.Nav $isVisible={isVisible}>
      <Button onClick={handleCount}>
        <Heart fill="#e88ca6" />
        {/*{count || ''}*/}
      </Button>
      <Button onClick={handleCopy} id="kakaotalk-sharing-btn" ref={shareRef}>
        <Share fill="#e88ca6" />
        공유
      </Button>
      <Button onClick={handleScroll}>
        <Upward fill="#e88ca6" />
        위로
      </Button>
    </Styled.Nav>
  );
};

export default FloatingBar;
