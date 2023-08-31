import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useEffect } from "react";
import api from "./api/axiosConfig";
import { setUserDetails } from "./features/user";
import { useDispatch } from "react-redux";
import Tags from "./pages/Tags";
import AskQuestionInput from "./components/AskQuestionInput";
import Questions from "./pages/Questions";
import Question from "./pages/Question";

function App() {
    // Here itself, since we are using JWT auth, anytime someone opens the App and the user store is empty but JWT token is present in local storage, repopulate the data. But HOW? OK added an endpoint.
    const dispatch = useDispatch();

    async function getUser(token) {
        api.defaults.headers.post["Content-Type"] = "application/json";
        api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
        api.defaults.headers.post["Authorization"] = `Bearer ${token}`;
        try {
            const userResponse = await api.post("/users/me");
            const user = userResponse.data;
            dispatch(
                setUserDetails({
                    uid: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                })
            );
        } catch (e) {
            console.error(e);
            window.localStorage.removeItem("auth_token");
        }
    }

    useEffect(() => {
        const token = window.localStorage.getItem("auth_token");
        if (token != null) {
            getUser(token);
        }
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/tags" element={<Tags />} />
                    <Route path="/ask" element={<AskQuestionInput />} />
                    <Route path="/questions" element={<Questions/>}/>
                    <Route path="/questions/:id" element={<Question/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
