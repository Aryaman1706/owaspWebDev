// * if else statement are a way of executing different code blocks
// * corresponding to different conditions

// * if .. else statement
function payBill(funds, bill) {
  if (funds >= bill) {
    console.log("Bill paid.");
  } else {
    console.log("Insufficient funds.");
  }
}

// * if..else if..else statement
function openCollege(year) {
  if (year === 1 || year === "first") {
    console.log("Welcome to college.");
  } else if (year === 2 || year === "second") {
    console.log("You all stay home.");
  } else if (year === 3 || year === "third") {
    console.log("Welcome back.");
  } else if (year === 4 || year === "fourth") {
    console.log("Enjoy your last year.");
  } else {
    console.log("Are you sure?");
  }
}

// * switch statement
function openCollege_switch(year) {
  switch (year) {
    case 1:
      console.log("Welcome to college");
      break;
    case 2:
      console.log("You all stay home.");
      break;
    case 3:
      console.log("Welcome back");
      break;
    case 4:
      console.log("Enjoy your last year.");
      break;
    default:
      console.log("Are you sure?");
      break;
  }
}

// payBill(100, 75);

// openCollege(1);
// openCollege("first");

// openCollege_switch(1);
