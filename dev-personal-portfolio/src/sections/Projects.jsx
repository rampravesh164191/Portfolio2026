import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import img1 from "../assets/project_images/1.png";
import img2 from "../assets/project_images/2.png";
import img3 from "../assets/project_images/3.png";
import img4 from "../assets/project_images/4.png";
const projects = [
  {
    title: "CRM Management System",
    description:
      "A full-stack CRM system to manage leads, track interactions, and visualize sales data.",
    image: img1,
    tags: ["React", "Typescript","Tailwindcss", "NodeJS", "Expressjs", "MongoDB","Render"],
    link: "https://crm-management-sayan-osbvuu1wq-rams-projects-eab30cd6.vercel.app/signup",
    github: "https://github.com/rampravesh164191/CRM_Management_Sayan",
  },
  {
    title: "Grocery List Manager",
    description:
      "A smart grocery list app that tracks items, suggests recipes, and helps users shop efficiently.",
    image: img2,
    tags: ["HTML", "CSS", "Javascript", "Localstorage","Netlify"],
    link: "https://darling-klepon-897c85.netlify.app/",
    github: "https://github.com/rampravesh164191/grocery_list_manager",
  },
  {
    title: "Task Manager : GoalCraft",
    description:
      "GoalCraft is a productivity app with task management, goal tracking, and a Pomodoro focus timer.",
    image: img3,
    tags: ["HTML", "CSS", "Javascript", "JSON Server", "Vercel"],
    link: "https://constitution-coders-020.vercel.app/",
    github: "https://github.com/rampravesh9991/Constitution-Coders_020",
  },
  {
    title: "Learners Hub",
    description:
      "An educational platform offering free, high-quality learning resources.",
    image: img4,
    tags: ["HTML", "CSS", "SCSS","Netlify"],
    link: "https://6671565ba1ffece66ecd554d--heartfelt-churros-269c59.netlify.app/",
    github: "https://github.com/Arpan-creator/IBM-Innovators_045-",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-(--color-primary/5) rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-(--color-secondary-foreground)">
            Recent
            <span className="font-serif italic font-normal text-white">
              {" "}
              Projects
            </span>
          </h2>
          <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
            A selection of projects I’ve built while learning and experimenting with web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-(--color-primary) hover:text-(--color-primary-foreground) transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-(--color-primary) hover:text-(--color-primary-foreground) transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-(--color-primary) transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-(--color-muted-foreground) group-hover:text-(--color-primary)
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-(--color-muted-foreground) text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-(--color-surface) text-xs font-medium border border-border/50 text-(--color-muted-foreground) hover:border-(--color-primary/50) hover:text-(--color-primary) transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};