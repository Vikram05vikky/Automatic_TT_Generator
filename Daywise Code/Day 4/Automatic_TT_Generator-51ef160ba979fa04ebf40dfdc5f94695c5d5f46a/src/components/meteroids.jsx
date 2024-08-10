import Meteors from "@/components/magicui/meteors";

export function MeteorDemo() {
  return (
    <div className="fixed inset-0 overflow-hidden mr-[15vw] -z-40">
    {/* <div> */}
      <Meteors number={50} />
      
    </div>
  );
}
