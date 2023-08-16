import React from "react";

const ChangeLog = () => {
  const changeLogItems = [

    {
      date: "August 14, 2023",
      changes: [
        "v.1.3",
        "Changed Auto-Delete to one month due to inactivity",
        

      ],
    },












    {
      date: "August 7, 2023",
      changes: [
        "v.1.3",
        "Added report button. Tweets are now deleted after 3 reports",
        "Added changelog",
        "Added Logo (Elon dont kill me pls)",
        "Visual Tweaks"
      ],
    },



    {
      date: "August 6, 2023",
      changes: [
        "v.1.2",
        "Added ability to delete tweets.",
        "Visual tweaks",
      ],
    },
    
    {
        date: "August 5, 2023",
        changes: [
          "v.1.0",
          
          "Added night mode feature",
        "Auto Delete tweets every 24 hours",

        
        ],
      },








  ];

  return (
    <div className="change-log">
      <h2>Changelog</h2>
      {changeLogItems.map((item, index) => (
        <div key={index} className="change-log-item">
          <h3>{item.date}</h3>
          <ul>
            {item.changes.map((change, i) => (
              <li key={i}>{change}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ChangeLog;
