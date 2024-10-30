export interface Pinnable {
   location: {
      longitude: number,
      latitude: number
   }
   makerContent(): string
}