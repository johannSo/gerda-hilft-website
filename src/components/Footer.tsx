const Footer = () => {
  return (
    <footer className="py-8 px-4 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="font-semibold">Gerda Hilft</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center">
            <p>© 2025 Schülerfirma IT-Support "Gerda hilft"</p>
            <p className="mt-1">Gerda-Taro-Schule, Leipzig</p>
          </div>
          
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;