var expect = function (val) {
  return {
    toBe: (toBeVal) => {
      if (toBeVal === val) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (notToBeVal) => {
      if (notToBeVal !== val) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};


// This one was almost easy for me as  know my way with objects and functions
// I wanted to use a tenery operator to further optimize it but the "throw" keyword was not working
// So i just a formal if else block and it worked as expected and passed the test cases.