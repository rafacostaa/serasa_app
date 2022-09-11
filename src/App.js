import React from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ContainerCard from "./components/ContainerCard/ContainerCard";
import "./App.css";
import "./components/main.scss";

function App() {
  // const score = Math.floor(Math.random() * 100) + 1;
  // (score < 30){
  // CardSecondary e fazer map das dívidas
  // }
  // (score 31 a 60){
  // CardSecondary com créditos
  // }
  // (score > 50){
  // CardSecondary  proteção RG
  // }
  // (score > 90){
  // CardSecondary  proteção RG com desconto
  // }

  return (
    <div className="App">
      <header className="App-header">
        <ProfileCard />
        <div className="container">
          <ContainerCard />
        </div>
      </header>
    </div>
  );
}

export default App;
