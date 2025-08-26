import Color from "color";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { FaGit, FaReact } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  SiDocker,
  SiExpo,
  SiExpress,
  SiMui,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPosthog,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiN8N
} from "react-icons/si";
class SkillData {
  constructor(
    public name: string,
    public icon: IconType,
    public color: ReturnType<typeof Color>
  ) {}
}

export const skills = {
  react: new SkillData("React", FaReact, Color("#61DAFB")),
  next: new SkillData("Next.js", SiNextdotjs, Color("#091827")),
  typescript: new SkillData("TypeScript", SiTypescript, Color("#3178C6")),
  node: new SkillData("Node.js", DiNodejs, Color("#339933")),
  nestjs: new SkillData("NestJs", SiNestjs, Color("#E0234E")),
  postgresql: new SkillData("PostgreSQL", BiLogoPostgresql, Color("#336791")),
  docker: new SkillData("Docker", SiDocker, Color("#2496ED")),
  express: new SkillData("Express", SiExpress, Color("#339933")),
  redis: new SkillData("Redis", SiRedis, Color("#DC382D")),
  redux: new SkillData("Redux", SiRedux, Color("#764ABC")),
  mui: new SkillData("MUI", SiMui, Color("#0081CB")),
  tailwind: new SkillData("Tailwind", SiTailwindcss, Color("#38BDF8")),
  posthog: new SkillData("PostHog", SiPosthog, Color("#eb9d2a")),
  expo: new SkillData("Expo", SiExpo, Color("#f5f8ff")),
  git: new SkillData("Git", FaGit, Color("#F05032")),
  mongo: new SkillData("MongoDB", SiMongodb, Color("#4DB33D")),
  n8n: new SkillData("n8n", SiN8N, Color("#eb4a72")),
} as const;

export type SkillKey = keyof typeof skills;
