import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
