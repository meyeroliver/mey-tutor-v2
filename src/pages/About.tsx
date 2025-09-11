import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Mey Tutor
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dedicated to excellence in Physics and Mathematics education for
              Grade 10-12 students
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4">
                  Mey Tutor was founded with a passion for making Physics and
                  Mathematics accessible and engaging for high school students.
                  With years of experience in education, we understand the
                  challenges students face in these subjects.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our approach combines theoretical understanding with practical
                  applications, helping students not just memorize formulas, but
                  truly understand the concepts behind them.
                </p>
                <p className="text-muted-foreground">
                  We believe every student has the potential to excel in science
                  and mathematics with the right guidance and support.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Specialized in Physics with Mathematics support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Grade 10-12 curriculum expertise</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Personalized learning approaches</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Proven track record of student success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Excellence
                  </h3>
                  <p className="text-muted-foreground">
                    Striving for the highest standards in education and student
                    achievement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Focus
                  </h3>
                  <p className="text-muted-foreground">
                    Specialized expertise in Physics and Mathematics for maximum
                    impact.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Support
                  </h3>
                  <p className="text-muted-foreground">
                    Providing comprehensive support for every student's learning
                    journey.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Results
                  </h3>
                  <p className="text-muted-foreground">
                    Committed to delivering measurable improvements in student
                    performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
