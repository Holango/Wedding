import Intro from './Intro';


function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '2rem',
      fontSize: '2rem'
    }}>
      <div>💌 메인페이지</div>
      <Intro />
    </div>
  );
}

export default App;
