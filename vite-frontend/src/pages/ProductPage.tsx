import styles from "../styles/productPage.module.scss";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../components/Rating/Rating";
import ProductImage from "../components/ProductImage/ProductImage";
import { useGetSingleProductQuery } from "../slices/productsApiSlice";
import Spinner from "../components/Spinner/Spinner";

const ProductPage: FC = () => {
  const { id: productId } = useParams();

  if (!productId) {
    return <div>Product Not Found</div>;
  }
  const {
    data: product,
    isLoading,
    error,
  } = useGetSingleProductQuery(productId);

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);
      return <div>{errMsg}</div>;
    }
  }

  return (
    <main className={`main  ${styles.productPage}`}>
      <div className="container">
        <section>
          <Link to="/" className={styles.back}>
            <button className={`btn ${styles.btnLight}`}>Go Back</button>
          </Link>
          <div className={styles.flex}>
            {isLoading ? (
              <Spinner />
            ) : product ? (
              <>
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
                      <p>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </p>
                    </div>
                    {product.countInStock > 0 && (
                      <div className={styles.item}>
                        <p className={styles.col}>Qty:</p>
                        <div className={styles.select}>
                          <select name="qty" id="qty">
                            {product &&
                              Array.from(
                                { length: product.countInStock },
                                (_, i) => i + 1
                              ).map((x) => (
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
                        className={
                          product.countInStock > 0
                            ? "btn btn-add"
                            : "btn btn-disabled"
                        }
                        disabled={product.countInStock === 0}
                        type="button"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <h2>Product Not Found</h2>
            )}
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

export default ProductPage;
