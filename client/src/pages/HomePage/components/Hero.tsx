import WordRotate from "../../../components/magicui/word-rotate";
import { listProducts } from "../../../utils";

const Hero = () => {
  return (
    <section className="my-10 flex flex-col justify-center items-center gap-2">
      {/* <SparklesText text="Find Nakao" className="text-9xl" /> */}
      <div className="flex flex-row text-center items-center">
        <WordRotate
          className="font-obviously text-[10rem]"
          words={["DRINK", "BEANS"]}
        />
        <h1 className="font-obviously text-[10rem] ml-5">{" "} AT NAKO</h1>
      </div>
      <p className="px-96 text-center mb-5">
        Temukan biji kopi pilihan yang bikin setiap seduhan jadi istimewa.
        Segar, premium, dan siap buat nemenin hari-harimu.
      </p>
      <div>
        <ul className="flex">
          {listProducts.map((product) => (
            <li key={product.id} className={product.id % 2 !== 0 ? 'mt-9' : ''}>
              <img src={product.image} className={`object-cover w-80`} alt={product.name} />
            </li>
          ))}
        </ul>
      </div>
      <button className="px-5 py-3 bg-[#3F72AF] font-bold text-white rounded-2xl">
        <a href="#">PESAN SEKARANG!</a>
      </button>
    </section>
  );
};

export default Hero;
