import { Instagram, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gold">THE CUT</h3>
            <p className="text-muted-foreground leading-relaxed">
              A barbearia que combina tradição e modernidade para oferecer 
              a melhor experiência em cuidados masculinos.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-gold transition-colors duration-300"
                aria-label="Telefone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-gold transition-colors duration-300"
                aria-label="Localização"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                  Corte Clássico
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                  Corte + Barba
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                  Tratamento Premium
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                  Produtos
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Rua da Barbearia, 123</p>
              <p>Centro - São Paulo, SP</p>
              <p>(11) 9999-9999</p>
              <p>contato@thecut.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} The Cut Barbearia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};