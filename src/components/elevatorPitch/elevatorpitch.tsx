import Heading from "@/components/miscellaneous/heading";
import ContactButton from "../contactButton/contactbutton";

const ElevatorPitch = () => {
  return (
    <div className="flex w-full justify-center mt-[5rem] mb-[10rem]">
      <div className="flex flex-col w-11/12 sm:w-4/5">
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 sm:pr-[2rem]">
            <Heading size="text-4xl">Introduction</Heading>
            <p className="mt-5 mb-5 text-lg/snug font-medium sm:text-xl sm:font-semibold">
              I’m a data scientist and software developer with a passion for
              building <span className="text-highlight">AI</span> that solves
              real-world problems—from helping emergency responders diagnose
              strokes faster to analyzing global market strategies with{" "}
              <span className="text-highlight">machine learning</span>.
              <br />
              <br /> With experience across{" "}
              <span className="text-highlight">cloud computing</span>,{" "}
              <span className="text-highlight">DevOps</span>, and{" "}
              <span className="text-highlight">cybersecurity</span>, I turn
              complex ideas into useful tools. If you're building something
              meaningful and need someone who can think technically and act
              fast—let’s talk.
            </p>
          </div>
          <div className="w-4/5 sm:w-1/2 flex items-center justify-center ml-10">
            <video width="600" height="500" controls preload="none">
              <source src="/videos/introduction.mp4" type="video/mp4" />
              {/* <track
            src="/images/introduction.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          /> */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full">
          <p className="mt-10 text-lg/snug font-medium sm:text-xl sm:font-semibold sm:w-2/3">
            Want to know more? Head over to the{" "}
            <a href="/about" className="text-highlight">
              About Me
            </a>{" "}
            page to get a better picture of who I am. You’ll find my projects
            and volunteer work under{" "}
            <a href="/work" className="text-highlight">
              Work
            </a>
            , and if you're curious about my thoughts on AI, tech, or whatever
            else I'm interested in at the time, check out the{" "}
            <a href="/articles" className="text-highlight">
              Articles
            </a>{" "}
            section—I post there regularly. And hey, don’t hesitate to reach
            out. I don’t bite. 😄
          </p>
          <div className="mt-10 sm:mt-0 flex justify-center items-center">
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorPitch;
