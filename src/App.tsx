import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
// import { RouteList } from "./config/routeConfig";

function App() {
  return (
    <Router>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="/" element={<>Boilerplate Setup</>}></Route>
          {/* {RouteList.map((item, index) => {
            return (
              <Route
                key={index}
                path={item?.path}
                element={<item.component />}
              />
            );
          })} */}
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
