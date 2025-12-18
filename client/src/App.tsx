import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import HandDrawn from "./pages/HandDrawn";
import SorrowOfAngels from "./pages/SorrowOfAngels";
import Metamorphosis from "./pages/Metamorphosis";
import SolarSynthesis from "./pages/SolarSynthesis";
import PoppyWar from "./pages/PoppyWar";
import Sewing from "./pages/Sewing";
import Digital from "./pages/Digital";
import Artwork from "./pages/Artwork";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"\\"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/hand-drawn"} component={HandDrawn} />
      <Route path={"/sorrow-of-angels"} component={SorrowOfAngels} />
      <Route path={"/metamorphosis"} component={Metamorphosis} />
      <Route path={"/solar-synthesis"} component={SolarSynthesis} />
      <Route path={"/the-poppy-war"} component={PoppyWar} />
      <Route path={"/sewing"} component={Sewing} />
      <Route path={"/digital"} component={Digital} />
      <Route path={"/artwork"} component={Artwork} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
