import { useEffect, useRef, useState } from "react";
import { NavermapsProvider } from "react-naver-maps";
import * as Text from "@/components/Text.tsx";
import KakaoProvider from "@/components/KakaoProvider";
import * as Layout from "@/layout/index";
import Account from "@/layout/Account/Account.tsx";
import FloatingBar from "@/layout/FloatingBar/FloatingBar.tsx";
import GalleryWrap from "@/layout/Gallery/GalleryWrap.tsx";
import Guestbook from "@/layout/Guestbook/Guestbook.tsx";
import Invitation from "@/layout/Invitation/Invitation.tsx";
import Location from "@/layout/Location/Location.tsx";
import Main from "@/layout/Main/Main.tsx";

function App() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (galleryRef.current) {
        const { offsetTop } = galleryRef.current;
        const scrollPosition = window.scrollY;

        setIsVisible(scrollPosition >= offsetTop);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <KakaoProvider>
        <Layout.Container>
          <Layout.Wrapper>
            <Main />
          </Layout.Wrapper>
          <Layout.Wrapper>
            <Text.Heading1>모시는 글</Text.Heading1>
            <Invitation />
          </Layout.Wrapper>
          <Layout.Wrapper ref={galleryRef}>
            <Text.Heading1>Gallery</Text.Heading1>
            <GalleryWrap />
          </Layout.Wrapper>
          <Layout.Wrapper>
            <Text.Heading1>마음 전하실 곳</Text.Heading1>
            <Account />
          </Layout.Wrapper>
          <Layout.Wrapper>
            <Text.Heading1>오시는 길</Text.Heading1>
            <Location />
          </Layout.Wrapper>
          {/* <Layout.Wrapper>
            <Text.Heading1>신랑 신부에게</Text.Heading1>
            <Guestbook />
          </Layout.Wrapper> */}
          <FloatingBar isVisible={isVisible} />
        </Layout.Container>
      </KakaoProvider>
    </NavermapsProvider>
  );
}

export default App;
