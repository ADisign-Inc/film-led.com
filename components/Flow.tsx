import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";
import { Flow as FlowType } from "../data/flow";

type FlowProps = {
  flow: FlowType;
};

export function Flow({ flow }: FlowProps) {
  return (
    <div className="relative z-10 flex gap-3 md:gap-8 mb-12 md:mb-20">
      <div className="flex-shrink-0 flex items-center justify-center w-8 md:w-10 h-8 md:h-10 rounded-full bg-yellow-300">
        <span className="text-lg md:text-xl font-bold text-black font-mincho">
          {flow.number}
        </span>
      </div>
      <div className="pt-1 md:pt-3">
        <h4 className="text-xl md:text-2xl mb-5">{flow.title}</h4>
        <p className="mb-8">
          {flow.description.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              {index < flow.description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>

        {flow.hasButton && flow.buttonText && flow.buttonLink && (
          <div className="mt-10 md:mt-20">
            <Link href={flow.buttonLink}>
              <Button variant="default">
                {flow.buttonText}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
