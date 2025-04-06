import { createContext, useContext, useEffect } from "react";

const KAKAOTALK_API_KEY = import.meta.env.VITE_APP_KAKAOTALK_API_KEY;

declare global {
  interface Window {
    Kakao: {
      init: (appKey: string) => void;
      isInitialized: () => boolean;
      Share: any;
    };
  }
}

const KakaoContext = createContext(null);

export const useKakaoContext = () => {
  return useContext(KakaoContext);
};

interface Props {
  children: React.ReactNode;
}
const KakaoProvider = (props: Props) => {
  const { children } = props;

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAOTALK_API_KEY); // 사용하려는 앱의 JavaScript 키 입력
    }
  }, []);

  return <KakaoContext.Provider value={null}>{children}</KakaoContext.Provider>;
};
export default KakaoProvider;
