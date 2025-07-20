
import ButtonPrimary from "@/components/ui/button-primary";
import Link from "next/link";

const MainMenu = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-5">
      <li>
        <Link href="#home" className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-color duration-300 text-white">Inicio</Link>
      </li>
      <li>
        <Link href="#services" className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-color duration-300 text-white">Servicios</Link>
      </li>
      <li>
        <Link href="#about" className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-color duration-300 text-white">Nosotros</Link>
      </li>
      <li>
        <Link href="#contact" className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-color duration-300 text-white">Contacto</Link>
      </li>
      <li>
        <ButtonPrimary type="button" text="Unete" />
      </li>
    </ul>
  );
}

export default MainMenu;
