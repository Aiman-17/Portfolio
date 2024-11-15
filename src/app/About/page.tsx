'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Email API',
    description: 'RESTful API for sending and managing emails',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Email Client',
    description: 'Web-based email client with modern UI',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Email Analytics',
    description: 'Real-time analytics dashboard for email campaigns',
    tags: ['Python', 'Django', 'D3.js'],
  },
]

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'TechMail Inc.',
    period: '2020 - Present',
    description: 'Leading the development of scalable email infrastructure',
  },
  {
    title: 'Full Stack Developer',
    company: 'WebSolutions Ltd.',
    period: '2017 - 2020',
    description: 'Developed and maintained various web applications',
  },
  {
    title: 'Junior Developer',
    company: 'StartupX',
    period: '2015 - 2017',
    description: 'Contributed to the development of mobile apps',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <section className="mb-20">
            <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src="/face swapping.jpeg"
                alt="Profile picture"
                width={200}
                height={200}
                className="rounded-full"
              />
              <div>
                <p className="text-lg mb-4">
                  Hi, I'm Aiman, a passionate software engineer specializing in email technologies. 
                  With over 8 years of experience, I've been at the forefront of developing innovative 
                  email solutions for developers and businesses alike.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white/10 border-white/20">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-white/10 border-white/20">
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company} | {exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
};