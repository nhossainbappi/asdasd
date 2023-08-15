// problem-1

function cubeNumber(number) {
  Input = number * number * number;
  if (typeof number === "number") {
    return Input;
  } else if (typeof number != "number") {
    return "please input valid number";
  }
}




// problem-2

function matchFinder(string1, string2) {
 
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Invalid input: Both inputs should be strings.";
  }


  if (string1.includes(string2)) {
    return true;

  } else {
    return false;
  }
}




// problem-3

function sortMaker(arr) {
  let firstArray = arr[0];
  let secondArray = arr[1];
  if(firstArray < 0 || secondArray < 0){
  return 'Invalid Input';
  }
  else if(firstArray < secondArray){
  let opposite = firstArray;
  firstArray = secondArray;
  secondArray = opposite;
  arr = [firstArray,secondArray];
  return arr;
  }
  else if(firstArray == secondArray){
  return 'equal';
  }
  return arr;
  }



// fourth problem
function findAddress(addressObj) {
    if (typeof addressObj !== 'object' || addressObj === null) {
        return "Invalid input: Please provide a valid object.";
    }

    const street = addressObj.street || "__";
    const house = addressObj.house || "__";
    const society = addressObj.society || "__";
    const formattedOutput = `${street},${house},${society}`;

    return formattedOutput;
}





// 5th problem
function canPay(wallet, chipsPrice) {
    if (!Array.isArray(wallet) || wallet.length === 0) {
        return "Empty";
    }

    const totalMoney = wallet.reduce((sum, money) => sum + money, 0);
    if (totalMoney >= chipsPrice) {
        return true;
    } else {
        return false;
    }
}


