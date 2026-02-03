import { Button } from "./components/ui/button"
import Background from "./images/BackGround.jpg"
export default function NavigationBar() {
  return (<div className="relative w-full">
  {/* Image as background but div grows to it */}
  <img src={Background} alt="" className="w-full h-auto block" />
  
  {/* Overlay content */}
  <div className="absolute top-0 left-0 w-full flex items-baseline justify-between p-4">
    <h1 className="text-3xl whitespace-nowrap">
  Care <span className="text-3xl text-[#278769] font-[Poppins]">Compass</span>
</h1>

    <div className="flex gap-6">
      <Button className="bg-transparent hover:bg-transparent hover:text-inherit focus:ring-0 text-black">
  About
</Button>
     <Button className="bg-transparent hover:bg-transparent hover:text-inherit focus:ring-0 text-black">Resources</Button>
      <Button className="bg-transparent hover:bg-transparent hover:text-inherit focus:ring-0 text-black">FAQS</Button>
      <Button className="bg-transparent hover:bg-transparent hover:text-inherit focus:ring-0 text-black">Contact</Button>
      <Button className="bg-transparent hover:bg-transparent hover:text-inherit focus:ring-0 text-black">English</Button>
      <Button className="bg-[#246ECB] rounded-md p-2 text-white hover:bg-[#246ECB] hover:text-inherit text-black">Login</Button>
    </div>
  </div>
</div>
  )}