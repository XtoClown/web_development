import express from 'express';
import passport from 'passport';
import steamStrategy from 'passport-steam';
import session from 'express-session';
import cors from 'cors';
import axios from 'axios';

passport.use(new steamStrategy({
    returnURL: 'http://localhost:5000/verify',
    realm: 'http://localhost:5000/',
    apiKey: ''
}, (identifier, profile, done) => {
    return done(null, profile); 
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

const app = express();

app.use(session({
    secret: 'mySuperSecret123',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
}));

app.get('/authenticate', passport.authenticate('steam'));

app.get('/verify', passport.authenticate('steam', { failureRedirect: '/' }), (req, res) => {
    req.session.user = req.user;
    res.redirect('http://localhost:3000/');
});

app.get('/user', (req, res) => {
    if (req.session.user) {
        res.json(req.session.user); 
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});

app.get('/logout', (req, res) => {
  req.logout((err) => {  
      if (err) {
          console.error('Logout error:', err);
          return res.status(500).send('Logout failed');
      }
      req.session.destroy((err) => {  
          if (err) {
              console.error('Session destruction error:', err);
              return res.status(500).send('Session destruction failed');
          }
          res.clearCookie('connect.sid');  
          res.status(200).send('Logged out');  
      });
  });
});

const url = "https://api.currencyapi.com/v3/latest";
const token = "" //"cur_live_abNNuJ9iX8hHZsRrAoQeT1j4V8NAuOrTmbiW3UmG";

app.get('/currency', async (req, res) => {
    try {
        const response = await axios.get(`${url}?apikey=${token}&currencies=USD,UAH,EUR,GBP`);
        res.json(response.data); 
    } catch (error) {
        res.status(500).send('Currency Error');
    }
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
