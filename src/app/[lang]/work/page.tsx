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
      <div className="h-[100rem] relative">
        <Header />
        <div className="flex justify-center w-full mt-[13rem]">
          <div className="flex flex-col w-4/5 text-xl font-semibold">
            <Heading
              size={"text-5xl/14"}
              weight="font-semibold"
              className="z-1 text-shadow-sm"
            >
              My Work
            </Heading>
            <p className="w-2/3 z-1 mt-12">
              Over the three years, I’ve worked on projects that merge
              real-world impact with cutting-edge technology. Below are two key
              examples that highlight my focus on practical AI solutions and
              secure digital infrastructure.
            </p>
          </div>
        </div>
        <img
          src="/images/work/background_dark.svg"
          alt="background image"
          className="absolute bottom-0 left-0 w-full h-full"
          style={{ objectFit: "fill" }}
        />
      </div>
      <div className="flex w-full h-full justify-center mb-20">
        <div className="flex flex-col w-4/5 text-xl font-semibold">
          <Heading
            size={"text-3xl"}
            weight="font-semibold"
            className="z-1 text-shadow-sm mt-16"
          >
            Digital Emergency Physician
          </Heading>
          <p className="w-2/3 z-1 mt-6">
            As part of my diploma thesis at TGM Vienna, I contributed to the
            development of an AI-powered assistant that helps emergency
            responders diagnose strokes faster and more accurately—when every
            second matters.
            <br />
            I was responsible for the backend architecture and API server,
            enabling real-time communication between the mobile interface,
            speech recognition, and the large language model (LLM). My work
            included building a secure database, managing user sessions, and
            applying Zero Trust Architecture to protect sensitive data.
            <br />
            This project showcased the potential of AI to support critical
            decision-making in healthcare.
          </p>

          <Heading
            size={"text-3xl"}
            weight="font-semibold"
            className="z-1 text-shadow-sm mt-16"
          >
            VSA (Virtual Secure Archive)
          </Heading>

          <p className="w-2/3 z-1 mt-6">
            With the rise of digital products and services, more people risk
            losing access to their online assets after death. VSA is a platform
            that addresses this challenge by offering a universal solution to
            manage and pass on digital possessions like crypto wallets or social
            media accounts.
            <br />
            In my dual role as project lead and developer, I oversaw the
            planning process, organized stakeholder meetings, and drove the
            technical implementation. I focused on building a scalable, secure
            backend and implementing core features for asset registration,
            access control, and digital legacy management.
            <br />
            VSA empowers users to protect their digital life—even beyond their
            lifetime.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
