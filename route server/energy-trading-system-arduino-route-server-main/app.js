const express = require("express")
const app = express()
const axios = require("axios")
app.use(express.json())

app.post("/api/server/v1/addUnits",async(req, res)=>{
    
    // post request to esp 32 server
    try {
        const houseNumber = req.body.houseNumber;
        const units = req.body.units;
        const postData = { units, houseNumber };
        const response = axios.post(
            'http://localhost:8180/api/esp32/v1/addUnits',
            postData
        );

        return res.json({
            success: true,
            response,
            data: req.body,
        });
    } catch (error) {
        console.log(error)
    }
    
})

app.put('/api/esp32Data/v1/update', (req, res) => {
    console.log(req.body);
    //put the data to the database to update
    return res.status(200).json({
        success: true,
        body : req.body,
        message: 'House 1 units and House 2 units updated successfully',
    });
});


app.get('/api/esp32Data/v1/update', (req, res) => {
  console.log("hit");
  return res.status(200).json({
    success: true,
    message: 'House 1 units and House 2 units updated successfully',
  });
});


app.listen(4001, (err)=>{
    if(err){
        console.log(err)
    }
    console.log("Route server listening on port 4001...!")
})