//import Counter from "./Counter";
//import MyDiv from "./MyDiv";
import MyList from "./MyList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import Details from "./Details";
import Page404 from "./Page404";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
        padding: 10,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyList />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
