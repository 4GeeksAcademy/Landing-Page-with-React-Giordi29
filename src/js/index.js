import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Jumbotron.jsx";
import Card from "./component/Card.jsx";
import Footer from "./component/Footer.jsx"
import Home from "./component/Home.jsx";
import "../styles/index.css";

const App = () => {
    return (
      <div>
        <Navbar />
        
        <Hero />
  
        <div class="container"> 
          <div class="row">
            <div class="col-md-4">
              <Card 
                title="Card 1"
                text="Lorem ipsum dolor sit amet, consectetur..."
                imageUrl="https://via.placeholder.com/300"
              />
            </div>
            <div class="col-md-4">
              <Card 
                title="Card 2"
                text="Sed ut perspiciatis unde omnis iste natus error..."
                imageUrl="https://via.placeholder.com/300"
              />
            </div>
            <div class="col-md-4">
              <Card 
                title="Card 3"
                text="Neque porro quisquam est qui dolorem ipsum quia..."
                imageUrl="https://via.placeholder.com/300"
              />
            </div>
          </div>
  
        <Footer />
        </div>

      </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;