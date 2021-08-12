export class Booking{
    bookingId:number;
    cid:number;
    busScId:number;
    noOfPassengers:number;
    totalFare:number;
    status:string;
    dateOfBooking:string;
    isReturn:boolean = false;
    returnDate:string;
    withDriver:boolean = false;
    securityDeposit:number;
    wholeBus:boolean = false;
}