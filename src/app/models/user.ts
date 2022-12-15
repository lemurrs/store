  export interface ILogin{
  username:string,
  password:string,
    rememberMe:boolean,
}


export interface IUser{
  email:string,
    username?:string,
  password:string,
  name?:{
  firstname:string,
    lastname:string
},
  address?:{
    city:string,
      street:string,
      number:number,
      zipcode:string,
      geolocation:{
      lat:string,
        long:string
    }
  },
  phone?:string
}
