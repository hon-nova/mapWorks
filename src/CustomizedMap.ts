import { Student } from './Student'
import { Internship } from './Internship'
import { Pinnable } from './interface';
export class CustomizedMap {
   private map;
   constructor(div: string) {
     this.map = new google.maps.Map(document.getElementById(div)!, {
       zoom: 1,
       center: {
         lat: 0,
         lng: 0,
       },
     });
   }
   addPin(entity: Pinnable) {
     
     const pin = new google.maps.Marker({
      map: this.map,
      position:{
         lat: entity.location.latitude,        
         lng: entity.location.longitude
      }
     })
   //   let contentString: string =''
     const infoWindow = new google.maps.InfoWindow({content: entity.makerContent()}) 

     pin.addListener('click',()=>{
      infoWindow.open(this.map,pin)
     })

   }  
 }




