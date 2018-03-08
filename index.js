function produceDrivingRange(range) {
  return function ciccio(start, end) {
    let distance = Math.abs(start.substring(0, 2) - end.substring(0, 2))
    if (distance > range) {
      return `${distance - range} blocks out of range`
    } else {
      return `within range by ${range - distance}`
    }
  }
}

function produceTipCalculator() {

}


function createDriver() {
  let idDriver = 0

  return class Driver {
    constructor(name) {
      this.name = name
      this.id = idDriver++
    }
  }
}
