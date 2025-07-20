
import ButtonPrimary from "@/components/ui/button-primary";
import Link from "next/link";

const MainMenu = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-5">
      <li>
        <Link href="#home" className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-color duration-300 text-white">Home</Link>
      </li>
      <li>
        <Link href="#services" className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-color duration-300 text-white">Services</Link>
      </li>
      <li>
        <Link href="#about" className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-color duration-300 text-white">About</Link>
      </li>
      <li>
        <Link href="#contact" className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-color duration-300 text-white">Contact</Link>
      </li>
      <li>
        <ButtonPrimary type="button" text="Join us" />
      </li>
    </ul>
  );
}

export default MainMenu;
