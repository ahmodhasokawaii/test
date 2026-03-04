const express = require("express");
const app = express();

app.set("trust proxy", true);

app.get("/", (req, res) => {
    let userIP = req.ip;

    // Convert ::ffff:127.0.0.1 style IPv4 to normal
    if (userIP.startsWith("::ffff:")) {
        userIP = userIP.replace("::ffff:", "");
    }

    console.log("Visitor IPv4:", userIP);
    res.send("ur done for nigga: " + userIP);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);

});
