function validatePassword(password) {
    const missing = [];
    if (!/[A-Z]/.test(password)) missing.push("1 uppercase letter");
    if (!/\d/.test(password)) missing.push("1 number");
    if (!/[@$!%*?&]/.test(password)) missing.push("1 special character");
  
    return missing.length > 0 ? `⚠ Please include at least ${missing.join(", ")}.` : "";
  }
  
  export default validatePassword;
  