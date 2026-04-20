import React from 'react'

function use() {
    let color = "red";
    const changecoor = () => {
        color = "Blue"
        console.log(color)
    }
    return (
        <>

            <div>
                <h1>My favourit</h1>
            </div>

        </>
    )
}

export default use
