import Folder from "./components/Folder";
import explorer from "./data/folderData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
