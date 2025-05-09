import { productFeaturesData } from "../../data/products-features";

export function ProductsFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 [&_h3]:text-yellow-300 [&_h3]:mb-3 [&_h3]:md:mb-5 gap-10 md:gap-12">
      {productFeaturesData.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: product.description.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      ))}
    </div>
  );
}
