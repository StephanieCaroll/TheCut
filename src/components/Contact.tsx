import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-charcoal-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Visite Nossa <span className="text-gold">Barbearia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para oferecer a melhor experiência em cuidados masculinos
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <MapPin className="w-6 h-6 text-gold" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Rua da Barbearia, 123<br />
                  Centro - São Paulo, SP<br />
                  CEP: 01234-567
                </p>
                <Button variant="elegant" className="w-full">
                  Ver no Mapa
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Clock className="w-6 h-6 text-gold" />
                  Horários
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda a Sexta:</span>
                  <span className="text-foreground">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado:</span>
                  <span className="text-foreground">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingo:</span>
                  <span className="text-destructive">Fechado</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="w-8 h-8 text-gold mx-auto mb-3" />
                  <div className="text-sm text-muted-foreground mb-2">Telefone</div>
                  <div className="font-semibold text-foreground">(11) 9999-9999</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Instagram className="w-8 h-8 text-gold mx-auto mb-3" />
                  <div className="text-sm text-muted-foreground mb-2">Instagram</div>
                  <div className="font-semibold text-foreground">@thecut_barbershop</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex items-center">
            <Card className="w-full bg-gradient-dark border-gold/20">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gold mb-4">
                  Pronto para o Melhor Corte da Sua Vida?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Agende seu horário agora e experimente nosso atendimento premium. 
                  Nossos barbeiros especialistas estão esperando por você.
                </p>
                
                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full text-lg py-4">
                    Agendar Agora
                  </Button>
                  <Button variant="elegant" size="lg" className="w-full text-lg py-4">
                    WhatsApp
                  </Button>
                </div>
                
                <div className="pt-6 border-t border-gold/20">
                  <p className="text-sm text-muted-foreground">
                    ⭐ Mais de 500 clientes satisfeitos
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};