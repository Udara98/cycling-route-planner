import './App.css';
import Home from './scenes/Home/Home';
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
