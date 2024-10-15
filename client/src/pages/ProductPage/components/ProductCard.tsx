type ProductCardProps = {
    image: string,
    name: string,
    caption: string,
    active: boolean
}


const ProductCard = ({image, name, caption, active}: ProductCardProps) => {
  // http://localhost:8080/public/images/15102024-102423-ARABICA.png

  const imgSrc = `http://localhost:8080/${image}`;

  // uppercase the first letter of the caption
  caption = caption.charAt(0).toUpperCase() + caption.slice(1);

  return (
    <div className={`rounded-lg shadow-lg flex flex-col items-center justify-end bg-destructive text-accent border w-56 text-center relative h-72 ${
      active ? 'border-2 border-accent' : ''
    } hover:border-2 hover:border-accent`}>
      <img src={imgSrc} className="w-52 h-auto absolute bottom-16" alt="product_image" />
      <div className="relative">
        <h1 className="font-bold m-2 text-2xl">{name}</h1>
        <p className="text-sm mb-5">
          {caption}
          5
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
