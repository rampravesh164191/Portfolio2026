import { Button } from "@/components/Button"
import { ArrowRight, ChevronDown, Download, Github, Linkedin, Twitter } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"
import { skills } from "./SkillsArray";
export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg  */}
        <div className="absolute inset-0">
            <img src="/hero-bg.png" alt="hero image" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-(--color-background/20) via-(--color-background/80) to-(--color-background)"></div>
        </div>
        {/* green dots  */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, idx) => (
                <div key={idx} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20b2a6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}></div>
            ))}
        </div>
        {/* Content  */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* left column - text content  */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-(--color-primary) rounded-full animate-pulse" />Software Engineer . Full-Stack (React & Node)
                        </span>
                    </div>
                    {/* Headline  */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading animate-fade-in animation-delay-100">
                            Full-Stack <span className="text-(--color-primary) glow-text">web</span>
                            <br />
                            applications
                            <br />
                            <span className="font-serif italic font-normal text-white">done right</span>
                        </h1>
                        <p className="text-lg text-(--color-muted-foreground) max-w-lg animate-fade-in animation-delay-200">
                            Hi, I’m Rampravesh. I build full-stack web applications using
                            React, Node.js, Express, TypeScript, and MongoDB.
                        </p>
                    </div>
                    {/* call to action : CTAs  */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <a href="#contact"><Button size="lg">Contact Me <ArrowRight className="w-5 h-5" /> </Button></a>
                        <AnimatedBorderButton />
                    </div>
                    {/* social links  */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-(--color-muted-foreground)">Follow Me:</span>
                        {[
                            { icon: Github, href: "https://github.com/rampravesh164191" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/rampravesh164191/" },
                            // { icon: Twitter, href: "#" }
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-(--color-primary/10) hover:text-(--color-primary) transition-all duration-300">{<social.icon className="w-5 h-5" />}</a>
                        ))}
                    </div>
                </div>
                {/* right column - profile image  */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile image  */}
                    <div className="relative max-w-md mx-auto">
                        <div
                            className="absolute inset-0 
                                       rounded-3xl bg-gradient-to-br 
                                       from-primary/30 via-transparent 
                                        to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="profile-photo.png" alt="rampravesh" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                            {/* floating badge  */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse " />
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>
                            {/* stats badge  */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-(--color-primary)">4+</div>
                                <div className="text-xs text-(--color-muted-foreground)">projects</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* skill section  */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-(--color-muted-foreground) mb-6 text-center">Techonologies that i work with</p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 px-8 py-4 flex items-center justify-center"
                            >
                                {skill.type === "icon" ? (
                                    skill.element
                                ) : (
                                    <span className="text-xl font-semibold text-(--color-muted-foreground/50) hover:text-(--color-muted-foreground)">
                                        {skill.value}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-col group"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>
}