import { FC } from "react";

interface TitleProps {
  title: string;
  titlePrimary?: string
}

const Title: FC<TitleProps> = ({ title, titlePrimary }) => {
  return (
    <h2 className="text-4xl flex flex-col sm:flex-row items-center gap-2 text-white font-semibold mb-10">
      {title}
      <span className="text-primary">{titlePrimary}</span>
    </h2>
  );
}

export default Title;
