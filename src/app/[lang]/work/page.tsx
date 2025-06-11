import Footer from "@/components/footer/footer";
import Heading from "@/components/miscellaneous/heading";
import Text from "@/components/miscellaneous/text";
import Header from "@/components/navbar/navbar";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <Header />
      <div
        className="flex w-full h-screen justify-center items-center flex-col"
        style={{
          backgroundImage: "url('/images/articles/blob-haikei.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Heading size="text-5xl" color="background">
          Work
        </Heading>
        <p className="font-semibold text-2xl mt-5 text-background">
          This page is about my work.
        </p>
      </div>
      <div className="flex w-full h-full justify-center">
        <div className="flex flex-col w-7/8 sm:w-4/5">
          <Heading
            size={"text-2xl sm:text-4xl"}
            weight="font-semibold"
            className="mb-5"
          >
            Digital Emergency Physician
          </Heading>
          <Text>
            <p>
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
          </Text>

          <Heading
            size={"text-2xl sm:text-4xl"}
            weight="font-semibold"
            className="mb-5 mt-10"
          >
            VSA (Virtual Secure Archive)
          </Heading>
          <Text>
            <p>
              With the rise of digital products and services, more people risk
              losing access to their online assets after death. VSA is a
              platform that addresses this challenge by offering a universal
              solution to manage and pass on digital possessions like crypto
              wallets or social media accounts.
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
          </Text>
        </div>
      </div>
      <Footer />
    </>
  );
}
