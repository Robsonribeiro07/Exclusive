import { usePathname } from "next/navigation";
import { StepProgress } from "../step-progress";

export function StepProgressContent() {
    const pathName = usePathname();
    const isPathname = pathName.split('/')[3];
    
    const progressStep = {
        "step1_Profile": 1,
        "step2_andress": 2,
        "step3_storeInformation": 3,
    } as const;

    // Obtém o número correspondente ao caminho atual

    
    return (
        <div className="flex gap-2">
            {Object.values(progressStep).map((step) => {

                const progress = progressStep[isPathname as keyof typeof progressStep] >= step;

                return (
                    <StepProgress key={step} progress={progress} />
                );
            })}
        </div>
    );
}
