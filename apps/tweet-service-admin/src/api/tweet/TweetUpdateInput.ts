import { InputJsonValue } from "../../types";

export type TweetUpdateInput = {
  content?: string | null;
  images?: InputJsonValue;
  timestamp?: Date | null;
  user?: string | null;
};
