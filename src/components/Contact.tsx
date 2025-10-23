import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sie wollen Kontakt mit uns aufbauen oder einen Auftrag aufgeben?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">E-Mail</CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:schuelerfirma-it-support@gts.lernsax.de"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                schuelerfirma-it-support@gts.lernsax.de
              </a>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Adresse</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Telemannstraße 9<br />
                04107 Leipzig<br />
                Glaskasten 1. OG Süd<br />
                neben der 113
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Öffnungszeiten</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Ohne Termin:</p>
                  <p className="text-sm">9:35 - 9:55 Uhr</p>
                  <p className="text-sm">11:35 - 11:55 Uhr</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Mit Termin:</p>
                  <p className="text-sm">Nachmittags nach Vereinbarung</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-10">
          <Button 
            size="lg"
            className="bg-primary hover:bg-accent transition-colors"
            onClick={() => window.location.href = 'mailto:schuelerfirma-it-support@gts.lernsax.de'}
          >
            <Mail className="mr-2 h-5 w-5" />
            E-Mail schreiben
          </Button>
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-lg max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Hinweis:</strong> Wenn Sie kein Lehrer oder Schüler der Gerda-Taro-Schule sind, 
            melden Sie sich bitte im Sekretariat an.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;