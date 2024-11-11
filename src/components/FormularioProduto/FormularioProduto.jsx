import styles from "./FormularioProduto.module.css";

function ProductForm({handlerAddProduct}) {
    return (
        <div className={styles.formulario}>
            <label className={styles.label} htmlFor={styles.input}>Nome do Produto:</label>
            <input
            className={styles.input}
            type = "text"
            id = {styles.input}
            />
            <label className={styles.label} htmlFor={styles.input}>Quantidade em Estoque:</label>
            <input
            className={styles.input}
            type = "text"
            id = {styles.input}
            />
            <label className={styles.label} htmlFor={styles.input}>Valor de Compra:</label>
            <input
            className={styles.input}
            type = "text"
            id = {styles.input}
            />
            <label className={styles.label} htmlFor={styles.input}>Valor de Venda:</label>
            <input
            className={styles.input}
            type = "text"
            id = {styles.input}
            />
            <button
            className={styles.botao}
            onClick={(e) => {
                const input = document.getElementById(styles.input).value.trim()
                if (input) {
                    handlerAddProduct(input)
                } else {
                    window.alert("O input não pode ser null");
                }
            }}>Adicionar</button>
        </div>
    );
}

export default ProductForm;