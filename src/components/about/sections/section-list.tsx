import ButtonPrimary from "@/components/ui/button-primary";

const SectionList = () => {
  return (
    <section className="flex-1 flex flex-col items-center gap-8">
      <ul className="list-disc marker:text-primary space-y-4 text-xl">
        <li>Mejor Gimnasio</li>
        <li>Entrenadores Expertos</li>
        <li>Horarios Flexibles de Entrenamiento</li>
        <li>Excelentes Instalaciones</li>
        <li>Asesoría con Expertos</li>
      </ul>
      <ButtonPrimary type="button" text="Ver más beneficios" />
    </section>
  );
}

export default SectionList;
