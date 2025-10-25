import { Button } from "@/components/ui/button";
import { Mail, Cloud } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const location = useLocation();
  
  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="Gerda Hilft Logo" 
              className="w-8 h-8 rounded-lg object-contain"
            />
            <span className="font-semibold text-lg">Gerda Hilft</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Leistungen
            </button>
            <Link 
              to="/cloud-pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cloud Preise
            </Link>
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

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link 
              to="/cloud-pricing"
              className="md:hidden"
            >
              <Button variant="outline" size="sm">
                <Cloud className="h-4 w-4" />
              </Button>
            </Link>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-accent transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;