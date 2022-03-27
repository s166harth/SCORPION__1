import Navbar from "./common/Navbar.js";
import { client } from "./ScrapedData/apollo";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import { Home } from "./pages/Home.js";
import UserProfile from "./pages/UserProfile.js";
import { ScorpianPage } from "./pages/ScorpianPage.js";
import { Login } from "./common/Login.js";
import { SignUp } from "./common/SignUp.js";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/user-profile" element={<UserProfile />}></Route>
          <Route exact path="/scorpian-page" element={<ScorpianPage />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
