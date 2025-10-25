import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Datenschutzerklärung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten auf unserer Website.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Verantwortlich für die Datenverarbeitung</h2>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-muted-foreground mb-2">
                      Schülerfirma IT-Support (Projekt der Gerda-Taro-Schule)<br />
                      c/o Gerda-Taro-Schule<br />
                      Telemannstraße 9<br />
                      04107 Leipzig
                    </p>
                    <p className="text-muted-foreground">
                      E-Mail: <a href="mailto:schuelerfirma-it-support@gts.lernsax.de" className="text-primary hover:underline">
                        schuelerfirma-it-support@gts.lernsax.de
                      </a>
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Projektbegleiter: Herr Tempel<br />
                      Geschäftsführer: Rafael Beck, Stellvertreter: Anton Obermair
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">1. Zugriffsdaten</h2>
                  <p className="text-muted-foreground mb-4">
                    Beim Besuch unserer Website werden durch den Hosting-Anbieter automatisch Informationen wie:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Besuchte Seite</li>
                    <li>Zeitpunkt des Zugriffs</li>
                    <li>Menge der gesendeten Daten</li>
                    <li>Browsertyp und Version</li>
                    <li>Betriebssystem</li>
                    <li>Referrer-URL</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Diese Daten dienen ausschließlich der statistischen Auswertung und zur Verbesserung unserer Website und lassen keinen Rückschluss auf Ihre Person zu.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">2. Kontaktaufnahme</h2>
                  <p className="text-muted-foreground">
                    Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre Angaben zur Bearbeitung Ihrer Anfrage. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">3. Umgang mit personenbezogenen Daten</h2>
                  <p className="text-muted-foreground">
                    Personenbezogene Daten (z. B. Name, E-Mail-Adresse) werden nur erhoben, genutzt, wenn Sie mit uns über die E-Mail Adresse Kontakt aufnehmen. Die Daten werden nur in besonderen Fällen und nur mit Ihrer Zustimmung weitergegeben. In diesem Fall kontaktieren wir Sie per E-Mail.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">4. Rechte der betroffenen Personen</h2>
                  <p className="text-muted-foreground mb-4">Sie haben das Recht auf:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Auskunft über Ihre gespeicherten Daten</li>
                    <li>Berichtigung falscher Daten</li>
                    <li>Löschung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">5. Einsatz von externen Links</h2>
                  <p className="text-muted-foreground">
                    Unsere Website kann Links zu externen Seiten enthalten. Für die Inhalte dieser Seiten sind ausschließlich deren Betreiber verantwortlich.
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Stand dieser Datenschutzerklärung:</strong> Juli 2025<br />
                    Diese Erklärung wird bei Bedarf aktualisiert, um den rechtlichen Anforderungen zu entsprechen.
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

export default Datenschutz;
