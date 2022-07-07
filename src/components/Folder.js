import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)} style={{ fontWeight: "bold" }}>
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
        <span>{explorer.name}</span>
      </div>
    );
  }
};

export default Folder;
