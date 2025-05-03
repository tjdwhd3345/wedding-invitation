import { useEffect, useRef, useState } from "react";
import data from "data.json";
import JSConfetti from "js-confetti";
import Heart from "@/assets/icons/heart_plus.svg?react";
import Share from "@/assets/icons/share.svg?react";
import Upward from "@/assets/icons/upward.svg?react";
import { Firebase } from "@/components/Firebase";
import Button from "@/components/Button.tsx";
import * as Styled from "./styled.ts";

const jsConfetti = new JSConfetti();

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {
  const { emojis } = data;
  const shareRef = useRef<HTMLAnchorElement>(null);
  const [count, setCount] = useState(0);

  const displayCount = count > 999 ? "999+" : `${count}`;

  useEffect(() => {
    Firebase.db.getLikeCounts((count) => {
      setCount(count);
    });
  }, []);

  const handleCopy = () => {
    Firebase.analytics.logEvent();
    // navigator.clipboard.writeText(window.location.href).then(
    //   () => {
    //     alert("주소가 복사되었습니다.😉😉");
    //   },
    //   () => {
    //     alert("주소 복사에 실패했습니다.🥲🥲");
    //   },
    // );
  };

  const handleCount = async () => {
    jsConfetti.addConfetti({ emojis });

    try {
      await Firebase.db.increaseLike();
    } catch (e) {
      console.error("an error occured in increaseLike", { e });
    }
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (window.Kakao.isInitialized() && shareRef.current) {
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
        {`${displayCount}` || ""}
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
