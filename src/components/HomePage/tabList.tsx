import { BookingCardList } from "@components/BookingCardList";
import { Booking } from "@src/types/booking";
import { Tab } from "@src/types/tab";

const bookingList: Booking[] = [
  {
    imgSrc: "/assets/home/booking/img_1.png",
    title: "Background verification",
    description:
      "Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...",
    price: "INR 3000 / Project",
  },
  {
    imgSrc: "/assets/home/booking/img_2.png",
    title: "Virtual site visit",
    description:
      "It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...",
  },
  {
    imgSrc: "/assets/home/booking/img_2.png",
    title: "Title diligence",
    description:
      "Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...",
  },
];

export const tabList: Tab[] = [
  {
    key: "1",
    label: "Pre-Booking",
    children: <BookingCardList bookingList={bookingList} />,
  },
  {
    key: "2",
    label: "Post-Booking & Pre-Registration",
    children: <BookingCardList bookingList={bookingList} />,
  },
  {
    key: "3",
    label: "Post-Registration ",
    children: <BookingCardList bookingList={bookingList} />,
  },
];
