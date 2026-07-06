import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import StickyQuoteBar from "./components/StickyQuoteBar";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          {["temperature", "humidity", "thermal"].map((slug) => (
            <Route
              key={slug}
              path={`/${slug}`}
              element={
                <PageTransition>
                  <ServiceDetail slug={slug} />
                </PageTransition>
              }
            />
          ))}
          <Route
            path="*"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <StickyQuoteBar />
    </>
  );
}
