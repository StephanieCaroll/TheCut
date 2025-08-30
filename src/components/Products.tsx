import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import productsImage from "@/assets/barbershop-products.jpg";

const products = [
  {
    name: "Pomada Premium",
    price: "R$ 45",
    description: "Fixação forte com brilho natural",
    category: "Cabelo",
    featured: true
  },
  {
    name: "Óleo para Barba",
    price: "R$ 35",
    description: "Hidratação e brilho para barbas impecáveis",
    category: "Barba",
    featured: false
  },
  {
    name: "Shampoo Profissional",
    price: "R$ 28",
    description: "Limpeza profunda sem ressecar",
    category: "Cabelo",
    featured: false
  },
  {
    name: "Kit Completo",
    price: "R$ 120",
    description: "Todos os produtos essenciais",
    category: "Kit",
    featured: true
  }
];

export const Products = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Produtos <span className="text-gold">Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Os melhores produtos para manter seu estilo em casa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src={productsImage} 
              alt="Produtos da barbearia"
              className="w-full h-[400px] object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Qualidade <span className="text-gold">Garantida</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Selecionamos cuidadosamente cada produto em nossa linha. 
              Ingredientes naturais, fórmulas testadas e resultados comprovados.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                Produtos importados e nacionais premium
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                Testados por nossos profissionais
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                Garantia de satisfação
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-gold transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={product.featured ? "default" : "secondary"}>
                    {product.category}
                  </Badge>
                  {product.featured && (
                    <Badge className="bg-gold text-charcoal">Destaque</Badge>
                  )}
                </div>
                <CardTitle className="text-lg text-foreground">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold text-gold">{product.price}</div>
                <Button variant="elegant" className="w-full group-hover:bg-gold group-hover:text-charcoal transition-colors duration-300">
                  Comprar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};