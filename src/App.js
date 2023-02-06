import React, { Component } from "react";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import "./AppStyle.scss";
import Managed from "./Components/Managed/Managed";
import EmployersList from "./Components/EmployersList/EmployersList";

// function App() {
//   return (
//     <>
//       <div className="wrapper">
//         <div className="wrapper__container">
//           <ServicesSection />;
//           <Managed />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Liza", salary: 10000, id: 1 },
        { name: "Ivahnenko", salary: 20000, id: 2 },
        { name: "Vadim", salary: 30000, id: 3 },
      ],
    };
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="wrapper__container">
            <ServicesSection />;
            <Managed />
            <EmployersList data={this.state.data} onDelete={this.deleteItem} />
          </div>
        </div>
      </>
    );
  }
}
