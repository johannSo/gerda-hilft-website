import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Target } from "lucide-react";

const teamMembers = [
  "Rafael",
  "Johann",
  "Julius",
  "Jonathan",
  "Niclas",
  "Adrian",
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Über uns</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir sind eine engagierte Schülerfirma der Gerda-Taro-Schule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-border">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Gegründet</h3>
              <p className="text-muted-foreground">6. Januar 2025</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Team</h3>
              <p className="text-muted-foreground">6 engagierte Mitglieder</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Mission</h3>
              <p className="text-muted-foreground">IT-Support für alle</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  Wir als Schülerfirma sind seit dem 6. Januar 2025 aktiv und
                  bestehen im Moment aus 6 Mitgliedern. Wir haben es uns zur
                  Aufgabe gemacht Lehrern, Schülern und Eltern bei allen
                  möglichen technischen Problemen zu helfen.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  Bei Webseite-Designs, Präsentation-Designs, Problemen mit
                  Hard- und Software, Problemen mit Programmen wie Word,
                  Spotify, Canva oder anderen technischen Angelegenheiten stehen
                  wir für Sie zur Verfügung.
                </p>

                <div className="border-t border-border pt-6 mt-6">
                  <h4 className="font-semibold text-lg mb-4">Unser Team</h4>
                  <div className="flex flex-wrap gap-3">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-4">Unsere Schule</h4>
                  <img
                    src="/hasu.jpg"
                    alt="Gerda-Taro-Schule Hauptgebäude"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-4">
                    Unser Arbeitsplatz
                  </h4>
                  <img
                    src="/kasten.jpeg"
                    alt="Arbeitsbereich der Gerda Hilft Schülerfirma"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
