import scienceMathHero from "@/assets/science-math-hero.jpg";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Atom,
  BookOpen,
  Calculator,
  CheckCircle,
  GraduationCap,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Atom className="h-8 w-8 text-primary" />,
      title: "Physics Expertise",
      description:
        "Comprehensive Physics tutoring covering all Grade 10-12 curriculum topics",
    },
    {
      icon: <Calculator className="h-8 w-8 text-accent" />,
      title: "Mathematics Support",
      description:
        "Additional Mathematics tutoring available to complement Physics learning",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Small Classes",
      description:
        "Maximum 4 students per class ensuring personalized attention and support",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Grade 10-12 Focus",
      description:
        "Specialized curriculum designed specifically for high school students",
    },
  ];

  const stats = [
    { value: "95%", label: "Success Rate" },
    { value: "200+", label: "Students Taught" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "30+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  Classes Have Started
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Excel in <span className="text-primary">Physics</span> &
                  Mathematics
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Expert tutoring for Grade 10-12 students. Physics is our
                  specialty, with Mathematics support available at discretion.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Small class sizes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Flexible scheduling</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={scienceMathHero}
                  alt="Physics and Mathematics Education - Scientific Equipment and Mathematical Equations"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Mey Tutor?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We specialize in making Physics accessible and engaging while
                providing the mathematics foundation needed for success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Subjects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Atom className="h-12 w-12 text-primary" />
                    <Badge>Primary Focus</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Physics
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Complete Grade 10-12 Physics curriculum including mechanics,
                    electricity, waves, thermodynamics, and modern physics.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Laboratory work support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Exam preparation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Conceptual understanding</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Calculator className="h-12 w-12 text-accent" />
                    <Badge variant="secondary">On Request</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Mathematics
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Mathematics support provided at discretion to complement
                    Physics learning and strengthen foundational skills.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Algebra & trigonometry</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Mathematical physics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Problem-solving techniques</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial Preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium text-foreground mb-4">
                "Mey Tutor transformed my understanding of Physics. The concepts
                that seemed impossible before now make perfect sense!"
              </blockquote>
              <p className="text-muted-foreground">
                - Sarah Johnson, Grade 12 Student
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/testimonials">
                <BookOpen className="mr-2 h-4 w-4" />
                Read More Stories
              </Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our classes and discover the exciting world of Physics and
              Mathematics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us: 061-840-4925</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
