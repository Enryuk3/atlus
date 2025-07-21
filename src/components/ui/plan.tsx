import ButtonPrimary from "@/components/ui/button-primary";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface PlanProps {
  name: string;
  duration: number;
  price: number;
  priceMonth: number;
  active?: boolean;
}

const Plan: FC<PlanProps> = ({ name, duration, price, priceMonth, active }) => {
  return (
    <div
      className={cn(
        "w-full bg-gray-light/30 p-8 rounded-lg flex flex-col items-center gap-y-10",
        active && "relative border-2 border-primary"
      )}
    >
      {active && (
        <div className="absolute bg-primary text-white py-2 px-4 -top-4 left-1/2 -translate-x-1/2">
          <h5>Recomendado</h5>
        </div>
      )}
      <h2 className="text-2xl text-white font-medium">{name}</h2>
      <p className="text-gray-300">Plan de {duration} meses</p>
      <div className="text-4xl font-semibold text-white">S/ {price}</div>
      <p className="text-gray-300">{priceMonth} / Mes</p>
      <ButtonPrimary type="button" text="Seleccionar plan" className="border-2 border-primary bg-transparent hover:bg-transparent w-full" />
    </div>
  );
}

export default Plan;
