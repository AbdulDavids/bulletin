import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { format, startOfDay, subDays } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import ChangeLog from "./ChangeLog";

const firebaseConfig = {
  // Your Firebase configuration object here
  apiKey: "AIzaSyD8oDcmAz1I2bb7i_SRCxlBvXvS2KQRjsc",
  authDomain: "twitter-acb56.firebaseapp.com",
  projectId: "twitter-acb56"
};

// Initialize the Firebase app with the config object
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

// Component for displaying each tweet
function TweetCard({ tweet, isCurrentUser }) {
  const [reportedUsers, setReportedUsers] = useState([]);

  useEffect(() => {
    // Get the list of reported users for this tweet
    const getReportedUsers = async () => {
      try {
        const tweetDoc = await firestore.collection("tweets").doc(tweet.id).get();
        const data = tweetDoc.data();
        setReportedUsers(data.reportedUsers || []);
      } catch (error) {
        console.error("Error getting reported users:", error);
      }
    };

    getReportedUsers();
  }, [tweet]);

  function handleDeleteTweet(tweetId) {
    try {
      firestore.collection("tweets").doc(tweetId).delete();
    } catch (error) {
      console.error("Error deleting tweet:", error);
    }
  }

  function handleReportTweet(tweetId) {
    try {
      // Check if the current user has already reported this tweet
      if (!reportedUsers.includes(auth.currentUser.uid)) {
        const updatedReportedUsers = [...reportedUsers, auth.currentUser.uid];
        firestore.collection("tweets").doc(tweetId).update({
          reportedUsers: updatedReportedUsers,
        });

        // If the tweet has been reported by 3 different users, delete it
        if (updatedReportedUsers.length >= 3) {
          handleDeleteTweet(tweetId);
        }
      }
    } catch (error) {
      console.error("Error reporting tweet:", error);
    }
  }

  return (
    <div className="tweet">
      <div className="tweet-content">{tweet.content}</div>
      <div className="user-and-time">
        <div className="tweet-user">- @{tweet.userName}</div>
        <div className="tweet-menu">
          {isCurrentUser && (
            <button
              className="tweet-menu-button"
              onClick={() => handleDeleteTweet(tweet.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          )}
          <button
            className="tweet-menu-button"
            onClick={() => handleReportTweet(tweet.id)}
          >
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </button>
        </div>
        <div className="tweet-time">
          {new Date(tweet.createdAt.toDate()).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}














function App() {
  const [user] = useAuthState(auth);
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [isNightMode, setIsNightMode] = useState(false);
  const [showFullUsername, setShowFullUsername] = useState(true);

  useEffect(() => {
    // Check and delete tweets created the day before (SAST time) on page load
    if (user) {
      const sastTimezone = "Africa/Johannesburg"; // Set the SAST timezone
      const todaySast = startOfDay(new Date());
      const yesterdaySast = subDays(todaySast, 1);
      const yesterdaySastString = format(yesterdaySast, "yyyy-MM-dd", {
        timeZone: sastTimezone,
      });

      firestore.collection("tweets").onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const tweet = doc.data();
          const createdAtSast = format(tweet.createdAt.toDate(), "yyyy-MM-dd", {
            timeZone: sastTimezone,
          });
          if (createdAtSast === yesterdaySastString) {
            firestore.collection("tweets").doc(doc.id).delete();
          }
        });
      });
    }
  }, [user]);

  useEffect(() => {
    // Load tweets when the user is authenticated
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
    // Apply night mode when the state changes
    if (isNightMode) {
      document.body.classList.add("night-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
  }, [isNightMode]);

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  function signOut() {
    auth.signOut();
  }

  function handleAddTweet() {
    if (tweet.trim() === "") {
      return;
    }

    if (tweet.length < 15 || tweet.length > 200) {
      alert("Tweet must be between 15 and 200 characters.");
      return;
    }

    let userName = user.displayName;
    if (!showFullUsername && userName) {
      // Get initials if showFullUsername is false
      const initials = userName
        .split(" ")
        .map((name) => name.charAt(0))
        .join("");
      userName = initials.toUpperCase();
    }

    firestore.collection("tweets").add({
      content: tweet,
      userId: user.uid,
      userName,
      createdAt: new Date(),
      reportedUsers: [], // Initialize reportedUsers array to track reports
    });
    setTweet("");
  }

  function toggleNightMode() {
    setIsNightMode((prevMode) => !prevMode);
  }

  return (
    <div className={`container ${isNightMode ? "night-mode" : ""}`}>
      {!user && (
        <div className="intro">
          <div className="title-logo">
            <FontAwesomeIcon icon={faTwitter} className="twitter-logo" />
            <h1>Welcome to Twitter 2.0</h1>
          </div>
          <p>
            Sign in to start tweeting and see what others are tweeting about!{" "}
            <br />
            <span>(Note: Tweets are now auto-deleted every 48 hours)</span>
          </p>
          <button className="btn-signin" onClick={signInWithGoogle}>
            Sign In with Google
          </button>
          <div className="change-log-container">
            <ChangeLog />
          </div>
        </div>
      )}

      {user && (
        <>
          <header className="header">
            <div className="title-logo">
              <FontAwesomeIcon
                icon={faTwitter}
                className={`twitter-logo ${isNightMode ? "night-mode" : ""}`}
              />
              <h1>Twitter 2.0</h1>
            </div>
            <div className="header-buttons">
              <button className="btn-night-mode" onClick={toggleNightMode}>
                {isNightMode ? (
                  <i className="fas fa-sun"></i>
                ) : (
                  <i className="fas fa-moon"></i>
                )}
              </button>
              {/*<button className="btn-github" onClick={handleGitHubLink}>
                <i className="fab fa-github"></i>
              </button> */}
              <button className="btn-signout" onClick={signOut}>
                <i className="fas fa-sign-out-alt"></i>
              </button>
            </div>
          </header>

          <div className="tweet-container">
            <textarea
              className="tweet-input"
              placeholder="What's happening? (200 character limit btw)"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            />
            <div className="tweet-box">
              <div className="tweet-options">
                <button className="btn-tweet" onClick={handleAddTweet}>
                  Tweet
                </button>
                <label className="tweet-checkbox">
                  <input
                    type="checkbox"
                    checked={showFullUsername}
                    onChange={() => setShowFullUsername(!showFullUsername)}
                  />
                  Show Name
                </label>
              </div>
              <div className="delete-message">
                Tweets are deleted after 24 hours
              </div>
            </div>
          </div>

          <TransitionGroup>
            {tweets.map((tweet) => (
              <CSSTransition key={tweet.id} timeout={300} classNames="tweet">
                <TweetCard
                  tweet={tweet}
                  isCurrentUser={tweet.userId === user.uid}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </>
      )}
    </div>
  );
}

export default App;