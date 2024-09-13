import TextReveal from "../magicui/text-reveal";

const HeroReveal = () => {
  return (
    <>
      <div className="z-10 flex min-h-[16rem] items-center justify-center bg-transparent dark:bg-black">
        <TextReveal
          text="Dari kebun kopi langsung ke cangkir Anda. Setiap biji melewati proses seleksi yang ketat untuk
        menjaga kualitas terbaik."
        />
      </div>
    </>
  );
};

export default HeroReveal;
