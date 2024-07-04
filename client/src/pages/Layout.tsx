import { Outlet } from "react-router-dom";
import { Header, Button } from "@westpac/ui";
import VoiceAssist from "../components/VoiceAssist";

const Layout = () => {
  return (
    <>
      <Header brand="wbc" leftIcon="hamburger" />
      <main className="p-2.5">
        <Outlet></Outlet>
      </main>
      {/* <Button className="fixed bottom-6 right-4">Voice Assist</Button> */}
      <div className="fixed bottom-6 right-4">
        <VoiceAssist></VoiceAssist>
      </div>
    </>
  );
};

export default Layout;
