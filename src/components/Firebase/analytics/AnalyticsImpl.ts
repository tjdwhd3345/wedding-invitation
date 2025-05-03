import { logEvent } from "firebase/analytics";
import { analytics } from "../../../firebase";

class AnalyticsImpl {
  constructor() {}

  logEvent() {
    logEvent(analytics, "share_kakao");
  }
}

export default AnalyticsImpl;
