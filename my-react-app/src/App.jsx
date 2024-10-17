import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className="h-10 px-6 font-semibold rounded-md bg-white text-black"
        type="submit"
      >
        Beli Sekarang
      </button>
    );
  }
}

function ButtonBlack() {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
      type="submit"
    >
      Beli Sekarang
    </button>
  );
}

function ButtonRed() {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-green-500 text-white"
      type="submit"
    >
      Beli Sekarang
    </button>
  );
}

function App() {
  return (
    <div className="flex justify-center bg-indigo-300 min-h-screen items-center">
      <div className="flex flex-col">
        <Button />
        <div className="mt-4">
          <ButtonBlack />
        </div>
        <div className="mt-4">
          <ButtonRed />
        </div>
      </div>
    </div>
  );
}

export default App;
