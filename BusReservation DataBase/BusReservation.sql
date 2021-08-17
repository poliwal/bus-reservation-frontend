create database BusReservation
use BusReservation

--Table Creation
create table Admin(
AdminId nvarchar(20) not null primary key,
AdminPass nvarchar(20)) 

create table Customers(
Cid int primary key identity(1,1),
Fname varchar(30),
Lname varchar(30),
Email nvarchar(50) not null,
Password nvarchar(50),
ContactNo nvarchar(20) not null,
Dob date,
Gender varchar(10),
Address nvarchar(255),
Wallet decimal,
Feedback int,
HasBooked bit,
IsAuthorized bit default 0)

ALTER TABLE Customers
ADD CONSTRAINT custEmail_unique UNIQUE (Email);

--sp_help Customers

--drop table Buses

create table Buses(
BusNo int primary key identity(101,1),
BusName nvarchar(30),
Source nvarchar(30),
Destination nvarchar(30),
DepartureTime time,
ArrivalTime time,
NoOfSeats int,
Via nvarchar(30),
Fare decimal(10,2),
DriverName nvarchar(30),
DriverAge int,
DriverExperience int)

--drop table BusSchedules

create table BusSchedules(
BusScId int primary key identity(1,1),
DepartureDate date,
BusNo int,
constraint fk_BS_B_BNo foreign key (BusNo) references Buses(BusNo) on delete cascade on update cascade)

alter table BusSchedules add AvailableSeats int Default 24;

--drop table Bookings

create table Bookings(
BookingId int primary key identity(1,1),
Cid int,
BusScId int,
ReturnBusId int,
NoOfPassengers int,
TotalFare decimal(10,2),
Status nvarchar(20),
DateOfBooking date default GETDATE(),
IsReturn bit,
ReturnDate date,
WholeBus bit,
WithDriver bit,
SecurityDeposit decimal(10,2),
constraint fk_B_C_CID foreign key (Cid) references Customers(Cid) on delete cascade on update cascade,
constraint fk_B_BS_BSId foreign key (BusScId) references BusSchedules(BusScId) on delete cascade on update cascade)


--drop table ReturnBookings

create table ReturnBookings(
ReturnBookingId int primary key identity(1,1),
BookingId int,
BusScId int,
constraint fk_Bo_RB_BID foreign key (BookingId) references Bookings(BookingId) on delete cascade on update cascade,
constraint fk_B_RB_BID foreign key (BusScId) references BusSchedules(BusScId))

--drop table BusSeatNo

create table BusSeatNo(
SeatId int primary key identity(1,1),
BusScId int,
SeatNo int,
IsAvailable bit,
constraint fk_B_Bs_BID foreign key (BusScId) references BusSchedules(BusScId) on delete cascade on update cascade)


--drop table PassengerDetails

create table PassengerDetails(
PassId int primary key identity(1,1),
PName nvarchar(30),
PAge int,
BookingId int,
SeatNo int,
ReturnSeatNo int,
constraint fk_Bo_PD_BID foreign key (BookingId) references Bookings(BookingId) on delete cascade on update cascade)

------------------------------Run Above Queries Only-------------------------
/*--inserting
insert into Admin values('admin','Admin@123');
insert into Buses values('Velocity','Mumbai','Pune', '12:20','16:30',24,'Thane',1100,'Shreyash',30,20)
insert into Buses values('Velocity R','Pune','Mumbai', '17:20','21:30',24,'Thane',1100,'Shreyash',30,20)

insert into Customers(Fname,Lname,Email,Password,ContactNo,Dob,Gender,Address,Wallet,HasBooked,IsAuthorized) 
values('Mihir','Poliwal','mihirpoliwal@gmail.com','123','9773390341','1999-11-30','Male','Mumbai',500000,0,1)

select * from Admin
select * from Buses
select * from Bookings
select * from ReturnBookings
select * from BusSchedules
select * from BusSeatNo
select * from Customers
select * from PassengerDetails

truncate table BusSchedules
truncate table BusSeatNo
truncate table Bookings
truncate table ReturnBookings
truncate table PassengerDetails
truncate table Customers

update Admin set AdminPass = 'QWRtaW5AMTIz'
update BusSeatNo set IsAvailable = 1 where SeatId = 1
update Customers set Password = 'TWloaXJAMzQ1' where Cid = 1
update Buses set BusNo = 102 where BusName = 'Velocity R'
update BusSchedules set AvailableSeats = 24

delete from BusSchedules where BusScId = 6
delete from Bookings where BookingId = 66
delete from Customers where Cid = 26*/

