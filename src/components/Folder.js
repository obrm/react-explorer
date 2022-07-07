import { useState } from "react";
import { FaRegFolder } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        {expand ? <FaRegFolderOpen /> : <FaRegFolder />}{" "}
        <span
          onClick={() => setExpand(!expand)}
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          {explorer.name}
        </span>
        <br />
        {expand && (
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
