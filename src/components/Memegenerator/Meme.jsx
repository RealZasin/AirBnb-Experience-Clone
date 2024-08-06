import styles from "./MemeNav.module.css"

export default function Meme () {



    return (

        <div>
            <form className={styles.form}>
                
                <input type="text" 
                placeholder="Top Text"
                className="form-input"
                />
                
                <input type="text" 
                placeholder="Bottom Text" 
                className="form-input"
                />
                
                <button className="form-button"> 
                    Get a new MEME image
                </button>

            </form>
        </div>

    )

}