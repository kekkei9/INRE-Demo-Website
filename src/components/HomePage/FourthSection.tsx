import Image from "next/image";

const FourthSection = () => (
  <div className="flex flex-col items-center">
    <div className="flex">
      <div>
        <div>Get In Touch With Us To Connect</div>
        <div>Contact Us</div>
        <button>Submit</button>
      </div>
      <div>
        <Image
          src="/assets/home/Happy announcement-pana.png"
          alt="Happy announcement-pana"
          width={447}
          height={401}
        />
      </div>
    </div>
  </div>
);

export default FourthSection;
