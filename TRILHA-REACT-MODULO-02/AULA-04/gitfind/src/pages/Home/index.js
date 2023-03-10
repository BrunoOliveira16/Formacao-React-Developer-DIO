import { Header } from '../../components/Header';
import background from '../../assets/background.png'
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="background" alt="background app"/>
        <div className="info">
            <div>
              <input name="usuario" placeholder="@username" />
              <button>Buscar</button>
            </div>
            <div className="perfil">
              <img src="https://avatars.githubusercontent.com/u/103857382?v=4" className="profile" alt="foto do usuario"/>
              <div>
                <h3>Bruno Oliveira</h3>
                <span>@usuario</span>
                <p>Descrição do meu github</p>
              </div>
            </div>
            <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
