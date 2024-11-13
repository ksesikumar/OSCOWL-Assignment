import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
    setTodoList(savedTodoList);

    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true); 
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("authToken", token); 
    setIsAuthenticated(true); 
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    setIsAuthenticated(false); 
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/todo" /> : <Navigate to="/register" />}
          />
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/todo" /> : <Register />}
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/todo" /> : <Login handleLogin={handleLogin} />}
          />

          <Route
            path="/todo"
            element={isAuthenticated ? (
              <div className="todos-bg-container">
                <div className="container">
                  <button onClick={handleLogout} className="logoutButton">Logout</button>
                  <TodoList todoList={todoList} setTodoList={setTodoList} />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
