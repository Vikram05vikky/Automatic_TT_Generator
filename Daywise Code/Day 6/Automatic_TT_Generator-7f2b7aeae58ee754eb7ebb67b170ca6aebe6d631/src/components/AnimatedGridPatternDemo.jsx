import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div >
      
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.2}
        duration={1.5}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(750px_circle_at_center,white,transparent)]",
          // "inset-x-0 inset-y-[-20%] h-[100%] skew-y-12 pt-30rem"
        )}
      />
    </div>
  );
}
