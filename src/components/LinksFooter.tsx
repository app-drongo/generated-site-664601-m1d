// Enhanced by AI on 2025-08-10T22:40:23.191Z
// Section: footer
// Category: footer

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Atom,
  BookOpen,
  GraduationCap,
  Calendar
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Courses",
      links: [
        { name: "Quantum Physics", href: "#features" },
        { name: "Classical Mechanics", href: "#features" },
        { name: "Thermodynamics", href: "#features" },
        { name: "Electromagnetism", href: "#features" },
        { name: "Relativity", href: "#features" },
        { name: "All Courses", href: "#features" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Mission", href: "#about" },
        { name: "Prof. Ouhbi", href: "#about" },
        { name: "Teaching Approach", href: "#about" },
        { name: "Success Stories", href: "#about" },
        { name: "Facilities", href: "#about" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Study Materials", href: "#features" },
        { name: "Physics Community", href: "#features" },
        { name: "Tutorials", href: "#features" },
        { name: "Online Sessions", href: "#features" },
        { name: "Research Papers", href: "#features" },
        { name: "FAQ", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Enrollment Policy", href: "/terms" },
        { name: "Student Guidelines", href: "/terms" },
        { name: "Academic Integrity", href: "/terms" },
        { name: "Refund Policy", href: "/terms" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Atom className="text-primary-foreground" size={20} />
                </div>
                <span className="font-bold text-xl">Physics Academy</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Join Prof. Ouhbi's renowned physics courses and unlock your potential in the fascinating world of physics. 
                Our comprehensive curriculum and expert guidance ensure academic excellence.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">prof.ouhbi@physicsacademy.edu</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 789-4321</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Science Building, University Campus</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Get Course Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Receive updates on new courses, enrollment periods, and physics resources.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Physics Academy. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Guided by <Heart className="size-3 text-red-500 fill-current" /> Prof. Ouhbi
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="#features" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Course Catalog
            </Link>
            <Link href="#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Academic Calendar
            </Link>
            <Link href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Enrollment Assistance
            </Link>
            <Link href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Student Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}