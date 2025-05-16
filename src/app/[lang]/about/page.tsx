import ElevatorPitch from "@/components/elevatorPitch/elevatorpitch";
import Footer from "@/components/footer/footer";
import Heading from "@/components/miscellaneous/heading";
import Header from "@/components/navbar/navbar";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <div className="h-screen relative">
        <Header />
        <div className="flex justify-center w-full mt-[13rem]">
          <div className="flex flex-col w-4/5 text-xl font-semibold">
            <Heading
              size={"text-5xl/14"}
              weight="font-semibold"
              className="z-1 text-shadow-sm"
            >
              About Me
            </Heading>
            <p className="w-2/3 z-1 mt-12">
              Hi, I'm Markus Stuppnig — a freelance IT consultant based in
              Vienna, Austria.
              <br />I have a deep love for technology. There's something magical
              about taking something simple and giving it the ability to learn,
              adapt, and make decisions on its own. This fascination led me to
              specialize in{" "}
              <span className="text-highlight">
                Artificial Intelligence (AI)
              </span>
              , where I help machines become smarter and more useful.
            </p>
          </div>
        </div>
        <img
          src="/images/about/background_light.svg"
          alt="waves"
          className="absolute bottom-0 left-0 w-full h-full"
          style={{ objectFit: "fill" }}
        />
      </div>
      <div className="flex w-full h-full justify-center mb-20">
        <div className="flex flex-col w-4/5 text-xl font-semibold">
          <Heading
            size={"text-5xl/14"}
            weight="font-semibold"
            className="z-1 text-shadow-sm mt-20"
          >
            What I do
          </Heading>
          <p className="w-2/3 z-1 mt-12">
            I work with businesses to create intelligent systems that can:
          </p>
          <ul className="list-disc ml-10">
            <li>
              Understand and process language using Large Language Models (LLMs)
            </li>
            <li>Recognize images and patterns through Computer Vision</li>
            <li>Automate tasks and workflows with custom bots</li>
            <li> Build reliable backend systems using Spring Boot and Flask</li>
            <li>
              Design data pipelines that move and transform information
              efficiently
            </li>
            <li>
              Integrate APIs and third-party tools to connect different services
            </li>
            <li>
              Provide tailored AI consulting to solve unique business challenges
            </li>
          </ul>
          <p className="w-2/3 z-1 mt-12">
            Whether you're looking to improve your operations, enhance customer
            experiences, or explore new AI opportunities, I'm here to help.
          </p>
          <Heading
            size={"text-5xl/14"}
            weight="font-semibold"
            className="z-1 text-shadow-sm mt-20"
          >
            My Journey
          </Heading>
          <p className="w-2/3 z-1 mt-12">
            I studied Computer Science at the Technologisches Gewerbemuseum
            (TGM) in Vienna, focusing on Data Science. During my time there, I
            led several projects, including:
          </p>
          <ul className="ml-10 list-disc">
            <li>
              Digital Emergeny Physician: An AI-powered app to assist emergency
              responders in stroke diagnosis.
            </li>
            <li>
              VSA Platform: A service to help individuals manage and pass on
              their digital legacy.
            </li>
          </ul>
          <p className="w-2/3 z-1 mt-12">
            I also gained international experience through internships:
          </p>
          <ul className="ml-10 list-disc">
            <li>
              Giesecke+Devrient in Dubai: Developed a platform analyzing
              competitor data using AI.
            </li>
            <li>
              Siemens in Vienna: Enhanced a network analysis tool with new
              features and visualizations.
            </li>
          </ul>
          <p className="w-2/3 z-1 mt-12">
            These experiences have equipped me with a diverse skill set and a
            global perspective.
          </p>
          <Heading
            size={"text-5xl/14"}
            weight="font-semibold"
            className="z-1 text-shadow-sm mt-20"
          >
            Let's Connect
          </Heading>
          <p className="w-2/3 z-1 mt-12">
            If you're interested in collaborating or have a project in mind,
            feel free to reach out. I look forward to bringing your ideas to
            life with the power of AI.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
