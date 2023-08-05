import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles.css";

const firebaseConfig = {
  // Your Firebase configuration object here
  apiKey: "AIzaSyD8oDcmAz1I2bb7i_SRCxlBvXvS2KQRjsc",
  authDomain: "twitter-acb56.firebaseapp.com",
  projectId: "twitter-acb56",
};
//------------------------------------------------------------------

// Initialize the Firebase app with the config object
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//------------------------------------------------------------------

const auth = firebase.auth();
const firestore = firebase.firestore();

//------------------------------------------------------------------

//------------------------------------------------------------------
//------------------------------------------------------------------

const App = () => {
  const [user] = useAuthState(auth);
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    if (user) {
      const unsubscribe = firestore
        .collection("tweets")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
          const tweetList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTweets(tweetList);
        });

      return () => unsubscribe();
    }
  }, [user]);

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add("night-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
  }, [isNightMode]);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  const handleAddTweet = async () => {
    if (tweet.trim() === "") {
      return; // Do not submit an empty tweet
    }

    if (tweet.length < 10 || tweet.length > 140) {
      alert("Tweet must be between 10 and 140 characters.");
      return; // Do not submit if the tweet length is not within the allowed range
    }

    await firestore.collection("tweets").add({
      content: tweet,
      userId: user.uid,
      userName: user.displayName,
      createdAt: new Date(),
    });
    setTweet("");
  };

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <div className={`container ${isNightMode ? "night-mode" : ""}`}>
      {!user && (
        <div className="intro">
          <h1>Welcome to Twitter 2.0 </h1>
          <p>
            Sign in to start tweeting and see what others are tweeting about!{" "}
            <br></br>
            <span>(Elon pls dont kill me.)</span>
          </p>
          <button className="btn-signin" onClick={signInWithGoogle}>
            Sign In with Google
          </button>
        </div>
      )}

      {user && (
        <>
          <header className="header">
            <h1>Twitter 2.0</h1>
            <div className="header-buttons">
              <button className="btn-github">
                <a
                  href="https://abduldavids.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </button>
              <button className="btn-night-mode" onClick={toggleNightMode}>
                {isNightMode ? (
                  <i className="fas fa-sun"></i>
                ) : (
                  <i className="fas fa-moon"></i>
                )}
              </button>
              <button className="btn-signout" onClick={signOut}>
                Sign Out
              </button>
            </div>
          </header>

          <div className="tweet-container">
            <textarea
              className="tweet-input"
              rows="3"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
              placeholder="What's happening? (140 character limit btw)"
            />
            <button className="btn-tweet" onClick={handleAddTweet}>
              Tweet
            </button>
          </div>

          <TransitionGroup>
            {tweets.map((tweet) => (
              <CSSTransition key={tweet.id} timeout={300} classNames="tweet">
                <div className="tweet">
                  <div className="tweet-content">{tweet.content}</div>

                  <div className="user-and-time">
                    <div className="tweet-user">@{tweet.userName}</div>
                    <div className="tweet-time">
                      {new Date(tweet.createdAt.toDate()).toLocaleTimeString(
                        [],
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </>
      )}
    </div>
  );
};

export default App;
