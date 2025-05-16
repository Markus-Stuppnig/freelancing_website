import Link from "next/link";

const ContactButton = () => {
  return (
    <div className="flex animate-slidein">
      <Link
        href="/contact"
        className="h-15 flex items-center justify-center bg-secondary hover:bg-highlight text-white ease-in-out duration-300 rounded-full"
      >
        <p className="rounded-full py-3 px-6 font-semibold text-lg">
          Contact 👋
        </p>
      </Link>
    </div>
  );
};

export default ContactButton;
