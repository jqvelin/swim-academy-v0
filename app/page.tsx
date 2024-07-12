import Coach from "@/components/sections/Coach";
import Introduction from "@/components/sections/Introduction";
import Inventory from "@/components/sections/Inventory";
import Outro from "@/components/sections/Outro";
import Pools from "@/components/sections/Pools";

export default function Homepage(){
  return  <>
    <Introduction/>
    <Pools/>
    <Inventory/>
    <Outro/>
  </>
}
