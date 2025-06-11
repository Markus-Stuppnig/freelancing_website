import Heading from "@/components/miscellaneous/heading";
import ContactButton from "../contactButton/contactbutton";
import Text from "@/components/miscellaneous/text";
import { Container } from "postcss";

const ElevatorPitch = () => {
  return (
    <>
      <div className="flex w-full justify-center mt-[5rem]">
        <div className="flex flex-col sm:flex-row w-7/8 sm:w-4/5">
          <div className="w-full sm:w-1/2 sm:pr-[2rem]">
            <Heading size="text-4xl mb-5">Introduction</Heading>
            <Text>
              <p className="mb-10">
                I build intelligent, fully automated marketing systems using
                tools like n8n, Zapier, Make.com, Python, and LLM chatbots—so
                your business can generate more leads, book more meetings, and
                scale without limits.
              </p>
              <ContactButton />
            </Text>
          </div>
          {/* <div className="w-4/5 sm:w-1/2 my-5 flex items-center justify-center ml-10">
            <video width="600" height="500" controls preload="none">
              <source src="/videos/introduction.mp4" type="video/mp4" />
              {/* <track
            src="/images/introduction.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          /> }
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
      </div>
      <div className="mt-10 flex w-full h-full justify-center">
        <div className="flex flex-col w-7/8 sm:w-4/5">
          <Heading
            size={"text-2xl sm:text-4xl"}
            weight="font-semibold"
            className="mb-5"
          >
            What I do
          </Heading>
          <Text>
            <p>Modern Marketing Meets Smart Automation</p>
            <p>
              You're great at what you do—but you're wasting time on manual lead
              gen, appointment booking, and follow-ups. I build custom
              automation systems that do all of that for you.
            </p>
            <p>I combine:</p>
            <table className="mt-10 min-w-full table-auto border-collapse border border-gray-300 text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    What I Offer
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    What You Get
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    AI-powered chatbots (ChatGPT, LangChain)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Get high-quality leads automatically
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Workflow automation (n8n, Zapier, Make.com)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Book sales calls without lifting a finger
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    API integrations & Python development
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Follow up via email, chat, and SMS—automated
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    CRM, calendar, and email/sms sync
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Focus on closing, not chasing
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Ad campaigns that auto-qualify leads
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Consistent pipeline of ready-to-buy leads
                  </td>
                </tr>
              </tbody>
            </table>
          </Text>
          <Heading
            size={"text-2xl sm:text-4xl"}
            weight="font-semibold"
            className="mb-5 mt-10"
          >
            How It Works
          </Heading>
          <Text>
            <ol className="list-decimal ml-10">
              <li className="mb-2">
                Strategy Workshop
                <br />I map your business needs and sales journey
              </li>
              <li className="mb-2">
                Custom Build
                <br />I design and implement your automation system
              </li>
              <li>
                Launch + Optimize
                <br />I test, adjust, and monitor your system to perform at its
                best
              </li>
            </ol>
          </Text>
          <Heading
            size={"text-2xl sm:text-4xl"}
            weight="font-semibold"
            className="mb-5 mt-10"
          >
            Tools I Use
          </Heading>
          <Text>
            <p>
              I'm tool-agnostic, and I integrate with whatever tech stack works
              best for you:
            </p>
            <ul className="mt-5 list-disc ml-10">
              <li>n8n, Zapier, Make.com</li>
              <li>Calendly, YouCanBook.me, Zoom</li>
              <li>Twilio, SendGrid, Mailchimp</li>
              <li>Landbot, ManyChat, OpenAI</li>
              <li>AWS, GCP, Azure, SQL/NoSQL</li>
              <li>Metabase, CRM platforms, Custom Dashboards</li>
            </ul>
          </Text>
          <Heading
            size={"text-2xl sm:text-4xl"}
            weight="font-semibold"
            className="mb-5 mt-10"
          >
            Get a Fully Automated Client Engine
          </Heading>
          <Text>
            <p>
              Let me handle the complexity—so you can focus on growth. Whether
              you're a solo consultant or a growing team, I'll create a system
              tailored to your goals.
            </p>
          </Text>
          <Heading
            size={"text-2xl sm:text-4xl"}
            weight="font-semibold"
            className="mb-5 mt-10"
          >
            Let’s Build Your Automation Stack
          </Heading>
          <Text>
            <p>
              This doesn't just save time - these systems bring in new clients
              while you sleep.
            </p>
          </Text>
        </div>
      </div>
    </>
  );
};

export default ElevatorPitch;
