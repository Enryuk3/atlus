import Image from "next/image";
import Container from "@/components/shared/container";
import ButtonPrimary from "@/components/ui/button-primary";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative w-full h-screen">
        <Image src="/images/hero.png" alt="Hero" fill className="object-cover" />
        <div className="absolute bg-gradient-to-tr from-black to-transparent left-0 top-0 w-full h-full" />
        <Container>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 lg:left-60 -translate-x-1/2 lg:translate-x-0 space-y-10">
            <h1 className="text-white text-6xl lg:text-7xl 2xl:text-8xl font-semibold text-center lg:text-left">
              Tu cuerpo <br /> se transformará
            </h1>
            <p className="text-gray-500">
              Estamos comprometidos a ayudarte a transformar tu vida <br /> como parte de nuestro compromiso contigo.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <ButtonPrimary type="button" text="Comenzar" className="w-full" />
              <ButtonPrimary type="button" text="Ver reseñas" className="border-2 border-primary bg-transparent hover:bg-transparent w-full" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
