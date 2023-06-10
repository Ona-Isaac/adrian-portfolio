import styles from '../styles';

const StartSteps = ({ number, title, subtitle }) => (
  <div className={`${styles.flexCenter} flex-col`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white"> {title} </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">{subtitle}</p>
  </div>
);

export default StartSteps;
