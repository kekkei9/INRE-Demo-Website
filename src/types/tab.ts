import { Booking } from "./booking";

export type Tab = {
  key: string;
  label: string;
  children: React.ReactNode;
};

export type OfferingTab = {
  id: string;
  label: string;
  itemList: Booking[];
};
