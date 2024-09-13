import SparklesText from "../magicui/sparkles-text";

const Hero = () => {
  return (
    <div className="my-10 flex flex-col justify-center items-center gap-4">
      <SparklesText text="Find Nakao" className="text-9xl" />
      <p className="px-96 text-center mb-10">
        Temukan biji kopi pilihan yang bikin setiap seduhan jadi istimewa.
        Segar, premium, dan siap buat nemenin hari-harimu.
      </p>
      <button className="px-5 py-3 bg-[#3F72AF] font-bold text-white rounded-2xl">
        <a href="#">PESAN SEKARANG!</a>
      </button>
      <h1 className="px-96 font-bold text-6xl text-center my-28 leading-tight">
        Dari 
        <span className="text-[#3F72AF]">
        {" "}
        kebun kopi langsung 
        {" "}
        </span>
        ke cangkir Anda. Setiap biji melewati proses
        seleksi yang ketat untuk menjaga
        <span className="text-[#3F72AF]">
         {" "}kualitas terbaik.
        </span>
      </h1>
    </div>
  );
};

export default Hero;
