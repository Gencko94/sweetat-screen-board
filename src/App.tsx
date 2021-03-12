import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import ScrollToTopOnMount from './utils/ScrollToTopOnMount';
import { Suspense } from 'react';
import Loading from './utils/Loading';
import GlobalStyle from './globalStyles';
import ThemeProvider from './contexts/ThemeContext';
import './styles/transitions.css';
const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Router>
            <GlobalStyle />
            <ScrollToTopOnMount />
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
