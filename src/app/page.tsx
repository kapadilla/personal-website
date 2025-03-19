import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Download, ArrowUpRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 md:px-8 w-full">
          <div className="font-bold text-xl">
            <Link href="/">KP</Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            {/* <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link> */}
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="default" asChild className="" size="default">
            <Link href="#contact">Let's Connect</Link>
          </Button>
        </div>
      </header>


      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between  py-24 md:py-32">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="text-primary">Kimberly</span>
              <br />
            </h1>
            <p className="text-xl text-muted-foreground">
              A 3rd year Computer Science student passionate about technology and innovation
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button variant="default" asChild className="" size="default">
                <Link href="/resume.pdf" download>
                  <Download className="h-4 w-4 mr-2" /> Download CV
                </Link>
              </Button>
              <Button variant="outline" asChild className="" size="default">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start pt-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link href="mailto:contact@example.com">
                <Mail className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary">
              <Image
                src="/icon.jpg"
                alt="Kimberly Padilla"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>


        {/* Scroll Down Indicator */}
        <div className="flex justify-center pb-12">
          <Link href="#about" className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
            <span className="sr-only">Scroll Down</span>
          </Link>
        </div>

        {/* About Section */}
        <section id="about" className="bg-muted py-16 md:py-24 px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                  I'm a 3rd year Computer Science student with a broad interest in various fields of technology. My
                  academic journey has equipped me with strong foundations in programming, algorithms, data structures,
                  and problem-solving.
                </p>
                <p className="text-lg mb-4">
                  While I've worked on web development projects, I'm equally enthusiastic about exploring other areas
                  like machine learning, software engineering, data science, cybersecurity, and systems programming. I
                  believe in versatility and continuous learning.
                </p>
                <p className="text-lg">
                  Outside of my coursework, I enjoy participating in hackathons, solving coding challenges, and
                  exploring new technologies through personal projects. I'm eager to apply my skills in a professional
                  environment through an internship in any computer science field.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/komsai.jpg"
                  alt="Computer science"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        {/* <section id="skills" className="py-16 md:py-24 px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <SkillCard title="HTML/CSS" level="Expert" />
              <SkillCard title="JavaScript" level="Expert" />
              <SkillCard title="TypeScript" level="Advanced" />
              <SkillCard title="React" level="Expert" />
              <SkillCard title="Next.js" level="Advanced" />
              <SkillCard title="Tailwind CSS" level="Advanced" />
              <SkillCard title="Node.js" level="Intermediate" />
              <SkillCard title="Git" level="Advanced" />
              <SkillCard title="UI/UX Design" level="Intermediate" />
              <SkillCard title="GraphQL" level="Beginner" />
              <SkillCard title="Testing" level="Beginner" />
            </div>
          </div>
        </section> */}

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Tug-ani"
                description="A responsive website for the official school publication of the University of the Philippines Cebu"
                tags={["Next.js", "TypeScript", "Firebase", "Tailwind CSS"]}
                imageUrl="/tug-ani.png"
                demoUrl="https://tug-ani.vercel.app/"
                repoUrl="https://github.com/jrmellpaz/Tug-ani"
              />
              <ProjectCard
                title="Perx"
                description="A coupon collection web application"
                tags={["React", "TypeScript", "Supabase", "Tailwind CSS", "PayMongo"]}
                imageUrl="/perx.png"
                demoUrl="https://perx.vercel.app/"
                repoUrl="https://github.com/jrmellpaz/Perx"
              />
              <ProjectCard
                title="MedVision"
                description="An AI model using YOLOv8 with a mean Average Precision of 0.717 on over a thousand images"
                tags={["Python", "Streamlit", "Google Colab"]}
                imageUrl="/MedVision.jpg"
                demoUrl="#"
                repoUrl="https://github.com/rjmango/Sesouh---UPCSG-Hackathon-2025"
              />
              <ProjectCard
                title="Compiley Studio"
                description="A custom-built IDE for developing and running programs in the BrainRot programming language"
                tags={["Python", "Tkinter", "CustomTkinter", "Java (MARS)", "Gemini API"]}
                imageUrl="/compiley-studio.png"
                demoUrl="#"
                repoUrl="https://github.com/DaRainFlavor/CMSC-124-PL-Project"
              />
              <ProjectCard
                title="Layman's Law"
                description="A web application to bridge the gap between workers and legal professionals"
                tags={["Django", "MySQL", "Python", "Vue.js", "HTML",  "Tailwind CSS"]}
                imageUrl="/laymans.png"
                demoUrl="#"
                repoUrl="https://github.com/lssndrrr/Laymans-Law"
              />
              <ProjectCard
                title="Quarta"
                description="A simple and intuitive financial desktop application tailored to the needs of ordinary Filipinos"
                tags={["Java Swing", "NetBeans"]}
                imageUrl="/quarta.jpg"
                demoUrl="#"
                repoUrl="https://github.com/kapadilla/Quarta"
              />
            </div>
          </div>
        </section>

        {/* Other Projects Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Other Projects</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <OtherProjectCard
                title="Cut the Crop!"
                description="A crop-inspired territory capture game"
                tags={["GDScript", "Godot Engine"]}
                link="https://github.com/Pixelazation/CutTheCrop"
              />
              <OtherProjectCard
                title="Freshie Birdie"
                description="A Flappy Bird-inspired game"
                tags={["C++", "SFML"]}
                link="https://github.com/kapadilla/Freshie-Birdie"
              />
              <OtherProjectCard
                title="Portfolio Website"
                description="This portfolio website built with Next.js and Tailwind CSS."
                tags={["Next.js", "Tailwind CSS", "Responsive Design"]}
                link="#"
              />
              <OtherProjectCard
                title="login-register"
                description="Implementing login and register using various programming languages"
                tags={["PHP", "MySQL", "Python", "Jinja", "Flask"]}
                link="https://github.com/kapadilla/login-register"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="text-lg">
                  I'm actively seeking internship opportunities in any field of computer science. Whether it's software
                  development, data science, cybersecurity, or any other tech domain, I'm eager to learn and contribute.
                  If you have an opening or would like to discuss how I can add value to your team, please reach out!
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:kimberlypadilla928@gmail.com" className="hover:text-primary transition-colors">
                  kimberlypadilla928@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="linkedin.com/in/kapadilla28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/kapadilla28
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="github.com/kapadilla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/kapadilla
                  </a>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md border-input bg-background"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md border-input bg-background"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-3 py-2 border rounded-md border-input bg-background"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 border rounded-md border-input bg-background min-h-[120px]"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full" variant={undefined} size={undefined}>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Kimberly Padilla. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="github.com/kapadilla" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="linkedin.com/in/kapadilla28" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:kimberlypadilla928@gmail.com">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Skill Card Component
function SkillCard({ title, level }: { title: string; level: string }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{level}</p>
      </CardContent>
    </Card>
  )
}

// Project Card Component
function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  repoUrl,
}: {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  repoUrl: string
}) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className={undefined}>
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          <Button variant="outline" size="sm" asChild className={undefined}>
            {demoUrl !== "#" && (
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" /> Demo
              </Link>
            )}
          </Button>
          <Button variant="outline" size="sm" asChild className={undefined}>
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1" /> Code
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function OtherProjectCard({
  title,
  description,
  tags,
  link,
}: {
  title: string
  description: string
  tags: string[]
  link: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <Link href={link} className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


