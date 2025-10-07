
import ChatPanel from "./ChatPanel";
import MainContent from "./MainPanel";
import SidebarPanel from "./SideBarPanel";

const Layout = () => {
  return (
    <div className="layout">
      <aside className="layout__sidebar">
        <SidebarPanel />
      </aside>

      <section className="layout__main">
        <MainContent src="" />
      </section>
      
      <aside className="layout__chat">
      <ChatPanel />
      </aside>
    </div>
  );
};

export default Layout;
