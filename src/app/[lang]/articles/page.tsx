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
          Articles
        </Heading>
        <p className="font-semibold text-xl mt-5 text-background">
          This page is about my articles. WIP
        </p>
      </div>
      <Footer />
    </>
  );
}
