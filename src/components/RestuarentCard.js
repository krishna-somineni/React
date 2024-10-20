import { swiggy_images } from "../constants/Images";

const RestaurentCard =({Restaurents_data})=>
{

    const {name,locality,cuisines,costForTwo,avgRating,sla,cloudinaryImageId}=Restaurents_data

    return (
        <>

      <div className="card" style={{ width: '18rem' }}>
        <img src={swiggy_images+cloudinaryImageId} className="card-img-top" alt={name} />
        <div className="card-body">
          <p className="card-title">{name}</p>
          <p className="card-text"><strong>Locality:</strong> {locality}</p>
          <p className="card-text"><strong>Cuisines:</strong> {cuisines.join(', ')}</p>
          <p className="card-text"><strong>Cost for Two:</strong> ₹{costForTwo}</p>
          <p className="card-text"><strong>Average Rating:</strong> {avgRating}</p>
          <p className="card-text"><strong>Delivery Time:</strong> {sla.deliveryTime} mins</p>
        </div>
      </div>
        </>
    )
}

export default RestaurentCard