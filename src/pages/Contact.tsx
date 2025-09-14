import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  Calendar,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  Users,
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      content: "061-840-4925",
      description: "Call us to discuss your tutoring needs",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "meyerl2020@yahoo.com",
      description: "Send us an email for inquiries",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Service Area",
      content: "Grade 10-12 Tutoring",
      description: "Specialized high school physics education",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Class Times",
      content: "Flexible Scheduling",
      description: "Evening and weekend sessions available",
    },
  ];

  const faqs = [
    {
      question: "What subjects do you teach?",
      answer:
        "Our primary focus is Physics for Grade 10-12 students. We also provide Mathematics support at discretion to complement physics learning.",
    },
    {
      question: "How large are your classes?",
      answer:
        "We maintain small class sizes with a maximum of 4 students per session to ensure personalized attention.",
    },
    {
      question: "Do you offer exam preparation?",
      answer:
        "Yes, we provide focused exam preparation sessions aligned with your school's curriculum and assessment schedule.",
    },
    {
      question: "How do I enroll my child?",
      answer:
        "Contact us via phone or email to discuss your child's needs. We'll arrange an initial consultation to determine the best approach.",
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
              Get Started Today
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to excel in Physics? Contact us to begin your learning
              journey
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg font-medium text-primary mb-2">
                      {item.content}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Info */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-5 w-5 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <Label htmlFor="grade">Student Grade Level</Label>
                      <Input id="grade" placeholder="e.g., Grade 11" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject Interest</Label>
                      <Input
                        id="subject"
                        placeholder="Physics, Mathematics, or Both"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your tutoring needs..."
                        rows={4}
                      />
                    </div>

                    <Button
                      onClick={() => toast.success("Message sent")}
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>What to Expect</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Initial Consultation
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          We'll assess your current level and learning goals
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Flexible Scheduling
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Classes scheduled around your school timetable
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <BookOpen className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Personalized Learning
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Tailored approach based on your learning style
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-foreground mb-1">
                          {faq.question}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {faq.answer}
                        </p>
                        {index < faqs.length - 1 && (
                          <hr className="mt-4 border-border" />
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
