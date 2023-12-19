NodeJS & ExpressJS-Day-2-Task-Hall Booking API

👀 It contains Hall Booking API - using Express server 👀

🏩Create and Booking Rooms && List the Rooms and Customers🏩

🥇🥇🥇 Completed My Task 🥇🥇🥇


🌴🌴

Kindly see my Answers in the npm run dev for kind attention Or

Use an app called "Postman"   Or

Enter this link into the app called "Postman" 

They are shown below  👇👇👇

🌴🌴

*************************************************************************************************************************

# 1.creating a room with 
# Numberofseats
# amenities
# price for 1 hour 

Method           :  POST 

API              :  👉👉👉http://localhost:3000/createRoom

Request Data     :
                    {
                        "seats": 5000, 
                        "amenities": ["Projector", "Budget Friendly Banquet Hall With 5 Star Hotel amenities in Erode"],
                        "pricePerHour": 10000 
                    }

Response Data     :
                    {
                        "id": 1,
                        "seats": 5000,
                        "amenities": [
                            "Projector",
                            "Budget Friendly Banquet Hall With 5 Star Hotel amenities in Erode"
                        ],
                        "pricePerHour": 10000
                    }

*************************************************************************************************************************

# 2.booking a room with 
# CustomerName
# Date
# StartTime
# EndTime
# RoomID

Method           :  POST 

API              :  👉👉👉http://localhost:3000/bookRoom

Request Data     :
                    {
                    "customerName": "Vijay", 
                    "date": "2023-12-20", 
                    "startTime": "10:00 AM", 
                    "endTime": "06:00 PM", 
                    "roomId": 1 
                    }

Response Data     :
                    {
                        "id": 1,
                        "customerName": "Vijay",
                        "date": "2023-12-20",
                        "startTime": "10:00 AM",
                        "endTime": "06:00 PM",
                        "roomId": 1
                    }


                    404 status
                    {
                        "error": "The room is booked for that particular Date and Time"
                    }

*************************************************************************************************************************

# 3.List all rooms with booked data with
# room name
# booked status 
# customer name 
# date
# start time 
# end time


Method           :  POST 

API              :  👉👉👉http://localhost:3000/listRooms

Response Data    :
                    [
                        {
                            "roomName": "Room 1",
                            "bookedStatus": true,
                            "bookings": [
                                {
                                    "id": 1,
                                    "customerName": "Vijay",
                                    "date": "2023-12-20",
                                    "startTime": "10:00 AM",
                                    "endTime": "06:00 PM",
                                    "roomId": 1
                                }
                            ]
                        }
                    ]

*************************************************************************************************************************

# 4.List all customers with booked data with
# customer name 
# room name 
# date 
# start time 
# end time


Method           :  POST 

API              :  👉👉👉http://localhost:3000/listCustomers

Response Data    :
                    [
                        {
                            "customerName": "Vijay",
                            "roomName": "Room 1",
                            "date": "2023-12-20",
                            "requested": "2023-12-19T22:32:34.576Z",
                            "startTime": "10:00 AM",
                            "endTime": "06:00 PM"
                        }
                    ]

*************************************************************************************************************************

# 5.List how many times a customer has booked the room with below details
# customer name 
# room name 
# date 
# start time 
# end time
# booking id
# booking date
# booking status

Method           :  POST 

API              :  👉👉👉http://localhost:3000//customerBookingHistory/Vijay

Response Data    :
                    [
                        {
                            "customerName": "Vijay",
                            "roomName": "Room 1",
                            "date": "2023-12-20",
                            "startTime": "10:00 AM",
                            "endTime": "06:00 PM",
                            "bookingId": 1,
                            "bookingDate": "2023-12-10T12:00:00Z",
                            "bookingStatus": "Booked"                          
                        }
                    ]

*************************************************************************************************************************

