


const Card = ({ elem }) => {
// console.log(elem._id)

const handleCart = async(elemId) => {
        const authToken = localStorage.getItem("authTokens");
        // console.log(userId)
        const res = await fetch(`http://localhost:1400/users/addToCart`, {
            method: 'POST',
            body:JSON.stringify({
                "authToken":authToken,
                "elemId":elemId
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
    
    const data = await res.json();
    console.log(data)
    }



    return (
        <div className="card1">
            <h4 className="cardtitle">{elem.title}</h4>
            <img className="cardImg" src={elem?.images[1]} alt="" />
            <button className="cardButton " onClick={()=>{handleCart(elem._id)}}>Add to Cart</button>
            <p className="card-info">Rs {elem.price}</p>
            <p className="card-desc">{elem.description}</p>
        </div>
    )
}

module.exports = Card