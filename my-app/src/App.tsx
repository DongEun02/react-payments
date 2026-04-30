import { ThemeProvider } from '@emotion/react';
import RegisterCard from './pages/RegisterCard';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RegisterCard />
    </ThemeProvider>
  );
}

export default App;
