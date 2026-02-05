import { Button } from "./components/ui/button"
import Background from "./images/BackGround.jpg"
import { Card } from "./components/ui/card"
export default function NavigationBar() {
  return (
  
  <div className="relative w-full">
  {/* Image as background but div grows to it */}
  <img src={Background} alt="" className="w-full h-auto block " />
  <div className="absolute top-0 left-0 w-full flex items-baseline justify-between p-4">
    <h1 className="text-3xl whitespace-nowrap">
  Care <span className="text-3xl text-[#278769] font-[Poppins]">Compass</span>
</h1>

    <div className="flex flex-col gap-6 ">
          <div className="flex flex-row gap-6">
                <Button className="bg-transparent hover:bg-transparent hover:text-inherit focus:ring-0 text-black">About</Button>
                <Button className="bg-transparent hover:bg-transparent hover:text-inherit focus:ring-0 text-black">Resources</Button>
                <Button className="bg-transparent hover:bg-transparent hover:text-inherit focus:ring-0 text-black">FAQS</Button>
                <Button className="bg-transparent hover:bg-transparent hover:text-inherit focus:ring-0 text-black">Contact</Button>
                <Button className="bg-transparent hover:bg-transparent hover:text-inherit focus:ring-0 text-black">English</Button>
                <Button className="bg-[#246ECB] rounded-md p-2 text-white hover:bg-[#246ECB] hover:text-inherit text-black">Login</Button>
          </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl text-[#1d325b] font-bold">
            Accessible HealthCare for everyone,
          </h1>

          <h1 className="text-4xl mt-2 text-[#1d325b] font-bold">
          Regardless of your status
          </h1>
        </div>
          <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center text-center">
  <h1 className="text-4xl text-[#455074]">
    Connecting Immigrant communities with clinics,
  </h1>

  <h1 className="text-4xl mt-2 text-[#455074] ">
   Health resources, and medical translation tools
  </h1>
  <h1 className="text-4xl mt-2 text-[#455074]">
   Confidential, Multilingual, and 100% free
  </h1>
</div>
          
            <div className="flex justif-center gap-6">
                <Button className = "size-100 text-4xl bg-blue-500 text-white hover:bg-blue-700">Find Clinics Near you</Button>
                <Button className = "size-100 text-3xl text-white bg-green-700 hover:bg-green-800" >Create free Account</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

