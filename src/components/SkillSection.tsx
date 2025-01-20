import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  SiReact, 
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  
  SiC,
  SiCplusplus,
  SiLinux,
  SiVercel
} from 'react-icons/si'

const skills = {
  languages: [
    { name: "JavaScript", Icon: SiJavascript },
    { name: "TypeScript", Icon: SiTypescript },
    
    { name: "C", Icon: SiC },
    { name: "C++", Icon: SiCplusplus },
  ],
  frameworks: [
    { name: "ReactJS", Icon: SiReact },
    { name: "NextJs", Icon: SiNextdotjs },
    { name: "NodeJS", Icon: SiNodedotjs },
    { name: "ExpressJS", Icon: SiExpress },
    { name: "Tailwind", Icon: SiTailwindcss },
  ],
  tools: [
    { name: "Git", Icon: SiGit },
    { name: "GitHub", Icon: SiGithub },
    { name: "Postman", Icon: SiPostman },
    { name: "Vercel", Icon: SiVercel },
    { name: "Linux", Icon: SiLinux },
  ],
  databases: [
    { name: "MongoDB", Icon: SiMongodb },
    { name: "PostgreSQL", Icon: SiPostgresql },
  ],
};

const SkillSection = () => {
    return (
      <section className="">
        <Tabs defaultValue="languages" className="max-w-2xl">
          <TabsList className="mb-4 bg-black border border-zinc-800 ">
            <TabsTrigger
              value="languages"
              className="hover:bg-zinc-700 focus:bg-zinc-600 data-[state=active]:bg-zinc-600 text-white transition-colors "
            >
              Languages
            </TabsTrigger>
            <TabsTrigger
              value="frameworks"
              className="hover:bg-zinc-700 focus:bg-zinc-600 data-[state=active]:bg-zinc-600 text-white transition-colors"
            >
              Frameworks
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="hover:bg-zinc-700 focus:bg-zinc-600 data-[state=active]:bg-zinc-600 text-white transition-colors"
            >
              Tools
            </TabsTrigger>
            <TabsTrigger
              value="databases"
              className="hover:bg-zinc-700 focus:bg-zinc-600 data-[state=active]:bg-zinc-600 text-white transition-colors"
            >
              Databases
            </TabsTrigger>
          </TabsList>
  
          {Object.entries(skills).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="flex flex-wrap gap-3 ">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-black border border-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
                    <skill.Icon className="w-5 h-5" />
                    <span className="text-sm font-normal">{skill.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    );
  };

export default SkillSection