import React, { useState } from "react";
import Form from "../../components/Custom/Form"
import { useFetch } from "../../Hooks/useFetch";
import CardWeather from "../../components/Custom/cardWeather/cardWeather";
import Initiation from "../../components/Initiation/Initiation";

import './Home.css'

const Home = () => {
    //States
    const [cityName, setCityName] = useState("");
    const [search, setSearch] = useState("");
    //functions
    const handleCity = ({value}) =>{
        setCityName(value);
    }
    
    const handleSearchWeather =(e) =>{
        e.preventDefault();
        setSearch(cityName);
    }


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5dba56572c037f02d7be4d2729d3f2cc`
    let {data, isPending} = useFetch(url)


    return(
        <div className="bg-gradient-to-t flex justify-center container-Home">
            <div className=" flex-col max-w-sm mx-auto min-h-screen">
                <Form
                    handleCity={handleCity}
                    handleSearchWeather={handleSearchWeather}
                /> 
        
                {data ? 
                        
                    <CardWeather
                        cityName={data.name}
                        temp={data.main.temp}
                        weather={data.weather}
                        cambio={isPending}
                        humidity={data.main.humidity}   
                        time={data.timezone}
                        speed={data.wind.speed}
                    />
                 
            
                    :  <Initiation/> 
                }
            </div>
        </div>
    )
}
export default Home;