import { faker } from "@faker-js/faker"
import { Pinnable } from "./interface";

export class Student implements Pinnable {
   firstName: string;
   lastName: string;
   location: {
      longitude: number,
      latitude: number
   }
   
   constructor() {
     this.firstName = faker.person.firstName(),
     this.lastName = faker.person.lastName(),
     this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude()
     }
     
   }
   makerContent(): string {
       return `${this.firstName} ${this.lastName}`
   }
 }