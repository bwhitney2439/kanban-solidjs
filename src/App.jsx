import { createEffect, createSignal } from "solid-js";
import { createMutable } from "solid-js/store";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AppShell from "./components/AppShell";
import Main from "./components/Main";
import ShowSidebarIcon from "./components/Icons/ShowSidebarIcon";
import Modals from "./components/Modals";
import { appManager } from "./context/AppContext";
import { activeModal } from "./context/ModalsManager";

const getInitialState = () => {
  if (
    window.localStorage.darkTheme === "dark" ||
    (!("darkTheme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return true;
  } else {
    return false;
  }
};
export const [toggleSidebar, settoggleSidebar] = createSignal(false);

export const theme = createMutable({
  isDarkTheme: getInitialState(),
  toggleTheme() {
    this.isDarkTheme = window.localStorage.darkTheme === "dark" ? true : false;
    window.localStorage.setItem(
      "darkTheme",
      window.localStorage.darkTheme === "dark" ? "light" : "dark"
    );
  },
});

createEffect(() => {
  console.log({
    theme: theme.isDarkTheme,
    appManager: { ...appManager },
    toggleSidebar: toggleSidebar(),
    activeModal: activeModal(),
    kanBanData: appManager.kanBanData,
  });
});

function App() {
  return (
    <>
      <AppShell header={<Header />} sidebar={<Sidebar />}>
        <Main />

        <div
          onClick={() => settoggleSidebar(!toggleSidebar())}
          className="sm:flex  items-center bottom-8 pl-[18px] hover:bg-main-purple-hover rounded-r-[100px] cursor-pointer group mr-6 mt-2 w-14 h-12 bg-main-purple fixed hidden"
        >
          <ShowSidebarIcon className="fill-white" />
        </div>
      </AppShell>
      <Modals />
    </>
  );
}

export default App;
