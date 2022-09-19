const myExtensionPrintArray = (arr) => {
  arr.forEach((ele) => console.log(ele))
}

const myExtensionChangeVar = (value) => {
  value = 3
}

;(() => {
  let var1 = 1
  let var2 = 2
  const obj1 = {
    prop1: 1,
    prop2: 'abc',
  }
  const arr1 = ['hi', 'my', 'name', 'is', 'mark']

  myExtensionPrintArray(arr1)

  console.log(var1)
  myExtensionChangeVar(var1)
  console.log(var1)
})()
