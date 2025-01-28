

import Theamcontext from './Context API/Theamcontext';
import Toggele from './Context API/Toggele';
import Formcomponent from './Forms in React/Formcomponent';
import Aipdata from './Hooks/Aipdata';
import Counts from './Hooks/Counts';
import Usestate from './Hooks/Counts';
import FruitList from './listandkeys/FruitList';
import Userlist from './listandkeys/Userlist';

function App() {
  const App = () => {
    return (
      <ThemeProvider>
        <MainApp />
      </ThemeProvider>
    );
  };
  
  // MainApp is where the theme gets applied globally
  const MainApp = () => {
    const { theme } = useTheme();
  
    // Apply theme class to the body element for global styles
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  }  
  return (
    <div className="App">
      <h1>React Theme Toggle with Context API</h1>
      <Toggele/>
   {/* <Counts/> */}
   {/* <Aipdata/> */}
   {/* <FruitList/> */}
   {/* <Userlist/> */}
   {/* <Formcomponent/> */}
  {/* //  <Theamcontext/> */}
    </div>
  );
}

export default App;
