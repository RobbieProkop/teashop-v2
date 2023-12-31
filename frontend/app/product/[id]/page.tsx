import styles from "./productPage.module.scss";
import Link from "next/link";
import Rating from "../../components/Rating/Rating";
import ProductImage from "../../components/ProductImage/ProductImage";
import { ProductType } from "../../components/Product/Product";
import { getSingleProduct } from "../../actions/actions";
import { FC } from "react";
import { useStore } from "../../src/store";

interface ProductPageProps {
  params: { id: string };
}

const productPage: FC<ProductPageProps> = async ({ params }) => {
  const product: ProductType = await getSingleProduct(params.id);
  if (!product) return <div>Product Not Found</div>;

  // useStore.setState({
  //   name: product.name,
  //   price: product.price,
  //   countInStock: product.countInStock,
  // });

  const productInStock = product.countInStock > 0 ? true : false;

  const inStockArray = Array.from(
    { length: product.countInStock },
    (_, i) => i + 1
  );

  const addToCard = () => {
    useStore.setState({
      name: product.name,
      price: product.price,
      image: product.image[0],
      desc: product.description,
      countInStock: product.countInStock,
    });
  };

  const buttonClasses = productInStock ? "btn btn-add" : "btn btn-disabled";
  return (
    <main className={`main  ${styles.productPage}`}>
      <div className="container">
        <section>
          <Link href="/" className={styles.back}>
            <button className={`btn ${styles.btnLight}`}>Go Back</button>
          </Link>
          <div className={styles.flex}>
            <ProductImage product={product} />

            <div className={styles.info}>
              <h3>{product.name}</h3>
              <div className={styles.rating}>
                <Rating
                  value={product.rating}
                  id={product._id}
                  text={`${product.numReviews} reviews`}
                />
              </div>
              <h4>Price ${product.price}</h4>
              <p>{product.description}</p>
            </div>

            <div>
              <div className={styles.card}>
                <div className={styles.item}>
                  <p>Price:</p>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                </div>
                <div className={styles.item}>
                  <p>Status:</p>
                  <p>{productInStock ? "In Stock" : "Out of Stock"}</p>
                </div>
                {productInStock && (
                  <div className={styles.item}>
                    <p className={styles.col}>Qty:</p>
                    <div className={styles.select}>
                      <select name="qty" id="qty">
                        {inStockArray.map((x) => (
                          <option key={x} value={x}>
                            {x}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
                <div className={styles.add}>
                  <button
                    className={buttonClasses}
                    disabled={!productInStock}
                    onClick={addToCard}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.reviews} id="reviews">
          <h2>Reviews</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              modi maxime mollitia. Quaerat distinctio, sit sint minima
              similique deleniti vero nulla impedit. Corrupti obcaecati nam
              impedit enim assumenda facilis atque fugiat earum amet tenetur.
              Nobis atque unde ipsa distinctio culpa earum, recusandae quidem
              alias, ratione cum nisi impedit est qui facilis exercitationem
              odio nostrum velit voluptatem quos incidunt delectus similique
              adipisci. Nobis iure molestias eius ratione impedit autem
              similique! In doloribus omnis voluptatibus quia saepe!
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};
export default productPage;
