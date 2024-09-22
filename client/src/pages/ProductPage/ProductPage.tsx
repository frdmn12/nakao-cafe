import ProductCard from "./components/ProductCard";
import { listProducts } from "../../utils";

const ProductPage = () => {
  // get one data
  const product = listProducts[0];
  console.log(product);

  return (
    <div className="mb-56 flex justify-center gap-5">
      <section className="flex flex-col text-center gap-5">
        <img src={product.image2} className="w-[45rem]" alt="" />
        <p className="text-4xl font-bold">Rp. {product.price}</p>
        <p>{product.description}</p>
        <div className="flex gap-1 justify-center items-center">
          <div className="flex items-center gap-2 mx-3">
            <button className="px-5 py-2  border-2 border-accent  font-bold text-accent rounded-2xl">
              +
            </button>
            <p>1</p>
            <button className="px-5 py-2  border-2 border-accent  font-bold text-accent rounded-2xl">
              -
            </button>
          </div>
          <button className="px-5 py-3 bg-[#3F72AF] font-bold text-white rounded-2xl">
            Add to Cart
          </button>
        </div>
      </section>

      <section className="m-20">
        <div className="flex flex-col gap-16  justify-center">
          {listProducts.map((item) => (
            <ProductCard
              caption={item.caption}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default ProductPage;
