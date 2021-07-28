import portfolioImage from './portfolio.PNG';
import './App.css';

function App() {
  return (
    <>
      <div className="background_1"></div>
      <div className="background_1 background_2"></div>
      <div className="background_1 background_3"></div>
      <div className="content">
        <img src={portfolioImage} className="App-logo" alt="logo" />
        <h1>Ujjwal Kaushik</h1>
        <h1>SDE III</h1>
      </div>
    </>
  );
}

export default App;
