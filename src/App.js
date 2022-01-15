// import logo from './logo.svg';
import Instruction from './components/Instructions/Instructions';
import Marqueue from './components/Marqueue/Marqueue';
import './App.css';
let logo = 'Gardi';

// this is the fun called in onclick for 3rd li
const displayId = event => alert(event.target.id);

const emoji = [
  {
    sign: '😀',
    name: 'grinning face'
  },
  {
    sign: '🎉',
    name: 'party popper'
  },
  {
    sign: '💃',
    name: 'woman dancing'
  },
]

function App() {
  let logo = 'Gardi';
  let idtag = 'first-id';
  return (
    <div className='container'>
      <h2 className='heading-txt' id={idtag}> Hello, Rupesh {logo}! </h2>
      {/* <p>instruction component</p> */}
      <Instruction></Instruction>
      <Marqueue></Marqueue>
      <ul>
        {
          emoji.map(e => (
            <li key={e.name}>
              <button onClick={displayId}>
                <span role="img" aria-label={e.name}
                  id={e.name}>{e.sign}</span>
              </button>
            </li>
          ))
        }
      </ul>

      {/* <ul>
        <li>
          <button onClick={event=>alert('helllo')}>
            <span role="img" aria-label="grinning face" id="g">X</span>
          </button>
        </li>
        <li>
          <button onClick={event=>alert(event.target.id)}>
            <span role="img" aria-label="party popper" id="pa">X</span>
          </button>
        </li>
        <li>
          <button onClick={displayId}>
            <span role="img" aria-label="woman dancing" id="w">X</span>
          </button>
        </li>
      </ul> */}

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
