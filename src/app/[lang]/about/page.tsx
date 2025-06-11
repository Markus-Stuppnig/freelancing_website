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
          About
        </Heading>
        <p className="font-semibold text-2xl mt-5 text-background">
          This page is about me.
        </p>
      </div>
      <div className="flex w-full h-full justify-center">
        <div className="flex flex-col w-7/8 sm:w-4/5">
          <Heading
            size={"text-2xl sm:text-4xl"}
            weight="font-semibold"
            className="mb-5 mt-10"
          >
            My Journey
          </Heading>
          <Text>
            <p>
              I studied Computer Science at the Technologisches Gewerbemuseum
              (TGM) in Vienna, focusing on Data Science. During my time there, I
              led several projects, including:
            </p>
            <ul className="mt-5 ml-10 list-disc">
              <li>
                Digital Emergeny Physician: An AI-powered app to assist
                emergency responders in stroke diagnosis.
              </li>
              <li>
                VSA Platform: A service to help individuals manage and pass on
                their digital legacy.
              </li>
            </ul>
            <p className="mt-5">
              I also gained international experience through internships:
            </p>
            <ul className="mt-5 ml-10 list-disc">
              <li>
                Giesecke+Devrient in Dubai: Developed a platform analyzing
                competitor data using AI.
              </li>
              <li>
                Siemens in Vienna: Enhanced a network analysis tool with new
                features and visualizations.
              </li>
            </ul>
            <p className="mt-5">
              These experiences have equipped me with a diverse skill set and a
              global perspective.
            </p>
          </Text>
          <Heading
            size={"text-2xl sm:text-4xl"}
            weight="font-semibold"
            className="mb-5 mt-10"
          >
            Let's Connect
          </Heading>
          <Text>
            <p>
              If you're interested in collaborating or have a project in mind,
              feel free to reach out. I look forward to bringing your ideas to
              life with the power of AI.
            </p>
          </Text>
        </div>
      </div>
      <Footer />
    </>
  );
}
