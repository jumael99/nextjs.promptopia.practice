import Feed from "@components/Feed";
export default function Home() {
  /*underscore meaning coming from our own css*/
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share </h1>
      <br className="max-md:hidden" />
      <span className=" head_text orange_gradient text-center">
        AI-Powered Prompts
      </span>

      <p className="desc text-center">
        Promptopia is an open source AI Prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
}
