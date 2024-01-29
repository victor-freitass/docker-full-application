import style from './App.module.css';
import { FaDocker } from "react-icons/fa";
import Form from './components/Form';

function App() {
 
  async function getUsers () {
    document.querySelector('#get').remove(); 
    
    //n está conseguindo fazer o fetch. A api n quer subir. Erro no link...
    const response = await fetch('node-container'); //link node-container
    const users = await response.json();

    const ul = document.querySelector('#list');

    if (users === null) {
      const li = document.createElement('li');
      li.innerText = 'Não há usuários ainda';
      return ul.appendChild(li);
    }
    
    users.forEach(user => {
      const li = document.createElement('li');
      li.innerText = `${user.name} | ${user.email}`; 
      ul.appendChild(li);
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Docker <FaDocker className={style.docker}/> </h1>
      </header>
      <main>
        <Form/>
        <div className={style.div} id='div'>
          <button onClick={getUsers} id="get">GET</button>
          <ul id="list"></ul>
        </div>
      </main>
      <footer>
        <p>Simple project using docker - By Victor Freitas &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
