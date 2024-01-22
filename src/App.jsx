import { useState } from "react";
import "./App.css";

function App() {
  const fruitArray = ["cherry", "apple", "grape", "banana", "kiwi"];
  const [array, setArray] = useState(fruitArray);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  // const onClickForEach = () => {
  //   const onClickForEach = array.forEach(() => {
  //     return true;
  //   });
  // };
  const onClickForEach = () => {
    let result = "";
    array.forEach((item, index) => {
      result += `${index}: ${item}, `;
    });
    setResult(result.slice(0, -2));
  };
  const onClickFilter = () => {
    const onClickFilter = array.filter((item) => item.includes(query));
    setResult(onClickFilter.join(", "));
  };
  const onClickMap = () => {
    const onClickMap = array.map((fruit) => fruit.toUpperCase());
    setResult(onClickMap.join(", "));
  };
  const onClickReduce = () => {
    const onClickReduce = array.reduce((acc, cur) => `${acc} + ${cur}`);
    setResult(onClickReduce);
  };
  const onClickPush = () => {
    const newArray = [...array, query];
    setResult(newArray.join(", "));
  };
  const onClickPop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };
  const onClickSlice = () => {
    const onClickSlice = array.slice(1, 4);
    setResult(onClickSlice.join(", "));
  };
  const onClickSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, "간장", "치킨");
    setArray(newArr);
    setResult(newArr.join(", "));
  };
  const onClickIndexOf = () => {
    const onClickIndexOf = array.indexOf(query);
    setResult(onClickIndexOf.toString());
  };

  const onClickIncludes = () => {
    const includes = array.includes(query);
    setResult(includes.toString());
  };
  const onClickFind = () => {
    const onClickFind = array.find((item) => item.includes(query));
    setResult(onClickFind || "Not Found");
  };
  const onClickSome = () => {
    const onClickSome = array.some((item) => item.includes(query));
    setResult(onClickSome.toString());
  };

  const onClickEvery = () => {
    const onClickEvery = array.every((item) => item.length > 2);
    setResult(onClickEvery.toString());
  };
  const onClickSort = () => {
    const onClickSort = [...array].sort()
    setArray(onClickSort)
    setResult(onClickSort.join(", "))
  }
  const onClickJoin = () => {
    const onClickJoin = array.join("🎷 ")
    setResult(onClickJoin)
  }
  return (
    <div>
      <h1>Standard반 배열 API</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter text"
        />
        <button onClick={onClickForEach}>forEach</button>
        <button onClick={onClickFilter}>filter</button>
        <button onClick={onClickMap}>map</button>
        <button onClick={onClickReduce}>reduce</button>
        <button onClick={onClickPush}>push</button>
        <button onClick={onClickPop}>pop</button>
        <button onClick={onClickSlice}>slice</button>
        <button onClick={onClickSplice}> splice</button>
        <button onClick={onClickIndexOf}>indexOf</button>
        <button onClick={onClickIncludes}>includes</button>
        <button onClick={onClickFind}>find</button>
        <button onClick={onClickSome}>some</button>
        <button onClick={onClickEvery}>every</button>
        <button onClick={onClickSort}>sort</button>
        <button onClick={onClickJoin}>join</button>
      </div>
      <div>
        <strong>Array</strong> : {fruitArray.join(", ")}
      </div>
      <div>
        <strong>Result</strong> : {result}
      </div>
    </div>
  );
}
export default App;
