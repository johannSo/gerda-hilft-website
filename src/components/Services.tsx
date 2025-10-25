import TiltCard from "@/components/ui/tilt-card";
import { 
  Wrench, 
  Cloud, 
  Monitor, 
  MessageSquare, 
  Globe, 
  HardDrive 
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "IT-Support",
    description: "Technische Probleme? Ob Word, GoodNotes, Windows oder Linux – wir helfen schnell und zuverlässig."
  },
  {
    icon: Cloud,
    title: "Cloud Speicher",
    description: "Günstiger Cloudspeicher für deine Projekte! Ob privat oder schulisch – mit unserer Cloud hast du schnellen Zugriff auf deine Daten."
  },
  {
    icon: Monitor,
    title: "Hardware Reparatur",
    description: "Haben Sie Probleme mit Ihren Geräten? Wir reparieren sie für Sie, vor allem PCs, aber auch andere Geräte auf Anfrage."
  },
  {
    icon: MessageSquare,
    title: "Kahoot-Erstellung",
    description: "Abwechslungsreicher Unterricht und effektives Lernen? Ein Kahoot mit der Klasse ist die perfekte Lösung – und wir erstellen es für Sie!"
  },
  {
    icon: Globe,
    title: "Webseite-Erstellung",
    description: "Brauchen Sie eine maßgeschneiderte Webseite? Wir erstellen für Sie Ihre individuelle Webpräsenz."
  },
  {
    icon: HardDrive,
    title: "Installation Betriebssystem",
    description: "Benötigen Sie ein bestimmtes Betriebssystem? Wir installieren Windows, Linux Mint, Ubuntu und viele weitere – schnell und zuverlässig."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unser umfassendes Angebot an professionellen Dienstleistungen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <TiltCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="h-80"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;