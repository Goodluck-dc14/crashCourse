// import React from "react";
// import Home from "./Components/Home";
// import Project from "./Components/Project/Project";
// import Body from "./Components/Project/Body/Body";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
// import { theme } from "./Components/butTheme";
// import { QueryClient, QueryClientProvider } from "react-query";

// const App = () => {
//   const queryClient = new QueryClient();
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ThemeProvider theme={theme}>
//         <Router>
//           <Project />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/body" element={<Body />} />
//           </Routes>
//         </Router>
//       </ThemeProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;

import React from "react";
import Header from "./ConsumingApi/Header";
import HomePage from "./ConsumingApi/HomePage";
import Register from "./ConsumingApi/Register";
import Create from "./ConsumingApi/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
