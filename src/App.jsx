import React, { useState } from "react";

function App() {
  const plain = "aekxdew";
  const key = 10;

  const plainArray = plain.split("");

  const newPlainArray = [];

  for (let i = 0; i < plainArray.length; i++) {
    switch (plainArray[i]) {
      case "a":
        newPlainArray.push(0);
        break;
      case "b":
        newPlainArray.push(1);
        break;
      case "c":
        newPlainArray.push(2);
        break;
      case "d":
        newPlainArray.push(3);
        break;
      case "e":
        newPlainArray.push(4);
        break;
      case "f":
        newPlainArray.push(5);
        break;
      case "g":
        newPlainArray.push(6);
        break;
      case "h":
        newPlainArray.push(7);
        break;
      case "i":
        newPlainArray.push(8);
        break;
      case "j":
        newPlainArray.push(9);
        break;
      case "k":
        newPlainArray.push(10);
        break;
      case "l":
        newPlainArray.push(11);
        break;
      case "m":
        newPlainArray.push(12);
        break;
      case "n":
        newPlainArray.push(13);
        break;
      case "o":
        newPlainArray.push(14);
        break;
      case "p":
        newPlainArray.push(15);
        break;
      case "q":
        newPlainArray.push(16);
        break;
      case "r":
        newPlainArray.push(17);
        break;
      case "s":
        newPlainArray.push(18);
        break;
      case "t":
        newPlainArray.push(19);
        break;
      case "u":
        newPlainArray.push(20);
        break;
      case "v":
        newPlainArray.push(21);
        break;
      case "w":
        newPlainArray.push(22);
        break;
      case "x":
        newPlainArray.push(23);
        break;
      case "y":
        newPlainArray.push(24);
        break;
      case "z":
        newPlainArray.push(25);
        break;
    }
  }

  const newCipherArrayNumber = [];
  const newCipherArray = []

  for (let i = 0; i < newPlainArray.length; i++) {
    const cipherNumber = ((newPlainArray[i] - key)%26);
    newCipherArrayNumber.push(cipherNumber)
  }
  
  console.log(newCipherArrayNumber.length)
  for (let i = 0; i < newCipherArrayNumber.length; i++) {
    switch (newCipherArrayNumber[i]) {
      case 0:
        newCipherArray.push("a");
        break;
      case 1:
        newCipherArray.push("b");
        break;
      case 2:
        newCipherArray.push("c");
        break;
      case 3:
        newCipherArray.push("d");
        break;
      case 4:
        newCipherArray.push("e");
        break;
      case 5:
        newCipherArray.push("f");
        break;
      case 6:
        newCipherArray.push("g");
        break;
      case 7:
        newCipherArray.push("h");
        break;
      case 8:
        newCipherArray.push("i");
        break;
      case 9:
        newCipherArray.push("j");
        break;
      case 10:
        newCipherArray.push("k");
        break;
      case 11:
        newCipherArray.push("l");
        break;
      case 12:
        newCipherArray.push("m");
        break;
      case 13:
        newCipherArray.push("n");
        break;
      case 14:
        newCipherArray.push("o");
        break;
      case 15:
        newCipherArray.push("p");
        break;
      case 16:
        newCipherArray.push("q");
        break;
      case 17:
        newCipherArray.push("r");
        break;
      case 18:
        newCipherArray.push("s");
        break;
      case 19:
        newCipherArray.push("t");
        break;
      case 20:
        newCipherArray.push("u");
        break;
      case 21:
        newCipherArray.push("v");
        break;
      case 22:
        newCipherArray.push("w");
        break;
      case 23:
        newCipherArray.push("x");
        break;
      case 24:
        newCipherArray.push("y");
        break;
      case 25:
        newCipherArray.push("z");
        break;
    }
  }
  

  return (
  <div>
    <div>
      {newCipherArray}
    </div>
  </div>
  );
}

export default App;
