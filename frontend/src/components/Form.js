import style from './Form.module.css';
function Form () {
    return (
        <form method="POST" action="http://localhost:3003/users"> 
            <div>
                <input
                    type="text"
                    name="name"
                    id="idname"
                    required
                    placeholder='Set your name'
                />
            </div>
            <div>
                <input 
                    type="email" 
                    name="email" 
                    id="idemail" 
                    required 
                    placeholder='Set your email'
                />
            </div>
            <br /><br />
            <input className={style.input} type="submit" value="POST" />
        </form>
    )
}

export default Form;