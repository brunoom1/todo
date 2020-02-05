module.exports = (password) => /[a-z]/.test(password) && /[0-9]/.test(password) && /[A-Z]/.test(password);
