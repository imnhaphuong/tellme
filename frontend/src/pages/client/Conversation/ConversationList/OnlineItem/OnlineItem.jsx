import './OnlineItem.scss';
const OnlineItem = ({ name, avt, keyIndex }) => {
  return (
    <div key={keyIndex} className="owl-item font-worksans">
      <div className="item">
        <span className="flex absolute z-[1000] h-3 w-3 right-[0px]">
          <span className="animate-ping absolute z-[1000] top-[3px]  inline-flex rounded-full h-3 w-3 bg-success"></span>
          <span className="relative  inline-flex top-[3px]  rounded-full h-3 w-3 bg-success"></span>
        </span>
        <div className="item-info">
          <img className="online-item" src={avt} alt={name} />
        </div>
        <h6 className="online-name text-[14px] justify-center">{name}</h6>

      </div>
    </div>
  );
};
export default OnlineItem;
