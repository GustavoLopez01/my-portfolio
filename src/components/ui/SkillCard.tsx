import type { Skill } from "@/src/types";

type SkillCardProps = {
  skill: Skill
}

export default function SkillCard({
  skill
}: SkillCardProps) {
  return (
    <>
      <div className="w-[200px] p-7 rounded-md transition-all hover:shadow-md shadow-xs bg-white">
        <p className="text-[12px] text-black flex flex-col gap-1">
          {skill.title}
          <span className="text-[12px] text-gray-500">
            {skill.description}
          </span>
        </p>
      </div>
    </>
  )
}
