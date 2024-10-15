import ProductCard from "./components/ProductCard";
import { listProducts } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { getProductById, getProducts } from "../../features/ProductSlice";

const ProductPage = () => {
  // get one data
  const product = listProducts[0];

  const dispatch = useDispatch<AppDispatch>();
  
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>({});

  const setFirstSelectedProduct = async () => {
    const data = await dispatch(getProductById(7)).unwrap();
    setSelectedProduct(data.data);
  }
  
  useEffect(() => {
    fetchProducts();
    setFirstSelectedProduct();
    
  }, []);
  
  console.log(products);
  const fetchProducts = async () => {
    const data = await dispatch(getProducts()).unwrap();
    setProducts(data.data);
  }

  const handleChangeShow = async (id: number) => {
    const data = await dispatch(getProductById(id)).unwrap();
    setSelectedProduct(data.data);
  };
  

  return (
    <div className="mb-56 flex justify-center gap-5">
      <section className="flex flex-col text-center gap-5">
        <img src={product.image2} className="w-[45rem]" alt="" />
        <p className="text-4xl font-bold">Rp. {selectedProduct.price}</p>
        <p>{selectedProduct.description}</p>
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
        <div className="flex flex-col gap-16  justify-center hover:cursor-pointer">
          {products.map((item) => (
            <div onClick={() => handleChangeShow(item.id)}>
              <ProductCard
                caption={"smooth"}
                image={item.image}
                name={item.name}
                key={item.id}
                active={selectedProduct.id === item.id ? true : false}
              />
            </div>
          ))}
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default ProductPage;
