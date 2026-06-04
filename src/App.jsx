import React, { useState, useEffect } from 'react'
import Dog from './Dog.jsx'


{/*
    To be done in the future:             
    implementing datasets, cloud, graphics
    
    */}
function App(){

    const key = import.meta.env.VITE_FINNHUB_KEY
    const [symbol, setSymbol] = useState("")
    const [time, setTime] = useState("")
    const [seconds, setSeconds] = useState("")
    const [minutes, setMinutes] = useState("")
    const [alive, makeAlive] = useState(false)

    const [highPrice, setCurrentHigh] = useState("")
    const [lowPrice, setCurrentLow] = useState("")
    const [currentprice, setCurrentPrice] = useState("")
    const [priceChange, setPriceChange] = useState("")
    const [percentChange, setPercentChange] = useState("")
    const [openPrice, setOpenPrice] = useState("")
    const [previousClosePrice, setPreviousClosePrice] = useState("")

    {/*Initializes a useState array where we will place all the rows for the table */}
    const[info, setInfo] = useState([])

    useEffect(function(){

        {/* If the user has not clicked the button, don't do anything */}
        if(!alive){
            return;
        }

        let time = seconds + minutes

        {/* 
            IMPORTANT SET INTERVAL FUNCTION
            Runs every {time} miliseconds.
            To avoid memory overflow, we need to call clearInterval on the intervalID
            For this reason, we create a variable called intervalID at the beginning.
        */}


        let intervalID = setInterval(async function(){
            {/* Just like the Dog component, calls API */}
            const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${key}`
            const res = await fetch(url)
            const data = await res.json()



        {/* Takes all the data info and populates the newRow variable with all the parameters */}

            const newRow = {
                currentprice: data.c,
                highPrice: data.h,
                lowPrice: data.l,
                openPrice: data.o,
                previousClosePrice: data.pc,
                percentChange: data.dp,
                priceChange: data.d,
                timestamp: Date()
            }


        {/* Populates the info array with the previous state aswell as the newRow */}
            setInfo(prev=>[...prev, newRow])



        {/* How often it runs, in miliseconds, converts to a real number from a string */}
            }, Number(time)) 
        
        
        {/* This is a return function. A return function is ALWAYS needed */}
        return function(){clearInterval(intervalID)}



            {/* This dictates how often the useEffect function runs. Whenever any of the following 
                variables change, the useEffect function returns, and runs again. */}
            },[symbol, time, alive])

    return (
        <div>
        <Dog/>
        <br />
        <h2> Data Section</h2>
        <label htmlFor="symbol"> Enter Stock Symbol: </label>

        {/* input box for symbol  */}
        <input type= "text" id= "symbol" name= "symbol"onChange={
                (e => setSymbol(e.target.value))
        }
        />

        <br/>
        
        {/* input box for seconds  */}
        <label htmlFor= "time"> Seconds </label>
        <input type= "text" id ="seconds" name ="seconds" onChange= {
            (e => setSeconds(e.target.value * 1000))
        }
        />

        {/* input box for minutes  */}
        <label htmlFor= "time"> Minutes </label>
        <input type= "text" id ="minutes" name ="minutes" onChange= {
            (e => setMinutes(e.target.value * 60000 ))
        }
        />

        {/*Sets alive state to 'true' */}
        <button onClick={function(){makeAlive(true)}}>It's Aliveeee!!!</button>

        {/*Sets alive state to 'false' and sets time state to blank */}        
        <button onClick ={function(){makeAlive(false);setTime("")}}> KILL HIM </button> 

                <h3>TABLE OF INFORMATION</h3>
                <table bgcolor = "white">
                    <thead>

                        <tr bgcolor = "black">
                            <th>Time Stamp</th>
                            <th>Current Price</th>
                            <th>High Price</th>
                            <th>Low Price</th>
                            <th>Open Price</th>
                            <th>Previous Close Price</th>
                            <th>Percent Change</th>
                            <th>Price Change</th>
                        </tr>

                    </thead>

                    <tbody>

                        {/* 
                            This iterates through INFO which is a variable that contains data obtained at each interval..
                            row is each interval called
                            index is the index in which the row is at
                        */}

                        {info.map((row, idx) => (

                            <tr key={idx}>
                                <td>{row.timestamp}</td>
                                <td>{row.currentprice}</td>
                                <td>{row.highPrice}</td>
                                <td>{row.lowPrice}</td>
                                <td>{row.openPrice}</td>
                                <td>{row.previousClosePrice}</td>
                                <td>{row.percentChange}</td>
                                <td>{row.priceChange}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
        <tr>
        </tr>





        </div>







        
    )

}

export default App