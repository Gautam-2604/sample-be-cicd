import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.json({message:"This is Home Page"})
})

app.get("/things-to-buy", (req, res) => {
    const thingsToBuy = [
        "Milk",
        "Bread",
        "Eggs",
        "Fruits",
        "Vegetables"
    ];
    res.json({ items: thingsToBuy });
});

app.listen(3000)