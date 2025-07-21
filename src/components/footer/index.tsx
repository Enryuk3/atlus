import Section from "@/components/footer/components/section";
import Container from "@/components/shared/container";
import Logo from "@/components/shared/logo";
import Tag from "@/components/ui/tag";

const Footer = () => {
  return (
    <footer className="bg-gray-light/10">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10 px-5 py-10 lg:px-8 lg:py-20">
        <div >
          <Logo />
          <p className="text-[15px] mt-6">Transformando vidas a través del fitness y bienestar integral</p>
        </div>
        <Section title="Compañía" list={['Acerca de', 'Carreras', 'Blogs']} />
        <Section title="Contacto" list={['Ayuda / FAQ', 'Prensa']} />
        <Section title="Más" list={['Programa', 'Plan', 'Método']} />
        <section>
          <h5 className="text-2xl font-semibold text-white mb-5">
            Etiquetas Populares
          </h5>
          <div className="flex items-center gap-2 flex-wrap">
            <Tag text='Abdominales' />
            <Tag text="Ejercicios" />
            <Tag text="Nutrición" />
            <Tag text="Boxeo" />
            <Tag text="Gimnasio" />
            <Tag text="Facilidades" active />
            <Tag text="Planes" />
            <Tag text="Entrenadores" />
          </div>
        </section>
      </Container>
      <div className='bg-primary p-5 text-white text-center'>
        <h5>&copy; 2025 ATLUS. Todos los derechos reservados</h5>
      </div>
    </footer>
  );
}

export default Footer;
