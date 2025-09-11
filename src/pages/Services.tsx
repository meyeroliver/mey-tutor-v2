import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Atom,
  BookOpen,
  Calculator,
  CheckCircle,
  Clock,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Atom className="h-8 w-8 text-primary" />,
      title: "Physics Tutoring",
      description:
        "Comprehensive Physics education covering all Grade 10-12 curriculum",
      features: [
        "Mechanics and Motion",
        "Electricity and Magnetism",
        "Waves and Sound",
        "Thermodynamics",
        "Modern Physics",
        "Laboratory Work Support",
      ],
      badge: "Primary Focus",
    },
    {
      icon: <Calculator className="h-8 w-8 text-accent" />,
      title: "Mathematics Support",
      description:
        "Mathematics tutoring provided at discretion to complement Physics learning",
      features: [
        "Algebra and Functions",
        "Trigonometry",
        "Calculus Basics",
        "Statistics",
        "Mathematical Physics",
        "Problem Solving Techniques",
      ],
      badge: "On Request",
    },
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Small Group Classes",
      description: "Maximum 4 students per class for personalized attention",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Flexible Scheduling",
      description: "Classes scheduled to fit your academic calendar",
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Exam Preparation",
      description: "Focused preparation for school exams and assessments",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Resource Materials",
      description: "Comprehensive study materials and practice questions",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Tutoring Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Specialized Physics tutoring with Mathematics support for Grade
              10-12 students
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      {service.icon}
                      <Badge
                        variant={
                          service.badge === "Primary Focus"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {service.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              What Makes Our Classes Special
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grade Levels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Grade Levels We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Grade 10", "Grade 11", "Grade 12"].map((grade, index) => (
                <Card key={index}>
                  <CardContent className="p-8 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {grade}
                    </h3>
                    <p className="text-muted-foreground">
                      Curriculum-aligned Physics tutoring with foundational
                      mathematics support
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Excel in Physics?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our classes and discover the exciting world of physical
              science
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Journey</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
