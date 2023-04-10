import { BeginSection } from "@components/DisplaySections/BeginSection";
import { CustomTabList } from "@components/CustomTabList";
import { Person } from "@src/types/person";
import { useContext } from "react";
import useSWR from "swr";
import { OfferingTab } from "@src/types/tab";
import { CardList } from "@components/CardLists/CardList";
import { BookingCard } from "@components/CardLists/BookingCardList";
import Link from "next/link";
import { useRouter } from "next/router";

const OfferingSection = () => {
  const router = useRouter();
  const isInTab = router.asPath.includes("/offerings");

  const { data: offeringTabs } = useSWR<OfferingTab[]>({
    url: "/offeringTabs",
    args: {},
  });

  return (
    <div
      className={`div-section  ${isInTab && "py-[1.875rem] sm:py-[4.375rem]"}`}
    >
      <BeginSection label="Our Offerings" />
      {!isInTab && (
        <div className="mt-[0.625rem] sm:mt-[2.1875rem] font-semibold text-center">
          <span>
            This whole purchase journey can be divided into three stages. For
            more details,{" "}
          </span>
          <Link
            href="/offerings"
            className="text-text-link-primary cursor-pointer font-bold"
          >
            Click Here
          </Link>
        </div>
      )}
      <div className="mt-[0.625rem] sm:mt-[2.9375rem]">
        <CustomTabList
          tabList={
            offeringTabs?.map((tab) => ({
              key: tab.id,
              label: tab.label,
              children: (
                <div key={tab.id}>
                  <CardList
                    dataList={tab.itemList}
                    key={tab.id}
                    numOfSlides={isInTab ? 2 : 3}
                  >
                    <BookingCard />
                  </CardList>
                </div>
              ),
            })) || []
          }
          initialTab={isInTab ? "1" : "2"}
        />
      </div>
    </div>
  );
};

export default OfferingSection;
