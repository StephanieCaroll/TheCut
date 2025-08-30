import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Produtos", href: "#products" },
    { name: "Contato", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-charcoal/90 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gold">
            THE CUT
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <Button variant="gold" size="sm">
              Agendar
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gold/20">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-gold transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="gold" size="sm" className="w-full mt-4">
                Agendar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};