/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map((element) => {
    if (element.profession == "developer")
      console.log(element);
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach((element) => {
    if (element.profession == "developer")
      console.log(element);
  })
}


function addData() {
  //Write your code here
  const newlist = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern"
  }
  // arr = [...arr,newlist]
  arr.push(newlist)
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  arr.filter((element) => {
    if (element.profession != "admin")
      console.log(element);
  })

}

function concatenateArray() {
  //Write your code here
  let arr2 = [{ id: 5, name: "mohan", age: "17", profession: "developer" },
  { id: 6, name: "jaz", age: "25", profession: "itern" },
  { id: 7, name: "kiran", age: "29", profession: "developer" }]

  arr = [...arr, ...arr2]
  console.log(arr);
  // let arr3 = arr.concat(arr2);
  // console.log(arr3)
}

