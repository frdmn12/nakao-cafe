import ProductCard from "./ProductCard"

type ProductListProps = {
    handleChangeShow: (id: number) => void,
    productList: any[],
    selectedProduct: any
}

const ProductList = ({handleChangeShow, productList, selectedProduct} : ProductListProps) => {
    const handleChange = (id: number) => {
        // handle change
        handleChangeShow(id)
    }
    
  return (
    <section className="m-20">
        <div className="flex flex-col gap-16  justify-center hover:cursor-pointer">
          {productList.map((item): any => (
            <div onClick={() => handleChange(   item.id)} key={item.id}>
              <ProductCard
                caption={item.roast_level}
                image={item.image}
                name={item.name}
                active={selectedProduct.id === item.id ? true : false}
              />
            </div>  
          ))}
        </div>
      </section>
  )
}

export default ProductList