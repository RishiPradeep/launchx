import { Filtermenu } from "@/components/filterMenu/filterMenu";
import Navbar from "@/components/navbar/navbar";
import { Selectdate } from "@/components/selectDate/selectDate";
import { Dialogbox } from "@/components/dialogueBox/dialogueBox";
export default function Launches() {
  return (
    <div className="dark">
      <Navbar />
      <div className="pt-32 max-w-[1024px] mx-auto">
        <div className="flex justify-between">
          <div className="flex gap-4 text-white items-center">
            <Filtermenu />
            <Selectdate type="From" />
            <div>-</div>
            <Selectdate type="To" />
          </div>
          <div>
            <Dialogbox />
          </div>
        </div>
        <div className="text-white font-xl mt-8">Content</div>
      </div>
    </div>
  );
}
