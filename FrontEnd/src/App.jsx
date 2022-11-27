import style from "./Style/App.module.css"
import axios from "axios"

function App() {
  
  function enviar() {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const faculdade = document.getElementById('faculdade').value;
    const curso = document.getElementById('curso').value;
 
    const aviso = document.getElementById('aviso')
 
    if(nome == "" && email == "" && telefone == "" && faculdade == "" && curso == "") {
     aviso.innerText = 'Não pode haver campos em branco'
    }
    else {
      aviso.innerText = 'Enviado com sucesso'
    axios.post("http://localhost:3001/register", {
      nome: nome,
      email: email,
      telefone: telefone,
      faculdade: faculdade,
      curso: curso
    }).then((response) => {
      console.log(response)
      })
    } 
  }
  
  return (
    <>
    <p id="aviso" className={style.aviso}></p>
  <div className={style.grid}>
   <div className={style.container}>   
    <div>
      <input type="text" id="nome" placeholder="Nome"/>
    </div>
    <div>
      <input type="text" id="email" placeholder="E-mail"/>
    </div>
    <div>
      <input type="text" id="telefone" placeholder="Telefone"/>
    </div>
    <div>
      <input type="text" id="faculdade" placeholder="Faculdade"/>
    </div>
    <div>
      <input type="text"  id="curso" placeholder="Curso"/>
    </div>
      <div className={style.butao}>
        <button onClick={enviar}>Enviar</button>
      </div>
   </div>
   
   <div className={style.imagem}>
   </div>
  </div>
  </>
  );
}

export default App;
