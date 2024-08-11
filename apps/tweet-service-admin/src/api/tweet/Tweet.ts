import { JsonValue } from "type-fest";

export type Tweet = {
  content: string | null;
  createdAt: Date;
  id: string;
  images: JsonValue;
  timestamp: Date | null;
  updatedAt: Date;
  user: string | null;
};
