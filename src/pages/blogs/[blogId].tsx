import {
  faArrowLeft,
  faArrowRight,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { BeginSection } from "@components/DisplaySections/BeginSection";
import BlogCard from "@components/CardLists/BlogCardList/BlogCard";
import { blogList } from "@components/HomePage/ThirdSection";
import { BlogCardList } from "@components/CardLists/BlogCardList";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styles from "@styles/markdown-styles.module.scss";

export type Blog = {
  id: string;
  title: string;
  content: string;
};

export const blogData: Blog[] = [
  {
    id: "1",
    title: "Application of Blockchain in real estate industry",
    content: `> Blockchain technology has been considered as one of the most revolutionary technological advances in recent years. Initially developed as the underlying technology for cryptocurrencies such as Bitcoin, it has now found its way into a wide range of industries. One such industry is real estate, where blockchain is being increasingly used to streamline processes, reduce fraud, and increase transparency. In this article, we will explore the application of blockchain in real estate, along with figures and their sources.  

*What is blockchain?*

Before delving into the application of blockchain in real estate, it is important to understand what blockchain is. In simple terms, blockchain is a decentralized, digital ledger that records transactions in a secure and transparent manner. It is a distributed database that maintains a continuously growing list of records called blocks, each of which contains a timestamp and a link to the previous block. This makes it virtually impossible to alter the data contained in the blockchain, making it an ideal technology for secure and transparent transactions.  

*Application of blockchain in real estate*  

Real estate is a complex industry with multiple parties involved in the buying and selling of properties. The traditional process of buying and selling a property involves a lot of paperwork, which can be time-consuming and prone to errors. Blockchain technology can help streamline this process by providing a secure, transparent, and efficient platform for real estate transactions. Some of the ways in which blockchain is being used in real estate are:  
1. Smart contracts  
One of the most significant applications of blockchain in real estate is the use of smart contracts. A smart contract is a self-executing contract that is programmed to automatically execute when certain conditions are met. In real estate, smart contracts can be used to automate the transfer of property ownership and the release of funds once the conditions of the contract are met. This can help reduce the time and cost involved in real estate transactions, as well as reduce the risk of fraud.  
2. Property title management  
Another area where blockchain can be useful in real estate is property title management. Property titles are a crucial component of real estate transactions, as they establish ownership of the property. However, the current system of property title management is often prone to errors, fraud, and disputes. Blockchain technology can provide a secure and transparent platform for managing property titles, which can help reduce the risk of fraud and disputes.  
3. Real estate crowdfunding  
Real estate crowdfunding is an emerging trend in the real estate industry, where multiple investors pool their resources to invest in a property. Blockchain technology can be used to provide a secure and transparent platform for real estate crowdfunding, which can help reduce the risk of fraud and increase investor confidence.  
4. Property valuation  
Property valuation is an important part of the real estate industry, as it helps establish the market value of a property. However, the current system of property valuation is often subjective and prone to errors. Blockchain technology can be used to provide a secure and transparent platform for property valuation, which can help reduce the risk of errors and increase the accuracy of valuations.  

*Benefits of using blockchain in real estate*  

The use of blockchain in real estate can provide a number of benefits, including  
1. Increased transparency - Blockchain technology provides a secure and transparent platform for real estate transactions, which can help reduce the risk of fraud and increase transparency.  
2. Reduced costs- By automating the real estate transaction process and reducing the need for intermediaries, blockchain can help reduce the costs involved in real estate transactions.  
3. Improved efficiency- The use of smart contracts and other blockchain-based technologies can help automate the real estate transaction process, which can help improve efficiency and reduce the time involved in real estate transactions.  
4. Increased security- Blockchain technology provides a secure platform for real estate transactions, which can help reduce the risk of fraud and increase the security of transactions.`,
  },
  {
    id: "2",
    title: "Real estate Challenges in Bengaluru",
    content: `There are several problems that buyers may face during real estate purchase in Bengaluru. Some of the major problems are as follows:  
1. Delayed possession: Delayed possession is one of the most common issues faced by buyers in Bengaluru. According to a report by ANAROCK Property Consultants, nearly 60% of the real estate projects in Bengaluru are delayed, which can cause significant inconvenience to buyers.  
2. Lack of transparency: The lack of transparency in the real estate sector is another major problem in Bengaluru. This can include issues such as ambiguous pricing, hidden charges, and incomplete documentation. According to a survey by Magicbricks, nearly 60% of buyers in Bengaluru face issues related to transparency in the real estate sector.  
3. High prices: Bengaluru has one of the highest property prices in India, which can make it difficult for buyers to find affordable housing. According to a report by Knight Frank, the average property prices in Bengaluru increased by 2.8% in Q1 2021, making it one of the top-performing cities in terms of price growth.  
4. Legal issues: Buyers in Bengaluru can face legal issues related to property ownership and documentation. For example, the Karnataka High Court has issued orders to stop the registration of properties that are built on lake beds or other ecologically sensitive areas. This can create legal hurdles for buyers who have already invested in such properties.  

Sources:  
1. ANAROCK Property Consultants report: [https://www.anarock.com/blog/homebuyers-beware-60-bangalore-real-estate-projects-delayed/](https://www.anarock.com/blog/homebuyers-beware-60-bangalore-real-estate-projects-delayed/)  
2. Magicbricks survey: [https://economictimes.indiatimes.com/wealth/real-estate/majority-of-homebuyers-face-transparency-issues-in-bengaluru-magicbricks-survey/articleshow/64887577.cms](https://economictimes.indiatimes.com/wealth/real-estate/majority-of-homebuyers-face-transparency-issues-in-bengaluru-magicbricks-survey/articleshow/64887577.cms)  
3. Knight Frank report: [https://www.knightfrank.co.in/research/article/2021-03-03-bangalore-office-market-report-q4-2020](https://www.knightfrank.co.in/research/article/2021-03-03-bangalore-office-market-report-q4-2020)   
4. Karnataka High Court orders: [https://timesofindia.indiatimes.com/city/bengaluru/high-court-orders-registration-department-not-to-register-properties-built-on-lake-beds/articleshow/73110843.cms](https://timesofindia.indiatimes.com/city/bengaluru/high-court-orders-registration-department-not-to-register-properties-built-on-lake-beds/articleshow/73110843.cms)`,
  },
  {
    id: "3",
    title: "Artificial Intelligence in Realty",
    content: `The Indian real estate market has been on an upswing in recent years, with a growing number of developers and investors entering the space. In addition to the traditional factors that influence the market, such as economic growth, demographics, and government policies, a new factor is emerging as a game-changer: Artificial Intelligence (AI). AI has already made its presence felt in numerous industries, from finance to healthcare, and real estate is no exception. Below, we will explore the various applications of AI in the Indian real estate market and how it is transforming the industry.  
1. Property Search and Discovery:  
The traditional way of searching for a property is time-consuming and often frustrating. However, AI-powered platforms such as NoBroker and Housing.com are trying to change the game by providing a more personalized and efficient experience. These platforms tend to use machine learning algorithms to understand the preferences and requirements of potential buyers and show them only relevant properties. This not only saves time but also provides a more accurate search experience.  
2. Predictive Analytics:  
AI algorithms can analyze vast amounts of data to predict future trends and patterns in the real estate market. This is particularly useful for investors and developers who need to make informed decisions about when and where to invest. For example, AI can predict which areas are likely to experience high demand in the future based on factors such as population growth, infrastructure development, and economic indicators. This information can help investors and developers make smart investment decisions and stay ahead of the curve.  
3. Property Valuation:  
AI-powered platforms such as PropEquity and 99acres tend to use machine learning algorithms to accurately predict the value of a property based on various factors such as location, amenities, and market trends. This information can be useful for buyers, sellers, and lenders who need to understand the true value of a property before making a transaction.  
4. Chatbots:  
AI-powered chatbots are becoming increasingly popular in the real estate industry, as they provide a more efficient and personalized customer service experience. Chatbots can answer common questions, provide property recommendations, and even schedule property viewings. This not only saves time for both customers and agents but also provides a 24/7 service that can improve customer satisfaction.  
5. Smart Buildings:  
AI is also being used to create smart buildings that are more efficient and sustainable.  
6. Fraud detection:  
AI-powered fraud detection systems are being used in the Indian real estate sector to prevent fraud and ensure the security of transactions. Fraud detection systems use machine learning algorithms to analyze data and identify patterns that indicate fraudulent activity. These systems can be used to detect fraud in property listings, title transfers, and financial transactions.  
To conclude,  AI technology is transforming the Indian real estate sector and has made it more efficient, accurate, and cost-effective through various applications`,
  },
];

const Blog = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const blogIdData = blogData.find((blog) => blog.id === blogId);

  return (
    <div>
      <div className="div-section text-base sm:text-xl flex flex-col gap-5 sm:gap-[2.1875rem]">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => router.back()}
            className="cursor-pointer"
          />
          <div className="ml-[1.125rem]">{blogIdData?.title}</div>
        </div>
        <div className="block sm:hidden aspect-[4/3] relative">
          <Image
            src="/assets/home/blogs/1/img_1.png"
            alt="img blog 1"
            fill
            className="object-fill"
          />
        </div>
        <div className="hidden sm:block aspect-[10/3] relative">
          <Image
            src="/assets/home/blogs/1/img_1_desktop.png"
            alt="img blog 1"
            fill
            className="object-fill"
          />
        </div>
        <div className="flex max-sm:justify-between gap-[8.125rem] sm:text-2xl">
          <div className="flex gap-[0.875rem]">
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>By Admin</div>
          </div>
          <div className="flex gap-[0.875rem]">
            <FontAwesomeIcon icon={faCalendar} />
            <div>09 jun 2022</div>
          </div>
        </div>
        <div className="p-[0.9375rem] bg-[#F2F4F6] relative sm:px-12">
          <div className="opacity-60">
            This whole purchase journey of real estate purchase can be divided
            into three broad stages. For more details, click here
          </div>
          <div className="h-full w-[0.3125rem] left-0 top-0 absolute bg-primary rounded-[0.3125rem]"></div>
        </div>
        {blogIdData && (
          <ReactMarkdown
            className={`opacity-60 sm:text-2xl ${styles["react-markdown"]}`}
          >
            {blogIdData.content}
          </ReactMarkdown>
        )}
        <div className="py-[4.375rem] hidden sm:block">
          <div className="border" />
          <div className="mt-[4.375rem] flex justify-between">
            <Link href={`/blogs/${blogId ? Number(blogId) - 1 : ""}`}>
              <button>Previous Post</button>
            </Link>
            <Link href={`/blogs/${blogId ? Number(blogId) + 1 : ""}`}>
              <button className="btn-primary">Next Post</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm: justify-between gap-5">
          <div className="flex flex-col gap-5">
            <div className="font-semibold text-primary text-2xl mt-[0.625rem]">
              Share this Post and Follow us on :
            </div>
            <div className="opacity-60 text-[1.125rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeius modtempor
            </div>
            <div className="flex gap-[1.125rem]">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-semibold">
              Register Now For Regular Updates :
            </div>
            <button className="text-lg flex items-center gap-2 justify-center w-fit">
              <div className="block sm:hidden">Register Now</div>
              <div className="hidden sm:block">Contact Now</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <div className="div-section flex flex-col gap-5 bg-[#CCD3DC] sm:bg-[#F2F4F6]">
        <BeginSection label="You May Also Like This" />
        <div className="block sm:hidden">
          <BlogCard {...blogList[0]} />
        </div>
        <div className="hidden sm:block">
          <BlogCardList blogList={blogList} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
