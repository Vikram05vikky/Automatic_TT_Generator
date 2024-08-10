import Meteors from "@/components/magicui/meteors";

export function MeteorDemo() {
  return (
    <div className="fixed inset-0 overflow-hidden mr-[15vw]">
    {/* <div> */}
      <Meteors number={50} />
      
    </div>
  );
}
