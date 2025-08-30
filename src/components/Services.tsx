import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, ShieldCheck, Clock } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte Clássico",
    description: "Cortes tradicionais com técnicas aperfeiçoadas ao longo dos anos",
    price: "R$ 45",
    duration: "45 min"
  },
  {
    icon: Sparkles,
    title: "Corte + Barba",
    description: "Serviço completo com corte de cabelo e modelagem de barba",
    price: "R$ 65",
    duration: "60 min"
  },
  {
    icon: ShieldCheck,
    title: "Tratamento Premium",
    description: "Hidratação, massagem e finalização com produtos importados",
    price: "R$ 85",
    duration: "75 min"
  },
  {
    icon: Clock,
    title: "Manutenção Express",
    description: "Retoque rápido para manter o visual sempre impecável",
    price: "R$ 30",
    duration: "30 min"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos <span className="text-gold">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada serviço é uma experiência única, criada para destacar o melhor de você
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-charcoal" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gold">{service.price}</span>
                  <span className="text-sm text-muted-foreground">{service.duration}</span>
                </div>
                <Button variant="elegant" className="w-full">
                  Agendar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};