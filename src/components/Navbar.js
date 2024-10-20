import { swiggy_logo } from "../constants/Images"

const Navbar=()=>
{
    return (
        <>
        <div className="header">

           <div >
                <img className="logo" src={swiggy_logo}></img>
           </div>

           <div className="nav">
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Help</li>
                <li>Login</li>

             </ul>
           </div>
        </div>
        </>
    )
}

export default Navbar