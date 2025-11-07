import * as motion from "motion/react-client"
import { Users, Code2, Rocket } from "lucide-react";
import type { Skill } from "@/src/types";

type SkillCardProps = {
  skill: Skill
  index: number
}

function renderIcon(icon: string) {
  switch (icon) {
    case "code":
      return <Code2 className="text-blue-500" />
    case "rocket":
      return <Rocket className="text-blue-500" />
    default:
      return <Users className="text-blue-500" />
  }
}

export default function SkillCard({
  skill,
  index
}: SkillCardProps) {
  return (
    <>
      <motion.div
        className="w-[15em] p-7 rounded-md transition-all hover:shadow-md shadow-xs bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="bg-blue-500/10 w-9 h-9 flex justify-center items-center rounded-xl">
          {renderIcon(skill.icon)}
        </div>
        <p className="text-[12px] text-black flex flex-col gap-1 mt-2">
          {skill.title}
          <span className="text-[12px] text-gray-500">
            {skill.description}
          </span>
        </p>
      </motion.div>
    </>
  )
}
