import { CustomizedMap } from "./CustomizedMap";
import { Student } from "./Student"
import { Internship } from "./Internship"
// import 'dotenv/config'
// require('dotenv').config()
// import { process } from "process"
// console.log(`process.env: `,process.env)

function initMap(): void {
  const map = new CustomizedMap('map')
  const student = new Student()
  const internship = new Internship()
  // const map = new google.maps.Map(document.getElementById("map")!, {
  //   zoom: 1,
  //   center: {
  //     lat: 0,
  //     lng: 0,
  //   },
  // });
  map.addPin(student)
  map.addPin(internship)

}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
