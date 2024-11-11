import styles from "./ItemEstoque.module.css";
import { useState } from "react";

function ProductItem({product, removeProduct}) {
    const [text, setText] = useState(product.text);

    return (
        <li className={styles.item}>
            <input
                type="text"
                value={text}
                autoFocus
            />
            <button className={styles.button} onClick={() => removeProduct(task.id)}>Remover</button>
        </li>
    )
}

export default ProductItem;