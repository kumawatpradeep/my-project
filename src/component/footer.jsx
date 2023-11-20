import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {

    const [foot, setfoot] = useState([])

    const fut = async () => {
        const two = await fetch("http://localhost:4500/footer")
        const newtwo = await two.json()
        setfoot(newtwo)
    }
    useEffect(() => {
        fut()
    }, [])


    return (
        <>

            <h1> Footer</h1>
            <div className="footer">

                {
                    foot.map((data) => {

                        return (
                            <>

                                <ul>
                                    <li><Link to={data.url}>{data.title}</Link> </li>
                                    <li> {data.tag1}</li>
                                    <li>{data.tag2}</li>
                                    <li>{data.tag3}</li>
                                    <li>{data.tag4}</li>
                                    <li>{data.tag5}</li>
                                    <li>{data.tag6}</li>
                                </ul>

                            </>
                        )
                    })
                }
            </div>


        </>
    )
}

export { Footer }