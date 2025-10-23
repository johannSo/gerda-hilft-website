import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="font-semibold text-lg">Gerda Hilft</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Über uns
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-accent transition-colors"
          >
            <Mail className="mr-2 h-4 w-4" />
            Kontakt
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;