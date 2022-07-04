import CheckBox from "CheckBox";
import "./App.css";

const App = () => {
  const COLUMNS_LENGTH = 8;

  let rowsData = [];
  for (let i = 1; i <= COLUMNS_LENGTH; i++) {
    const eachColumnData = [];
    for (let j = 1; j <= COLUMNS_LENGTH; j++) {
      if ((i + j) % 2 === 0) {
        eachColumnData.push("white");
      } else {
        eachColumnData.push("black");
      }
    }
    rowsData.push(eachColumnData);
  }
  return (
    <div className="App">
      {rowsData.map((eachRow, xindex) => (
        <div className="each-row" key={xindex}>
          {eachRow.map((eachColumn, yindex) => (
            <CheckBox color={eachColumn} key={yindex} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
