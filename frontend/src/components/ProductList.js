import React, { useEffect } from "react";
import styles from "../assets/css/productPage.module.css";
import { getProductsAtom } from "../state-machine/services/adminproduct/getProdcuct";
import { productsAtom } from "../state-machine/models/product";
import ProductCard from "./ProductCard";
import { useAtom } from "jotai";
const ProductList = () => {
    const [, getProducts] = useAtom(getProductsAtom);
    const [products] = useAtom(productsAtom);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className={styles.productListContainer}>
            {products?.map((item, index) => {
                return (
                    <ProductCard
                        productName={item.name}
                        description={item.description}
                        price={item.price}
                        _id={item._id}
                    />
                );
            })}
        </div>
    );
};

export default ProductList;
