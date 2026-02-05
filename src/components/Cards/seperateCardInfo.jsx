import { Button } from "../ui/button";
import { Card } from "../ui/card";

const CardInfo = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center px-6">
      <h1 className="text-[#1d325b] text-2xl font-semibold text-center">
        We know HealthCare Can be Challenging
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        
        <Card className="flex flex-col p-6 hover:bg-blue-100 cursor-default min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Language Barriers
          </h2>
          <p className="text-sm text-gray-600">
            Don’t speak English? Have medical documents you can’t understand?
            You’re not alone.
          </p>
        </Card>

        <Card className="flex flex-col p-6 hover:bg-blue-100 cursor-default min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Fear & Misinformation
          </h2>
          <p className="text-sm text-gray-600">
            You have the right to emergency medical care regardless of
            immigration status. EMTALA law protects you.
          </p>
        </Card>

        <Card className="flex flex-col p-6 hover:bg-blue-100 cursor-default min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Instant Medical Translation
          </h2>
          <p className="text-sm text-gray-600">
            Upload prescriptions or lab results and we’ll translate them
            instantly into your preferred language.
          </p>
        </Card>

      </div>
      <h1 className="text-[#1d325b] text-2xl font-semibold text-center">
        How CareCompass Can Help you
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        
        <Card className="flex flex-col p-6 hover:bg-blue-100 cursor-default min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Find Clinics Near you
          </h2>
          <p className="text-sm text-gray-600">
            Enter your ZipCode or City, Filter by Language, Speciality or service you need.
          </p>
        </Card>

        <Card className="flex flex-col p-6 hover:bg-blue-100 cursor-default min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Total Privacy
          </h2>
          <p className="text-sm text-gray-600">
            View complete clinical information including Phone Numbers,Services and Costs
          </p>
        </Card>

        <Card className="flex flex-col p-6 hover:bg-blue-100 cursor-default min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Instant Medical Translation
          </h2>
          <p className="text-sm text-gray-600">
            Upload prescriptions or lab results and we’ll translate them
            instantly into your preferred language.
          </p>
        </Card>
        </div>
        <div>
            <h1 className="text-[#1d325b] text-2xl font-semibold text-center">Start your Journey to Better Health Today</h1>
            <div className=" flex flex-col items-center gap-2">
                <p className="text-2xl">Thousands of people like you are already Using <p className="font-bold inline text-[#1d325b] ">Care Compass</p> </p>
            <p className=" text-2xl ">to access HealthCare they derserve, join our community</p>
            </div>
       <div className="flex justif-center gap-6 p-3">
                <Button className = "size-sm text-3xl bg-blue-500 text-white hover:bg-blue-700">Create my Free Account </Button>
                <Button className = "size-sm text-3xl text-white bg-green-700 hover:bg-green-800" >Explore Clinics</Button>
            </div>
        </div>
    </div>
  );
};

export default CardInfo