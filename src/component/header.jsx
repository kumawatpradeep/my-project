import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {

    const [dataa, setdata] = useState([])

    const data = async () => {
        const res = await fetch("http://localhost:4500/myapi")
        const newpak = await res.json()
        setdata(newpak)
    }

    useEffect(() => {
        data()
    }, [])
    console.log(dataa)
    return (
        <>

            <div className="apidata">
                <div className="logo">
                    <h1>Header</h1>
                </div>

                {
                    dataa.map((menudata) => {
                        return (
                            <>
                                <div className="menu">
                                    <Link to={menudata.url}>{menudata.name}</Link>
                                </div>

                            </>
                        )
                    })

                }

            </div>


        </>
    )
}

export { Header }