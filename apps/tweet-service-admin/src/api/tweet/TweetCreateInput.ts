import { InputJsonValue } from "../../types";

export type TweetCreateInput = {
  content?: string | null;
  images?: InputJsonValue;
  timestamp?: Date | null;
  user?: string | null;
};
