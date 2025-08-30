import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import barberService from "@/assets/barber-service.jpg";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-charcoal-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tradição e <span className="text-gold">Excelência</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de 15 anos de experiência, nossa barbearia combina técnicas tradicionais 
              com tendências modernas. Cada corte é uma obra de arte, cada cliente uma prioridade.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-gold mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-gold mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </CardContent>
              </Card>
            </div>
            <Button variant="gold" size="lg" className="text-lg px-8">
              Nossa História
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={barberService} 
                alt="Barbeiro profissional trabalhando"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gold-light rounded-full opacity-30 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};