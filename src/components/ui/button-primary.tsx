
import { cn } from "@/lib/utils";
import { FC } from "react";

interface ButtonPrimaryProps {
  type: 'button' | 'submit';
  text: string;
  className?: string;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ type, text, className }) => {
  return (
    <button type={type} className={cn('px-4 py-2 bg-primary text-white rounded-lg border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-colors duration-300', className)}>
      {text}
    </button >
  );
}

export default ButtonPrimary;
