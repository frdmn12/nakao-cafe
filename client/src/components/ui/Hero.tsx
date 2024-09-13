import SparklesText from "../magicui/sparkles-text";
import WordRotate from "../magicui/word-rotate";

const Hero = () => {
  return (
    <div className="my-10 flex flex-col justify-center items-center gap-2">
      {/* <SparklesText text="Find Nakao" className="text-9xl" /> */}
      <div className="flex flex-row text-center items-center">
        <WordRotate
          className="font-obviously text-[12rem]"
          words={["DRINK", "BEANS"]}
        />
        <h1 className="font-obviously text-[12rem] ml-2">{" "} AT NAKO</h1>
      </div>
      <p className="px-96 text-center mb-10">
        Temukan biji kopi pilihan yang bikin setiap seduhan jadi istimewa.
        Segar, premium, dan siap buat nemenin hari-harimu.
      </p>
      <button className="px-5 py-3 bg-[#3F72AF] font-bold text-white rounded-2xl">
        <a href="#">PESAN SEKARANG!</a>
      </button>
    </div>
  );
};

export default Hero;
