import React, { useEffect, useState } from "react";

function Img() {

    const [itam, setitam] = useState([])

    const produ = async () => {
        const one = await fetch("http://localhost:4500/product")
        const newone = await one.json()
        setitam(newone)
    }

    useEffect(() => {
        produ()
    }, [])

    return (
        <>
            <h1>hello</h1>
            <div className="main-sl">
                {
                    itam.map((data) => {
                        return (
                            <>
                                <div className="slider">
                                    <img src={data.img} alt="" />
                                    <h4>{data.category}</h4>
                                    <h5>{data.brandname}</h5>
                                    <h3> Rs..{data.price}</h3>
                                    <p>{data.About}</p>
                                </div>

                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export { Img }