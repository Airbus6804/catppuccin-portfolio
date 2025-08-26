import { WorkExperienceCardProps } from "@/components/jobs/work-experience-card";
import VikSchool from "@/assets/work-experience/vik-logo.png";
import Otacon from "@/assets/work-experience/otacon.svg";
import Color from "color";

export const workExperience: WorkExperienceCardProps[] = [
  {
    image: VikSchool,
    title: "VIK School",
    short_description: "jobs-data.VIK.short-description",
    description: `Nel mio percorso ho lavorato come sviluppatore full stack per VIK School, un'app che si occupa di sostituire il tradizionale modo di insegnare l'educazione civica. 
    L'applicazione contiene sfide giornaliere per mantenere i bambini intrattenuti giornalmente e delle storie riguardanti varie tematiche civiche.`,
    url: "https://www.vikschool.com/",
    list: [
      { text: "jobs-data.VIK.list.1", emoji: "📱​🚀" },
      {
        text: "jobs-data.VIK.list.2",
        emoji: "🧑‍🏫",
      },
      {
        text: "jobs-data.VIK.list.3",
        emoji: "🔥",
      },
      {
        text: "jobs-data.VIK.list.4",
        emoji: "🔔",
      },
      { text: "jobs-data.VIK.list.5", emoji: "🧠" },
      {
        text: "jobs-data.VIK.list.6",
        emoji: "🔧",
      },
      { text: "jobs-data.VIK.list.7", emoji: "💾" },
    ],

    color: Color('#1cb0f6'),
    startDate: new Date("2024-05-25"),
    skills: [
      "react",
      "expo",
      "typescript",
      "node",
      "express",
      "postgresql",
      "docker",
      "redux",
      "mui",
      "tailwind",
      "posthog",
      "git",
    ],
  },
  {
    image: Otacon,
    title: "Otacon",
    short_description: "jobs-data.otacon.short-description",
    description: "Otacon is a company that makes software for the automotive industry.",
    url: "https://www.otacon.it/",
    list: [
        { text: "jobs-data.otacon.list.1", emoji: "📃" },
        { text: "jobs-data.otacon.list.2", emoji: "👮" },
        { text: "jobs-data.otacon.list.3", emoji: "🔧" },
        { text: "jobs-data.otacon.list.4", emoji: "🤖" },
        { text: "jobs-data.otacon.list.5", emoji: "⚙️" },
        { text: "jobs-data.otacon.list.6", emoji: "💬" },
        { text: "jobs-data.otacon.list.7", emoji: "🔗" },
        { text: "jobs-data.otacon.list.8", emoji: "🧠" },

    ],
    color: Color("#FC380F"),
    startDate: new Date("2025-05-02"),
    skills: ["react", "next", "typescript", "node", 'mongo', "postgresql",  "express", "redis", "git", "n8n"],
  },
];
