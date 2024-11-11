import styles from "./ListaEstoque.module.css"
import ProductItem from "../ItemEstoque/ItemEstoque.jsx"; 

function ProductList({products, toggleComplete, removeTask}) {
    console.log(products);

    return (
        <div className={styles.listaEstoque}>
            <h2 className={styles.listaEstoque}>Estoque Atual</h2>
            <ul>
                {products.map((product) => {                    
                    return <ProductItem key={product.id} product={product} removeTask={removeTask}/>;
                    }
                )}
            </ul>
        </div>
    );
}

export default ProductList;