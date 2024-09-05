function Home() {
  return (
    <div>
      <h1 className="text-center text-3xl font-medium text-stone-700 my-10">
        The best pizza. <br />
        <span className=" text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <p className=" text-center mb-4">
        👋 Welcome! Please start by telling us your name:
      </p>
      <form className="flex justify-center">
        <input type="text" className="rounded-full py-2 px-6 outline-none border-none  focus:ring-2 ring-yellow-200" />
      </form>
    </div>
  );
}

export default Home;
