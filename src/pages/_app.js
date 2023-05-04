import "@/styles/globals.css";
import { PlayerContextProvider } from "@/contexts/contextPlayer";

export default function App({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <Component {...pageProps} />
    </PlayerContextProvider>
  );
}
