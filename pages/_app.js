import "@/styles/globals.css";
import { store } from "@/redux/store";
import { ReduxProvider } from "@/redux/StoreProvider";

export const metadata = {
  title: "vieo.io",
  description: "Artificial intelligence",
};

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

// Use Sidebar

{
  /* <Sidebar>
<Component {...pageProps} />
</Sidebar> */
}
