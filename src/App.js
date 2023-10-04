import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userprofile from "./components/Userprofile";
import Plans from "./components/PlansAddons";
import Notification from "./components/Notifications";
import Layout from "./Layout";
import Billings from "./components/Billings";
function App() {
  return (
    <div className="main1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="userprofile" element={<Userprofile />} />
            <Route path="notifications" element={<Notification />} />
            <Route path="billings" element={<Billings />} />
            <Route path="plannings" element={<Plans />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
