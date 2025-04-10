import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { skills } from "@/data/skils";
import { sosmed } from "@/data/sosmed";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1 className="text-3xl font-semibold">About Me</h1>
      <p className="text-sm font-medium mb-3">A little about myself.</p>
      <div className="flex flex-col gap-4">
        <p className="indent-8">
          Hi, I’m <strong>Heri Riyanto</strong>, a programmer at Phicos Group
          since 2024. My expertise lies in developing applications using PHP
          (Laravel and CodeIgniter) and working with databases. Additionally, I
          am skilled in JavaScript and React.js, which I aim to highlight as
          part of my future career growth. I am a calm and focused individual
          when it comes to work, with a strong command of JavaScript. What sets
          me apart is my ability to understand user needs and translate them
          into effective technical solutions. I believe that results are
          everything, but the process to achieve those results is equally
          important.
        </p>
        <p className="indent-8">
          Outside of work, I enjoy motorbike rides without a specific
          destination. This hobby gives me the time to reflect and spark new
          ideas. With a passion for solving complex problems and making
          technology more useful, I continuously learn and adapt to the latest
          advancements to deliver the best solutions.
        </p>
        <p>
          Whether you’re a recruiter, a potential client, or just curious, feel
          free to reach out to me.
        </p>
      </div>
      <h1 className="text-3xl font-semibold my-5">Skills</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
              {/* <CardDescription>{skill.description}</CardDescription> */}
              <Separator />
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {skill.contents.map((content, i) => (
                  <li key={i}>{content}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <h1 className="text-3xl font-semibold my-5">Get in touch</h1>
      <p className="text-sm mb-3">
        You can react me out via email at{" "}
        <Link
          target="_blank"
          to="mailto:heri.riyanto.official@gmail.com"
          className="underline underline-offset-2 hover:text-blue-600"
        >
          heri.riyanto.official@gmail.com
        </Link>{" "}
        or via socials below:
      </p>
      <ul className="list-disc list-inside">
        {sosmed.map((item, i) => (
          <li key={i}>
            <Link
              target="_blank"
              to={item.link}
              className="inline-flex items-center gap-[2px] hover:underline underline-offset-2 hover:text-blue-600 transition-colors duration-200 ease-in"
            >
              {item.name} <ExternalLink size={14} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
