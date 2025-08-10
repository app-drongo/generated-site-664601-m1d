// Enhanced by AI on 2025-08-10T22:38:02.407Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Atom, 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Award,
  Users,
  Calculator,
  Lightbulb,
  ClipboardCheck
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Atom,
      title: "Quantum Physics",
      description: "Explore the fascinating world of quantum mechanics with comprehensive lessons and practical examples.",
      badge: "Advanced"
    },
    {
      icon: BookOpen,
      title: "Classical Mechanics",
      description: "Master Newton's laws and their applications with hands-on problem-solving sessions.",
      badge: "Fundamental"
    },
    {
      icon: Calculator,
      title: "Mathematical Physics",
      description: "Develop strong mathematical foundations essential for solving complex physics problems.",
      badge: "Core"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Choose from morning, afternoon, or weekend sessions to fit your academic timetable.",
      badge: "Convenience"
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description: "Specialized sessions focused on exam techniques and practice with past papers.",
      badge: "Success"
    },
    {
      icon: Award,
      title: "Certified Courses",
      description: "Receive official certification upon completion to enhance your academic profile.",
      badge: "Recognition"
    },
    {
      icon: Users,
      title: "Small Group Sessions",
      description: "Learn in small groups for personalized attention and interactive discussions.",
      badge: "Personalized"
    },
    {
      icon: Lightbulb,
      title: "Research Opportunities",
      description: "Exceptional students may be invited to participate in research projects with Prof. Ouhbi.",
      badge: "Advanced"
    },
    {
      icon: ClipboardCheck,
      title: "Regular Assessments",
      description: "Track your progress with regular quizzes and feedback sessions to ensure continuous improvement.",
      badge: "Progress"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Physics Courses
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Excellence in Physics Education with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Professor Ouhbi
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive physics courses designed to build strong foundations, develop problem-solving skills, and prepare you for academic success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to enhance your physics knowledge with Prof. Ouhbi?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Register Now
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View Course Details
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}