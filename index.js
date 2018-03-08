function produceDrivingRange(range) {
  function ciccio(start, end) {
    return Math.abs(start.substring(0, 2) - end.substring(0, 2))
  }
}

let idDriver = 0

function createDriver() {
  class Driver {
    constructor(name) {
      this.name = name
      this.id = idDriver++
    }
  }
}
