import Card from './card'
import { useEffect, useState } from "react";
const  url =  require('../../../URL');


const Carousel = ({ query }) => {

    const [data, setData] = useState([]);

    

    const getData = async () => {

        if (query.length > 0 && query != undefined) {
            const res = await fetch(`${url.default.url}/products?title=${query}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then((res) => res.json()).then(r => {
                    setData(r.data.product);
                })
                .catch((err) => console.log(err))
        }
        else {
            const res = await fetch(`${url.default.url}/products`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then((res) => res.json()).then(r => {
                    setData(r.data.product);
                })
                .catch((err) => console.log(err))
        }
    }
    useEffect(() => { getData() }, [query])

    return (

        <div>
            <div className="hero-image">
                <div className="hero-words" >
                    You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
                    Click here to go to amazon.in
                </div>
            </div>

            <div className="content">

                {data.map(elem => {
                    return (
                        <div key={elem._id}>
                            <Card elem={elem} />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Carousel