import React, { Suspense, useContext, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Drawer from "../components/Drawer/Drawer";
import Header from "../components/Header/Header";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Toast from "../components/Toast/Toast";
import { up } from "../constants";
import { ConfigContext } from "../contexts/ConfigContext";
import useToast from "../hooks/useToast";
import Loading from "../utils/Loading";

const Layout: React.FC = ({ children }) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { toastStatus, handleCloseToast } = useToast();
  const { drawerOpen } = useContext(ConfigContext);
  // Close Toast after timeout
  useEffect(() => {
    if (toastStatus?.open) {
      setTimeout(() => {
        handleCloseToast?.();
      }, 3000);
    }
  }, [handleCloseToast, toastStatus?.open]);

  // Close Drawer when switching to mobile

  // Scroll to top button config
  useEffect(() => {
    const checkScrolling = () => {
      if (window.scrollY >= 350) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener("scroll", checkScrolling);
    return () => {
      window.removeEventListener("scroll", checkScrolling);
    };
  }, []);

  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div>
          Error Boundary
          <button onClick={() => resetErrorBoundary()}>Try again</button>
          <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
        </div>
      )}
      onReset={() => {
        window.location.reload();
      }}
    >
      <ContentContainer>
        <CSSTransition
          in={toastStatus?.open}
          classNames="error-toast"
          unmountOnExit
          timeout={200}
        >
          <Toast
            text={toastStatus?.text}
            btnText="Close"
            closeFunction={() => toastStatus?.fn()}
            type={toastStatus?.type}
          />
        </CSSTransition>

        <Drawer />

        <CSSTransition
          in={showScrollToTop}
          timeout={250}
          classNames="scroll-btn"
          unmountOnExit
        >
          <ScrollToTop />
        </CSSTransition>

        <Header />

        <Suspense fallback={<Loading />}>
          <div className="body">{children}</div>
        </Suspense>
      </ContentContainer>
    </ErrorBoundary>
  );
};

export default Layout;

const ContentContainer = styled.div(
  ({ theme: { breakpoints, maxWidthLg, maxWidthMd } }) => `
  min-height: 100vh;
  .body {
    padding:0.5rem;
    margin: auto;
    ${up(breakpoints.md)}{
      padding:1rem;
      max-width:${maxWidthMd}
    }
    ${up(breakpoints.lg)}{
      max-width:${maxWidthLg}
    }
  }
  `
);
