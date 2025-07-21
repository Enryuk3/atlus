import Container from "@/components/shared/container"
import Plan from "@/components/ui/plan";
import Title from "@/components/ui/title";

const Plans = () => {
  return (
    <section id="plans" className="min-h-screen flex items-center justify-center">
      <Container>
        <Title title="Suscríbete a" titlePrimary="nuestros planes" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <Plan
            name="Estándar"
            duration={6}
            price={1200}
            priceMonth={200}
          />
          <Plan
            name="Fitness"
            duration={12}
            price={2100}
            priceMonth={175}
            active
          />
          <Plan
            name="Enterprise"
            duration={24}
            price={3600}
            priceMonth={150}
          />
        </div>
      </Container>
    </section>
  );
}

export default Plans;
