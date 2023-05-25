const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let alert = require('alert');
const nodemailer = require('nodemailer');
require('dotenv').config();
// require("./db/conn");
// const Player = require("./models/players");
//give port number
const port = process.env.PORT || 3000;


const conn = require("./db/conn");

const playerSchema = new conn.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullname: {
        type: String,
        required: true
    },
    batsman: {
        type: String
    },
    bowler: {
        type: String
    },
    wk: {
        type: String
    },
    other: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    team: {
        type: String
    }

}, { useFindAndModify: false });

//create collections
const Player = conn.model("Player", playerSchema);


//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

mongoose.connect("mongodb+srv://shailesh93602:Shailesh200@sportifydb.jdckl7j.mongodb.net/players");

var db = mongoose.connection;
//listen for requests
// app.listen(3000);
app.listen(port);
console.log(port);

app.get('/', (req, res) => {
    res.render('index', { title: 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact'});
});

app.get('/teams', (req, res) => {
    res.render('teams', { title: 'Teams'});
});

app.get('/players', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Get the current page from the query parameters
        const pageSize = parseInt(req.query.pageSize) || 10; // Get the page size from the query parameters

        const totalPlayers = await Player.countDocuments({}); // Get the total number of players in the database
        const totalPages = Math.ceil(totalPlayers / pageSize); // Calculate the total number of pages

        const players = await Player.find({})
            .skip((page - 1) * pageSize) // Skip the appropriate number of documents based on the page number
            .limit(pageSize); // Limit the number of documents to be fetched per page

        res.render('players', {
            title: 'Players',
            data: players,
            currentPage: page,
            totalPages: totalPages,
            pageSize: pageSize
        });
        // const data = await Player.find({});
        // res.render('players', { title: 'Players', data});
        // console.log(data);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
});

app.get('/admin', (req, res) => {
    res.render('admin', { title: 'Admin'});
});

app.get('/addteam', (req, res) => {
    const playerId = req.query.playerId;
      
    res.render("addteam", { title : "Add Team", playerId: playerId });
});

app.get('/team/team1', async function(req, res) {
    const teamName = "Team 1";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team1', { title: "Team 1", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team2', async function(req, res) {
    const teamName = "Team 2";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team2', { title: "Team 2", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team3', async function(req, res) {
    const teamName = "Team 3";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team3', { title: "Team 3", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team4', async function(req, res) {
    const teamName = "Team 4";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team4', { title: "Team 4", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team5', async function(req, res) {
    const teamName = "Team 5";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team5', { title: "Team 5", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team6', async function(req, res) {
    const teamName = "Team 6";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team6', { title: "Team 6", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team7', async function (req, res)  {
    const teamName = "Team 7";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team7', { title: "Team 7", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team8', async function(req, res) {
    const teamName = "Team 8";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team8', { title: "Team 8", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team9', async function(req, res) {
    const teamName = "Team 9";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team9', { title: "Team 9", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team10', async function(req, res) {
    const teamName = "Team 10";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team10', { title: "Team 10", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team11', async function(req, res) {
    const teamName = "Team 11";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team11', { title: "Team 11", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team12', async function(req, res) {
    const teamName = "Team 12";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team12', { title: "Team 12", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team13', async function(req, res) {
    const teamName = "Team 13";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team13', { title: "Team 13", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team14', async function(req, res) {
    const teamName = "Team 14";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team14', { title: "Team 14", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team15', async function(req, res) {
    const teamName = "Team 15";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team15', { title: "Team 15", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

app.get('/team/team16', async function(req, res) {
    const teamName = "Team 16";
    try {
        const players = await Player.find({ team: teamName }).exec();
        res.render('team/team16', { title: "Team 16", players });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error retrieving players');
    }
});

// Handle GET requests for /aplayers
app.get('/aplayers', async (req, res) => {
    var user = req.query.username;
    var pass = req.query.password;
  
    if (user === "cricketadmin@sportify" && pass === "sportifyadmin") {
      try {
        const page = parseInt(req.query.page) || 1; // Get the current page from the query parameters
        const pageSize = parseInt(req.query.pageSize) || 10; // Get the page size from the query parameters
    
        const totalPlayers = await Player.countDocuments({}); // Get the total number of players in the database
        const totalPages = Math.ceil(totalPlayers / pageSize); // Calculate the total number of pages
    
        const players = await Player.find({})
          .skip((page - 1) * pageSize) // Skip the appropriate number of documents based on the page number
          .limit(pageSize); // Limit the number of documents to be fetched per page
    
        res.render('aplayers', {
          title: 'Admin',
          data: players,
          currentPage: page,
          totalPages: totalPages,
          pageSize: pageSize
        });
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    } else {
      res.send("Invalid password");
    }
  });
  
  

app.post('/aplayers', async (req, res) => {
    var user = req.body.username;
    var pass = req.body.password;
    if(user == "cricketadmin@sportify" && pass == "sportifyadmin"){
        try {
            const page = parseInt(req.query.page) || 1; // Get the current page from the query parameters
            const pageSize = parseInt(req.query.pageSize) || 10; // Get the page size from the query parameters

            const totalPlayers = await Player.countDocuments({}); // Get the total number of players in the database
            const totalPages = Math.ceil(totalPlayers / pageSize); // Calculate the total number of pages

            const players = await Player.find({})
                .skip((page - 1) * pageSize) // Skip the appropriate number of documents based on the page number
                .limit(pageSize); // Limit the number of documents to be fetched per page

            res.render('aplayers', {
                title: 'Admin',
                data: players,
                currentPage: page,
                totalPages: totalPages,
                pageSize: pageSize
            });
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    }
    else{
        res.send("Invalid password");
    }
});


//create new user in database
app.post("/register", async (req, res) => {
    var fullname = req.body.fullname;
    // console.log(fullname);
    var phone = req.body.phone;
    // console.log(phone);
    var branch = req.body.branch;
    var semester = req.body.semester;
    var batsman = req.body.batsman;
    var bowler = req.body.bowler;
    var wk = req.body.wk;
    var other = req.body.other;
    var player = {
        "fullname": fullname,
        "phone": phone,
        "branch": branch,
        "semester": semester,
        "batsman": batsman || "none",
        "bowler": bowler || "none",
        "wk": wk || "none",
        "other": other || "none",
        "team": "none"
    }
    db.collection('players').insertOne(player, (err, collection) => {
        if(err) throw err;
        console.log("Record Inserted Successfully");
    });
    return res.redirect('players');
});



app.post('/teamval', async function(req, res) {
    try {
      const playerId = req.body.playerId;
      const teamnum = req.body.teamnum;
      const teamName = "Team " + teamnum;
      
      await Player.findOneAndUpdate(
        { _id: playerId },
        { $set: { team: teamName } }
      );
      
      const page = parseInt(req.query.page) || 1; // Get the current page from the query parameters
      const pageSize = parseInt(req.query.pageSize) || 10; // Get the page size from the query parameters
  
      // Redirect back to the same page with the same pagination settings
      res.redirect(`/aplayers?page=${page}&pageSize=${pageSize}&username=cricketadmin@sportify&password=sportifyadmin`);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });
  
  
  


// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: "sportifygec@outlook.com",
    pass: "admingec@2023"
  }
});

app.post('/contactus', (req, res) => {
  const { name, email, message } = req.body;

  // Create the email message
  const mailOptions = {
    from: 'sportifygec@outlook.com',
    to: 'shailesh93602@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.render("redirect", {title: "Sent"});
    }
  });
});