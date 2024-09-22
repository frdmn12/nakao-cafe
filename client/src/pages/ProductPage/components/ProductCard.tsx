import ARABICA from "../../../assets/images/products/ARABICA.webp";


type ProductCardProps = {
    image: string,
    name: string,
    caption: string,
}


const ProductCard = ({image, name, caption}: ProductCardProps) => {


  // uppercase the first letter of the caption
  caption = caption.charAt(0).toUpperCase() + caption.slice(1);

  return (
    <div className="rounded-lg shadow-lg flex flex-col items-center justify-end bg-destructive text-accent border hover:border-2 hover:border-accent  w-56 text-center relative h-72">
      <img src={image} className="w-52 h-auto absolute bottom-16" alt="product_image" />
      <div className="relative">
        <h1 className="font-bold m-2 text-2xl">{name}</h1>
        <p className="text-sm mb-5">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
