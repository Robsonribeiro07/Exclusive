import { StickyHeader } from "../StickyHeader";
import { Countdowm } from "./countdowm/countdowm";

export function SectionHeader() {
    return (
        <div className="flex gap">
           <div className="flex flex-col ">
           <StickyHeader >
              <p>Today's</p>
            </StickyHeader>


            <div className="flex gap-[5.1875rem] items-center">
                <h1 className="text-[2.2rem] font-semibold">Flash Sales</h1>

                 <Countdowm/>
            </div>

           </div>
         
        </div>
           

    )
}