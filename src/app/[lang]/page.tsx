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
        <div className="flex w-full h-full">
          <Heading
            size={"text-5xl/14"}
            capitalize={false}
            weight="font-semibold"
            className="mt-[12rem] ml-[13rem] z-1 text-shadow-sm"
          >
            Hi, I'm Markus.
            <br />
            Let's turn your <span className="text-highlight">idea</span>
            <br />
            into <span className="text-highlight">reality</span>.
          </Heading>
        </div>
        <img
          src="/images/waves.svg"
          alt="waves"
          className="absolute bottom-0 left-0 w-full h-[20rem]"
          style={{ objectFit: "fill" }}
        />
      </div>
      <div className="h-[10rem] bg-primary"></div>
      <img
        src="/images/waves_end.svg"
        alt="waves2"
        className="mt-[-1px] w-full"
      />
      <ElevatorPitch />
      <Footer />
    </>
  );
}
