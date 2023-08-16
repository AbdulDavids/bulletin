import React from "react";

const ChangeLog = () => {
  const changeLogItems = [
    {
      changes: [
        "Do not mention real people",
        "Be respectful and kind",
        "Report tweets that are offensive",
        "Above all, have fun!"

      ],
    },











  ];

  return (
    <div className="change-log">
      <h2>Rules</h2>
      {changeLogItems.map((item, index) => (
        <div key={index} className="change-log-item">
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