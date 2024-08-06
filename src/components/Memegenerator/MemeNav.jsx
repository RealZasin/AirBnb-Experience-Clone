import styles from "./MemeNav.module.css"
import "../../../public/memelol.png"

export default function MemeNav() {



    return (

        <div className={styles.Navbar}>
            <img src="memelol.png" className={styles.memelol} />
            <h1>Meme Generator</h1>
        </div>

    )
}