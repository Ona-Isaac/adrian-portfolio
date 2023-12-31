import styles from '../styles';

const UniqueFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#000000]`}>
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 pbject-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white"> {title} </h1>
    <p className="flex-1 mt-[16px] font-normal lg:text-[18px] text-[#B0B0B0] lg:leading-[32px]">{subtitle}</p>
  </div>
);

export default UniqueFeatures;
