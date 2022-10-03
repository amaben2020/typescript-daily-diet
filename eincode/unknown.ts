//unknown: this informs the developer of the need to narrow

function printInfo(someObject: { [key: string]: unknown }) {
  if (typeof someObject.age === 'string') {
    someObject.age.toString()
  }
}