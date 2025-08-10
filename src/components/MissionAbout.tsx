// Enhanced by AI on 2025-08-10T22:38:48.095Z
// Section: about
// Category: about

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Calendar,
  Atom
} from "lucide-react"
import Link from "next/link"

export default function About() {
  const courses = [
    {
      icon: Atom,
      title: "Quantum Physics",
      description: "Explore the fascinating world of quantum mechanics with comprehensive lessons on wave functions, quantum states, and particle behavior."
    },
    {
      icon: Lightbulb,
      title: "Theoretical Physics",
      description: "Dive into the fundamental theories that explain our universe, from relativity to string theory and beyond."
    },
    {
      icon: GraduationCap,
      title: "Applied Physics",
      description: "Learn how physics principles are applied to solve real-world problems in engineering, medicine, and technology."
    },
    {
      icon: Globe,
      title: "Astrophysics",
      description: "Study celestial objects and phenomena, from planetary systems to black holes and the evolution of the universe."
    }
  ]

  const benefits = [
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "1000+", label: "Students Taught", icon: Users },
    { value: "98%", label: "Pass Rate", icon: TrendingUp },
    { value: "24/7", label: "Online Access", icon: Calendar }
  ]

  const testimonials = [
    {
      name: "Sarah Ahmed",
      program: "Physics Major",
      image: "SA",
      quote: "Prof. Ouhbi's quantum physics course completely changed my understanding of the subject. His teaching methods make complex concepts accessible."
    },
    {
      name: "Michael Chen",
      program: "Engineering Student", 
      image: "MC",
      quote: "The applied physics course gave me practical skills I use every day in my engineering projects. Best decision I made for my education."
    },
    {
      name: "Emily Rodriguez",
      program: "Astronomy PhD",
      image: "ER",
      quote: "The astrophysics course prepared me perfectly for my graduate studies. Prof. Ouhbi's passion for the subject is truly inspiring."
    },
    {
      name: "David Kim",
      program: "Computer Science",
      image: "DK",
      quote: "As a CS student, I was intimidated by physics, but Prof. Ouhbi's teaching style made it approachable and even enjoyable!"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Physics Courses Enrollment
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Understanding of
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              The Physical Universe
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join Prof. Ouhbi's acclaimed physics courses and embark on a journey through 
            the fundamental laws that govern our universe, from quantum mechanics to astrophysics.
          </p>
        </div>

        {/* Professor Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Meet Prof. Ouhbi</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 15 years of teaching experience at prestigious institutions, 
                Prof. Ouhbi has dedicated his career to making physics accessible and engaging for all students.
              </p>
              <p>
                His innovative teaching methods combine theoretical rigor with practical applications, 
                helping students develop both deep understanding and problem-solving skills.
              </p>
              <p>
                Prof. Ouhbi's courses have helped thousands of students achieve academic excellence 
                and pursue successful careers in physics, engineering, and related fields.
              </p>
            </div>
            <Button className="group" asChild>
              <Link href="#courses">
                Explore Courses
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Physics is not just a subject to study, but a way to see and understand the world around us."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Prof. Ouhbi</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Courses */}
        <div className="mb-20" id="courses">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Available Courses</h3>
            <p className="text-muted-foreground">
              Choose from our range of comprehensive physics courses, designed to meet your academic and career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{course.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Student Testimonials</h3>
            <p className="text-muted-foreground">
              Hear from students who have transformed their understanding of physics with Prof. Ouhbi's courses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {testimonial.image}
                  </div>
                  <h4 className="font-semibold mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-primary mb-3">{testimonial.program}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <Atom className="size-12 text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Enrollment Now Open for Fall 2023
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                Secure your place in Prof. Ouhbi's highly sought-after physics courses. 
                Limited seats available to ensure personalized attention for each student.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Download Course Catalog
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}