import AnalyticsImpl from "./analytics/AnalyticsImpl";
import DatabaseImpl from "./db/DatabaseImpl";

class Firebase {
  public db;
  public analytics;

  constructor() {
    this.db = new DatabaseImpl();
    this.analytics = new AnalyticsImpl();
  }
}

export default new Firebase();
