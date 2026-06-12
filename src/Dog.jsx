import { useState } from 'react'

function Dog(){
    const [image, setImage] = useState("")


    async function getImages(){
    
        {/* This fetches a dog API and sets image state  */}
        const url = "https://dog.ceo/api/breeds/image/random"
        const res = await fetch(url)
        const data = await res.json()
        setImage(data.message) 
    
        {/* can also be done in a shorter way */}
        const one = await fetch("https://dog.ceo/api/breeds/image/random")
        const two = await one.json()
        setImage(two.message) 
    
        {/* can also be done in a shorter shorter way */}
        const testing = await (await fetch("https://dog.ceo/api/breeds/image/random")).json()
        setImage(testing.message)
        {/* but I think this way is harder to understand */}
        }
    return(
        <div>

        <h1> Random doge</h1>
        <button onClick={getImages}>Get Random Dog</button >
        <img src={image} alt="" />
        
        </div>
    )
}

export default Dog
