import React from "react";
import "./styles.css";

// Components
import ShortcutIcon from "../../modules/ShortcutIcon";

// Data
import config from "../../../homepage-config.json";

const shortcuts = config.shortcuts.filter((shortcut) => shortcut.enabled);

const Shortcuts = () => {
  const handleOpenAllClick = () => {
    shortcuts.map((shortcut, index) =>
      index !== shortcuts.length - 1
        ? window.open(shortcut.href, "_blank")
        : (window.location.href = shortcut.href)
    );
  };

  return (
    <div className="shortcuts">
      <div className="shortcuts__icons">
        {shortcuts.map((shortcut, index) => (
          <ShortcutIcon
            name={shortcut.name}
            icon={shortcut.icon}
            href={shortcut.href}
            key={index}
          />
        ))}
      </div>
      <div className="shortcuts__open-all">
        <button onClick={handleOpenAllClick}>Open all</button>
      </div>
    </div>
  );
};

export default Shortcuts;
