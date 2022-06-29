import React from "react";
import Navbar from "../../components/header/Header";
import Crypto from "../../components/crypto-table/Crypto";

function Home() {
  return (
    <div>
      <Navbar />
      <Crypto />
    </div>
  );
}

export default Home;
