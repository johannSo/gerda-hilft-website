import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Impressum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Schülerfirma IT-Support</h2>
                  <p className="text-muted-foreground mb-2">
                    (Schülerprojekt der Gerda-Taro-Schule)
                  </p>
                  <p className="text-muted-foreground mb-2">
                    c/o Gerda-Taro-Schule<br />
                    Telemannstraße 9<br />
                    04107 Leipzig
                  </p>
                  <p className="text-muted-foreground">
                    E-Mail: <a href="mailto:schuelerfirma-it-support@gts.lernsax.de" className="text-primary hover:underline">
                      schuelerfirma-it-support@gts.lernsax.de
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Geschäftsführung</h3>
                  <p className="text-muted-foreground">
                    Geschäftsführer: Rafael Beck<br />
                    Stellvertreter: Anton Obermair<br />
                    Pädagogische Begleitung: Herr Tempel
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Weitere Autoren</h3>
                  <p className="text-muted-foreground">
                    Die folgenden Personen sind für ihre Inhalte verantwortlich:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Ole Reichenbach</li>
                    <li>Johann Scheibitz</li>
                    <li>Adrian Arestau</li>
                    <li>Niclas Forner</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Haftung für Links</h3>
                  <p className="text-muted-foreground">
                    Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
                    Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
