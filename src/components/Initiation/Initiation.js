import logo1 from "../../assets/svg/initiation/initiation1.svg"


const Initiation = () =>{


    return(
        <div className="text-center mt-0 flex-col">
            <img className="object-none object-right h-40 w-full" src={logo1} alt="weather"/>
            <h2 className="text-5xl mx-12 mb-8 font-bold text-yellow font-bold">How does it look out there?</h2>
            <p className="mx-12 text-back font-bold text-2xl">WelcomE</p>
        </div>

    )
}

export default Initiation;