import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={false}>
          <Routes>
            <Route path="*" name="Home" element={<Layout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
