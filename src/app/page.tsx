"use client";

import {
  Github,
  Mail,
  Linkedin,
  Award,
  FolderGit2,
  Twitter,
  FileDown,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { SnakeGame } from "@/components/games/snake-game";
//import { GameSelector } from "@/components/games/game-selector"

const skills = {
  languages: ["C++", "JavaScript", "TypeScript", "Python", "SQL"],
  frameworks: ["React", "Next.js", "Angular", "Node.js", "Express.js"],
  tools: ["Git", "VS Code", "Firebase", "MongoDB", "Azure"],
  libraries: ["OpenCV", "NumPy", "Pandas", "Scikit-learn", "Chart.js"],
};

const hackathons = [
  {
    name: "Smart India Hackathon",
    position: "1st Prize",
    prize: "₹50,000",
    project: "Anomaly Detection System for OMMAS Infrastructure Data",
    description:
      "Built an AI-powered system for the Ministry of Rural Development to detect anomalies in infrastructure project data, helping prevent fraud and ensure quality.",
  },
  {
    name: "IIT ISM DHANBAD",
    position: "1st Prize",
    prize: "₹15,000",
    project: "Smart Waste Management",
    description:
      "Developed an IoT-based waste management system with route optimization and real-time monitoring capabilities.",
  },
  {
    name: "Chandigarh University",
    position: "1st Prize",
    prize: "₹50,000",
    project: "Healthcare Analytics Platform",
    description:
      "Created a comprehensive healthcare analytics platform for predictive disease analysis and patient care optimization.",
  },
  {
    name: "MAIT DELHI 4.0",
    position: "1st Prize",
    prize: "₹15,000",
    project: "EdTech Solution",
    description:
      "Developed an adaptive learning platform using AI to personalize education content.",
  },
  {
    name: "BIT MESRA",
    position: "3rd Prize",
    prize: "₹10,000",
    project: "Sustainable Energy Monitor",
    description:
      "Built an IoT-based energy monitoring and optimization system for smart cities.",
  },
  {
    name: "IIT Roorkee",
    position: "3rd Prize",
    prize: "Goodies & Coupons",
    project: "Agricultural Supply Chain",
    description:
      "Developed a blockchain-based supply chain solution for agricultural products.",
  },
  {
    name: "IIT Bombay",
    position: "Top 8",
    prize: "Goodies & Coupons",
    project: "Financial Inclusion Platform",
    description:
      "Created a platform to promote financial literacy and inclusion in rural areas.",
  },
  {
    name: "PAN INDIA Bangalore",
    position: "Top 8",
    prize: "Goodies & Coupons",
    project: "Smart City Solution",
    description: "Developed an integrated smart city management system.",
  },
  {
    name: "NIT Rourkela",
    position: "Best Auth0 Implementation",
    prize: "Flipkart coupon worth ₹5,000",
    project: "Secure Authentication System",
    description:
      "Implemented a robust authentication system using Auth0 for enhanced security.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen  bg-background ">
      {/* Hero Section */}
      {/* <div
        className="h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://i.sstatic.net/8kdHT.jpg")',
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div> */}
      <SnakeGame />
      {/* Add spacing between game and content */}
      <div className="h-20" /> {/* This creates the space */}
      <div className="min-h-screen  bg-background container mx-auto px-6 lg:px-0 flex flex-col items-center relative ">
        <main className="space-y-12 ">
          {/* Header */}
          <div className="flex flex-col  gap-4 mb-12">
            <div className="flex items-start gap-4">
              <h1 className="text-4xl font-bold text-white">
                Rajnandini Tiwari
              </h1>
              <Badge
                variant="secondary"
                className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
              >
                Available
              </Badge>
            </div>
            <h2 className="text-xl text-muted-foreground">
              Software Engineer | Data Science Enthusiast
            </h2>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:rajnandini.tiwari.dev@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/rajnandinitiwari">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/rajnandini3847">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com/rajnandinitiwari">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="outline" className="gap-2">
                <FileDown className="h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-muted-foreground max-w-2xl">
                A passionate Software Engineer and Data Science enthusiast,
                currently pursuing BCA in Data Science and AI at The ICFAI
                University. Winner of Smart India Hackathon 2023 and multiple
                other hackathons, I love building innovative solutions that make
                a real impact.
              </p>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Skills & Tools</h2>
              <Tabs defaultValue="languages" className="max-w-2xl">
                <TabsList>
                  <TabsTrigger value="languages">Languages</TabsTrigger>
                  <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                  <TabsTrigger value="libraries">Libraries</TabsTrigger>
                </TabsList>
                {Object.entries(skills).map(([category, items]) => (
                  <TabsContent key={category} value={category} className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </section>

            {/* Projects Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <FolderGit2 className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Featured Projects</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 max-w-3xl">
                <div className="border rounded-lg p-4 hover:bg-accent transition-colors">
                  <h3 className="font-semibold mb-2">
                    Anomaly Detection System
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Built for Ministry of Rural Development under Smart India
                    Hackathon 2023. Analyzes infrastructure data to detect
                    anomalies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Isolation Forest</Badge>
                    <Badge variant="outline">Chart.js</Badge>
                  </div>
                </div>
                <div className="border rounded-lg p-4 hover:bg-accent transition-colors">
                  <h3 className="font-semibold mb-2">
                    Waste Collection & Route Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Developed a system for optimizing waste collection routes
                    using IoT devices and computer vision.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">MERN</Badge>
                    <Badge variant="outline">OpenCV</Badge>
                    <Badge variant="outline">Azure</Badge>
                  </div>
                </div>
              </div>
            </section>

            {/* Hackathons Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">
                  Hackathon Achievements
                </h2>
              </div>
              <div className="relative max-w-3xl">
                {/* Timeline line */}
                <div className="absolute left-[11px] top-[45px] bottom-8 w-[2px] bg-muted-foreground/20" />

                {/* Hackathon cards */}
                <div className="space-y-6">
                  {hackathons.map((hackathon, index) => (
                    <div key={index} className="relative pl-8">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-[28px] w-6 h-6 rounded-full border-2 border-primary bg-background" />

                      <Card className="p-6 hover:bg-accent/50 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {hackathon.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {hackathon.project}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary" className="mb-1">
                              {hackathon.position}
                            </Badge>
                            <p className="text-sm text-muted-foreground">
                              {hackathon.prize}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {hackathon.description}
                        </p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Achievements Section */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Key Achievements</h2>
              </div>
              <ul className="space-y-4 text-muted-foreground max-w-2xl list-disc list-inside">
                <li>
                  Winner of Smart India Hackathon 2023 (selected from 44,000+
                  teams)
                </li>
                <li>
                  Secured victories in 8 hackathons at premier institutions
                  including IIT Roorkee, IIT Bombay
                </li>
                <li>
                  Invited to the Innovation, Design, and Entrepreneurship (IDE)
                  Bootcamp 2023
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
