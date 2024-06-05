import { useEffect, useState } from "react"
import Carousel from "./Carousel";


const Navbar = ({setQuery}) => {

    let [toSearch, settoSearch] = useState('');

    useEffect(() => {
        setQuery(toSearch)
    }, [toSearch])


    return (
        <div class="navbar ">
            <div class="nav-logo border">
                <div class="logo">
                <a name="top"></a>
                </div>
            </div>

            <div class="address border">
                <p class="add-one">Deliver to</p>
                <i class="fa-solid fa-location-dot"></i>
                <p class="add-two">India</p>
            </div>

            <div class="nav-search-bar border">
                <select>
                    <option>All </option>
                </select>
                <input type="text" placeholder="Search Amazon" value={toSearch}
                     onChange={(e) => { settoSearch(e.target.value) }} />
                <div class="search-bar-logo">
                    <button >
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>

            <div class="signin border">
                <p class="line1">Hello,Sign in</p>
                <p class="line2">Accounts & Requests</p>
            </div>

            <div class="signin border">
                <p class="line1">Returns</p>
                <p class="line2">& orders</p>
            </div>

            <div class="cart border">
                <i class="fa-solid fa-cart-shopping"></i>
                Cart
            </div>
        </div>
    )
}

export default Navbar