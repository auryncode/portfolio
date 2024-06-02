import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { skills } from "@/data/skils";
import RootLayout from "@/layouts/RootLayout";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <RootLayout>
      <h1 className="text-3xl font-semibold">About Me</h1>
      <p className="text-sm font-medium mb-3">
        A little about myself.
      </p>
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium">
          Greetings! I am <span className="font-semibold">Heri Riyanto</span>,
          commonly known as <span className="font-semibold">Heri</span>. I hail
          from Karanganyar and currently live in Banjarsari, Surakarta,
          Indonesia. I completed my education at SMKN 2 Karanganyar in 2024,
          specializing in Software Engineering.
        </p>
        <p className="text-sm font-medium">
          My foray into web development began in 2021 with Python and PHP, both
          of which I learned during my time at school. Currently, my focus has
          shifted towards mastering JavaScript, React, and their associated
          technologies. Additionally, I am expanding my knowledge in areas like
          accessibility, testing, CI/CD, among others.
        </p>
      </div>
      <h1 className="text-3xl font-semibold my-5">Skills</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
              <CardDescription>{skill.description}</CardDescription>
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
          to="mailto:auryncode@gmail.com"
          className="underline underline-offset-2 hover:text-blue-600"
        >
          auryncode@gmail.com
        </Link>{" "}
        or via socials below:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <Link to={"https://www.instagram.com/heri.riynt"} className="inline-flex items-center gap-[2px] hover:underline underline-offset-2 hover:text-blue-600 transition-colors duration-200 ease-in">Instagram <ExternalLink size={14} /></Link>
          
        </li>
        <li>
          <Link to={"https://www.instagram.com/heri.riynt"} className="inline-flex items-center gap-1 hover:underline underline-offset-2 hover:text-blue-600 transition-colors duration-200 ease-in">Instagram <ExternalLink size={14} /></Link>
          
        </li>
      </ul>
    </RootLayout>
  );
}
