import { Button } from "@/components/ui/button";
import heroImage from "@/assets/barbershop-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
          <span className="block text-gold">THE</span>
          <span className="block">CUT</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Experiência premium em cortes clássicos e modernos. 
          Tradição e estilo em cada detalhe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Agendar Horário
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
            Nossos Serviços
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};