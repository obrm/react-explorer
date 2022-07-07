import { useState } from "react";
import { FaRegFolder } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

const Folder = ({ explorer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        {isExpanded ? <FaRegFolderOpen /> : <FaRegFolder />}{" "}
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          {explorer.name}
        </span>
        <br />
        {isExpanded && (
          <div style={{ paddingLeft: 15 }}>
            {explorer.items.map((exp) => {
              return <Folder explorer={exp} key={exp.name} />;
            })}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
         <FaRegFileAlt />
        <span>
          {explorer.name}
        </span>
      </div>
    );
  }
};

export default Folder;
