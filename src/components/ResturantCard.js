import { CDN_URL }  from "../../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const {name,cuisines,avgRating,locality,cloudinaryImageId,sla: { deliveryTime } } = resData?.info;
  
  console.log(props);
  return (
    
    <div className="res-card">
     
      <h2>{name}</h2>

      <h2>{cuisines[0]}</h2>
      <h3>{avgRating + "stars rated "}</h3>
      
      <h3>{locality}</h3>

      <img
        className="res-image"
        src={
          CDN_URL
           +
          cloudinaryImageId 
        }
        alt="res-logo"
      >

      </img>

      <h4>{deliveryTime + " mins" + " Delivery"}
 </h4>
    </div>
  );
};
export default ResturantCard;