import { Pinnable } from "./interface"
import { faker } from "@faker-js/faker"
export class Internship implements Pinnable{
   
  private businessName: string
  location: {
   longitude: number,
   latitude: number
}
   constructor() {
      this.businessName = faker.company.name()  
      this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude()
     }
   }
 
   makerContent(): string {
      return `${this.businessName}`
   }
 }