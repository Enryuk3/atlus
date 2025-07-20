import Title from "@/components/ui/title";
import Container from "@/components/shared/container";
import Service from "@/components/ui/service";

const Services = () => {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center">
      <Container>
        <Title title="Planes de Entrenamiento &" titlePrimary="Nutrición" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Service
            image="/icons/icon-1.png"
            title="Weight Loss"
            description="Ejercicios cardiovasculares y nutrición personalizada para bajar de peso de forma saludable."
          />
          <Service
            image="/icons/yoga.png"
            title="Classic Yoga"
            description="Mejora flexibilidad, fuerza y equilibrio mientras reduces el estrés."
          />
          <Service
            image="/icons/cycling.png"
            title="Cycling"
            description="Quema calorías y fortalece piernas con nuestro ciclismo indoor."
          />
          <Service
            image="/icons/body.png"
            title="Body Building"
            description="Desarrolla masa muscular y mejora tu definición corporal."
          />
          <Service
            image="/icons/musculation.png"
            title="Musculation"
            description="Entrenamiento con pesas guiado por expertos."
          />
          <Service
            image="/icons/running.png"
            title="Fitness Running"
            description="Mejora tu resistencia y técnica de carrera con programas personalizados."
          />
        </div>
      </Container>
    </section>
  );
}

export default Services;
