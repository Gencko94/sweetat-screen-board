import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "react-query";
import Home from "./pages/Home";
import ScrollToTopOnMount from "./utils/ScrollToTopOnMount";
import { Suspense } from "react";
import Loading from "./utils/Loading";
import GlobalStyle from "./globalStyles";
import ThemeProvider from "./contexts/ThemeContext";

import ErrorBoundaryComponent from "./components/ErrorBoundary/ErrorBoundaryComponent";
import { ErrorBoundary } from "react-error-boundary";
import DataProvider from "./contexts/DataContext";
import ConfigProvider from "./contexts/ConfigContext";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <ErrorBoundaryComponent
              resetErrorBoundary={resetErrorBoundary}
              error={error}
            />
          )}
          onReset={reset}
        >
          <Router>
            <Suspense fallback={<Loading />}>
              <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                  <ConfigProvider>
                    <DataProvider>
                      <GlobalStyle />
                      <ScrollToTopOnMount />
                      <Switch>
                        <Route path="/" component={Home} />
                      </Switch>
                    </DataProvider>
                  </ConfigProvider>
                </ThemeProvider>
              </QueryClientProvider>
            </Suspense>
          </Router>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default App;
