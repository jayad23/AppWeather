import React from "react";

const Form = ({handleCity, handleSearchWeather}) => {

return(

    <form className="flex justify-center text-text pt-10 focus:border-none" action="" onSubmit={e => handleSearchWeather(e)}>
    <input type="text" required="required" placeholder="Type in..." className="p-1 rounded-l my-4 focus:bg-whiteAplha  px-6"
    onChange={({target})=>handleCity(target)}/>
    <input type="submit" value="Enter" className="bg-red text-back font-bold rounded-r my-4 text-sm px-6 "></input>
    </form>

);

}
export default Form;