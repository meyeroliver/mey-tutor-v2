import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      grade: "Grade 12",
      subject: "Physics",
      content:
        "Mey Tutor transformed my understanding of Physics. The concepts that seemed impossible before now make perfect sense. My grades improved from a C to an A!",
      rating: 5,
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      grade: "Grade 11",
      subject: "Physics & Mathematics",
      content:
        "The personalized attention and clear explanations helped me excel in both Physics and Mathematics. The small class size makes all the difference.",
      rating: 5,
      initials: "MC",
    },
    {
      name: "Emma Thompson",
      grade: "Grade 12",
      subject: "Physics",
      content:
        "Thanks to Mey Tutor, I developed a genuine love for Physics. The teacher makes complex topics easy to understand and interesting to learn.",
      rating: 5,
      initials: "ET",
    },
    {
      name: "David Wilson",
      grade: "Grade 10",
      subject: "Physics",
      content:
        "Starting Physics in Grade 10 was intimidating, but Mey Tutor made it approachable. The foundation I built here has been invaluable.",
      rating: 5,
      initials: "DW",
    },
    {
      name: "Lisa Rodriguez",
      grade: "Grade 11",
      subject: "Physics & Mathematics",
      content:
        "The exam preparation sessions were incredibly helpful. I felt confident walking into my final exams and achieved results beyond my expectations.",
      rating: 5,
      initials: "LR",
    },
    {
      name: "James Park",
      grade: "Grade 12",
      subject: "Physics",
      content:
        "Mey Tutor doesn't just teach formulas - they teach understanding. This approach helped me pursue engineering at university with confidence.",
      rating: 5,
      initials: "JP",
    },
  ];

  const stats = [
    { value: "95%", label: "Student Success Rate" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "200+", label: "Students Taught" },
    { value: "30+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Student Success Stories
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See how Mey Tutor has helped students excel in Physics and
              Mathematics
            </p>
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

        {/* Testimonials Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              What Our Students Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.grade} • {testimonial.subject}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground pl-6">
                        {testimonial.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Highlights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Proven Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">
                  Average Grade Improvement
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  2+ Letter Grades
                </div>
                <p className="text-muted-foreground">
                  Students typically improve by 2 or more letter grades
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">
                  University Acceptance
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  85%
                </div>
                <p className="text-muted-foreground">
                  Of students accepted into STEM programs
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">
                  Student Retention
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  92%
                </div>
                <p className="text-muted-foreground">
                  Students continue with us throughout high school
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
