import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Code Quality",
    description:
      "I focus on writing clean, readable code and improving it as I learn better patterns and practices.",
  },
  {
    icon: Rocket,
    title: "Performance Awareness",
    description:
      "I pay attention to performance basics like efficient rendering, API design, and avoiding unnecessary work.",
  },
  {
    icon: Users,
    title: "Learning & Collaboration",
    description: "I enjoy learning from others, asking questions, and improving my work through feedback and code reviews.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "I actively learn new technologies and concepts by building projects and refining my understanding over time.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-(--color-secondary-foreground) ">
              Turning ideas
              <span className="font-serif italic font-normal text-white">
                {" "}
                into working web applications
              </span>
            </h2>

            <div className="space-y-4 text-(--color-muted-foreground) animate-fade-in animation-delay-200">
              <p>
                I’m a software engineer focused on building full-stack web applications.
                I enjoy working across the stack, from building clean user interfaces
                to designing and implementing backend APIs.
              </p>
              <p>
                I’ve built multiple projects using React, Node.js, Express, TypeScript,
                and MongoDB, which helped me strengthen my fundamentals and
                 problem-solving skills.
              </p>
              {/* <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p> */}
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-(--color-foreground)">
                "My goal is to build reliable web applications while continuously
                improving my skills by working on real-world projects."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-(--color-primary/10) flex items-center justify-center mb-4 hover:bg-(--color-primary/20)">
                  <item.icon className="w-6 h-6 text-(--color-primary)" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-(--color-muted-foreground)">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};