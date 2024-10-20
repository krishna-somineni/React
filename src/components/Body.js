import { useEffect, useState } from "react"
import RestaurentCard from "./RestuarentCard"
import Shimmer from "./Shimmer"

const Body=()=>
{

    const [Restaurents,setRestaurents] =useState([])
    const [filterRestaurents,setFilterRestaurents] =useState([])

    
    useEffect(()=>
    {
        fetchRestaurents()
    },[])

    const fetchRestaurents= async()=>
    {
       const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const res_data=await data.json()
       setRestaurents(res_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilterRestaurents(res_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (filterRestaurents?.length==0 )? <Shimmer/>:(
        <>
        <div>
            <button  className="top-restaurants-btn" onClick={()=>{
            const filteredData=Restaurents.filter(res=>
                    {
                        return res.info.avgRating > 4.5
                    })

            setFilterRestaurents(filteredData)
        }}>Top Restaurants</button>


        </div>
          <div className="restuarents_container">

            {
                filterRestaurents.map(restuarent=>
                    {
                     return <RestaurentCard Restaurents_data={restuarent.info} key={restuarent.id}></RestaurentCard>
                    })
            }
          </div>
        </>
    )
}

export default Body