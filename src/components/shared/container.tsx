import { FC } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;

}
const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('container mx-auto px-5 lg:px-0', className)}>
      {children}
    </div>
  );
}

export default Container;
