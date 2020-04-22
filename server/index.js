const express = require("express");
const app = express();
const PORT = 4090;
const {
    receivePublicToken,
    getTransactions
    } = require("server/controllers/controller");

app.use(express.json());
// Get the public token and exchange it for an access token
app.post("/auth/public_token", receivePublicToken);
// Get Transactions
app.get("/transactions", getTransactions);
app.listen(PORT, () => {
console.log(`Server running on ${PORT}`);
});