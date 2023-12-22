import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatProvider from './context/ChatProvider';
import Stenography from "./components/stegnography/Stenography";
import Chat from "./pages/Chat";
import Authorization from "./pages/Authorization";

export default function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <Routes>
          <Route path="/auth" element={<Authorization />} />
          <Route path="/" element={<Chat />} />
          <Route path="/Stenography" element={<Stenography />} />
        </Routes>
      </ChatProvider>
    </BrowserRouter>
  );
}