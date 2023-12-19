const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Data storage using local variables
const rooms = [];
const bookings = [];

// Endpoint to create a room
app.post('/createRoom', (req, res) => {
  const { seats, amenities, pricePerHour } = req.body;
  const room = {
    id: rooms.length + 1,
    seats,
    amenities,
    pricePerHour,
  };
  rooms.push(room);
  res.json(room);
});

// Endpoint to book a room
app.post('/bookRoom', (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;

  // Check if the room is already booked for the given date and time
  const isRoomBooked = bookings.some(
    (booking) =>
      booking.roomId === roomId &&
      booking.date === date &&
      ((startTime >= booking.startTime && startTime < booking.endTime) ||
        (endTime > booking.startTime && endTime <= booking.endTime) ||
        (startTime <= booking.startTime && endTime >= booking.endTime))
  );

  if (isRoomBooked) {
    return res.status(400).json({ error: "The room is booked for that particular Date and Time" });
  }

  const booking = {
    id: bookings.length + 1,
    customerName,
    date,
    startTime,
    endTime,
    roomId,
  };

  bookings.push(booking);
  res.json(booking);
});

// Endpoint to list all rooms with booked data
app.get('/listRooms', (req, res) => {
  const roomsWithBookings = rooms.map((room) => {
    const bookingsForRoom = bookings.filter((booking) => booking.roomId === room.id);
    return {
      roomName: `Room ${room.id}`,
      bookedStatus: bookingsForRoom.length > 0,
      bookings: bookingsForRoom,
    };
  });

  res.json(roomsWithBookings);
});

// Endpoint to list all customers with booked data
app.get('/listCustomers', (req, res) => {
  const customersWithBookings = bookings.map((booking) => {
    const room = rooms.find((r) => r.id === booking.roomId);
    return {
      customerName: booking.customerName,
      roomName: `Room ${booking.roomId}`,
      date: booking.date,
      requested: new Date(),
      startTime: booking.startTime,
      endTime: booking.endTime,
    };
  });

  res.json(customersWithBookings);
});

// Endpoint to list how many times a customer has booked a room
app.get('/customerBookingHistory/:customerName', (req, res) => {
  const customerName = req.params.customerName;
  const customerBookingHistory = bookings
    .filter((booking) => booking.customerName === customerName)
    .map((booking) => {
      const room = rooms.find((r) => r.id === booking.roomId);
      return {
        customerName: booking.customerName,
        roomName: `Room ${booking.roomId}`,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
        bookingId: booking.id,
        bookingDate: new Date(),
        bookingStatus: 'Booked',
      };
    });

  res.json(customerBookingHistory);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});