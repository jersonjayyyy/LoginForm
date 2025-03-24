const AuthService = {
  signup: (username, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check user if exists
    if (users.find((user) => user.email === email || user.username === username)) {
      return { success: false, message: "User already exists!" };
    }

    // mag add user
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true, message: "Signup successful! Please login." };
  },

  login: (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    console.log("Stored users:", users); // debug sa output

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      console.log("Login successful for:", username);
      return { success: true };
    }

    console.error("Login failed: Invalid credentials");
    return { success: false, message: "Invalid credentials" };
  },

  logout: () => {
    localStorage.removeItem("loggedInUser");
    console.log("User logged out successfully");
    return { success: true };
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("loggedInUser");
  },
};

export default AuthService;