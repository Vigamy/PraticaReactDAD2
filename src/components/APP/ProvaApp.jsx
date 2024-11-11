import styles from "./App.module.css";
import FormularioProduto from "../FormularioProduto/FormularioProduto.jsx";
import ListaEstoque from "../ListaEstoque/ListaEstoque.jsx";
import { useState } from "react";

function ProvaApp() {
    const [products, setProduct] = useState([]);

    const handlerAddProduct = (text) => {
        setProduct([...products, {
            id: Date.now(),
            text,
            concluida: false
        }])
    }

    const removeProduct = (productId) => {
        setProduct(
            products.filter((Product) => Product.id !== productId)
        )
    }

    return (
        <div>
            <h1 className={styles.titulo}>Gerenciador de Estoque</h1>
            <h2 className={styles.caixa}>Caixa: R$ </h2>
            <FormularioProduto handlerAddProduct={handlerAddProduct}/>
            <ListaEstoque products={products} removeProduct={removeProduct}/>
        </div>
    )
}

export default ProvaApp;