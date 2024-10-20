import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useEffect, useState } from "react";
import { getProductById, getProducts } from "../../features/ProductSlice";
import SelectedProduct from "./components/SelectedProduct";
import ProductList from "./components/ProductList";

const ProductPage = () => {
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
        <SelectedProduct
          id={selectedProduct.id}
          description={selectedProduct.description}
          grind_option={selectedProduct.grind_option}
          image={selectedProduct.image}
          loc_origin={selectedProduct.loc_origin}
          name={selectedProduct.name}
          price={selectedProduct.price}
          roast_level={selectedProduct.roast_level}
          stock_qty={selectedProduct.stock_qty}
          weight={selectedProduct.weight}
        />

        <ProductList
          handleChangeShow={handleChangeShow}
          productList={products}
          selectedProduct={selectedProduct}
        />
    </div>
  );
};

export default ProductPage;
