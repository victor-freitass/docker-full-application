import style from './App.module.css';
import { FaDocker } from "react-icons/fa";
import Form from './components/Form';

function App() {
 
  async function getUsers () {
    document.querySelector('#get').remove(); 
    
    const response = await fetch('http://localhost:3003/users'); 
    const users = await response.json();

    const ul = document.querySelector('#list');
    
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
