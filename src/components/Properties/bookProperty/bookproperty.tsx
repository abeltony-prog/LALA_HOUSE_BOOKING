import { Loader, Loader2, LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import { Modal, Button, DatePicker, InputNumber, Message } from "rsuite";
import {
    RemoveBookingsWherebooking_IdDocument,
  useAddPropertyBookingsMutation,
  useRemoveBookingsWherebooking_IdMutation,
  useValidateAvailablePropertiesQuery,
} from "src/graphql/generated/graphql";

export default function BookPropertyModel({
  property,
  reload,
  isPropertyBooked,
  User,
}: any) {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [suggestedDate, setSuggestedDate] = useState<Date | null>(null);
  const [bookingDetails, setBookingDetails] = useState({
    from: null,
    to: null,
    guests: 1,
  });

  const { data: properties, isLoading: loadingbookings } =
    useValidateAvailablePropertiesQuery({
      property_id: property?.property_id,
    });
  const { mutate: MakeBookigns, isLoading: booking } =
    useAddPropertyBookingsMutation({
      onSuccess() {
        setOpen(false);
        reload();
      },
      onError(error){
        alert(error)
      }
    });

    const {mutate:removeBooking , isLoading:Iscanceling} = useRemoveBookingsWherebooking_IdMutation({
        onSuccess() {
            setOpen(false);
            reload();
          },
          onError(error){
            alert(error)
          }
    })
  // Helper function to check if a date is booked
  const isDateBooked = (fromDate: Date, toDate: Date) => {
    return properties?.bookings.some((booking) => {
      const bookedFrom = new Date(booking.from_date);
      const bookedTo = new Date(booking.to_date);

      return (
        (fromDate >= bookedFrom && fromDate <= bookedTo) ||
        (toDate >= bookedFrom && toDate <= bookedTo) ||
        (fromDate <= bookedFrom && toDate >= bookedTo)
      );
    });
  };

  const getNextAvailableDate = (fromDate: Date, toDate: Date) => {
    let suggestedFrom = new Date(fromDate);
    let suggestedTo = new Date(toDate);

    while (isDateBooked(suggestedFrom, suggestedTo)) {
      suggestedFrom.setDate(suggestedFrom.getDate() + 1);
      suggestedTo.setDate(suggestedTo.getDate() + 1); // Keep the range consistent
    }

    return { from: suggestedFrom, to: suggestedTo };
  };

  const handleOpen = () => {
    setErrorMessage("");
    setSuggestedDate(null);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    if (!bookingDetails.from || !bookingDetails.to) {
      setErrorMessage("Please select both check-in and check-out dates.");
      return;
    }

    if (isDateBooked(bookingDetails.from, bookingDetails.to)) {
      const nextAvailableDates = getNextAvailableDate(
        bookingDetails.from,
        bookingDetails.to
      );
      setSuggestedDate(nextAvailableDates.from);
      setErrorMessage(
        `Selected dates are already booked. Next available from ${nextAvailableDates.from.toDateString()} to ${nextAvailableDates.to.toDateString()}.`
      );
      return;
    }

    try {
      MakeBookigns({
        user_id: User?.UID,
        from_date: bookingDetails?.from,
        to_date: bookingDetails?.to,
        people: bookingDetails?.guests as any,
        property_id: property?.property_id,
        status: "Pending",
      });
    } catch (error) {
      console.log(error);
    }

    console.log("Booking Confirmed:", bookingDetails);
    setOpen(false);
  };
  const CancleBooking = ()=>{
   try{
    removeBooking({
        booking_id: isPropertyBooked,
    })
   }catch(error){
    console.log(error);
    
   }
  }

  return (
    <>
      {/* Book Now Button */}
      {isPropertyBooked ? (
        <button
        onClick={CancleBooking}
        className="w-full cursor-pointer rounded-lg bg-red-400 py-3 text-white hover:bg-red-500">
            {
                Iscanceling ? <Loader /> : "Cancel Booking"
            }
          
        </button>
      ) : (
        <button
          onClick={handleOpen}
          className="w-full cursor-pointer rounded-lg bg-black py-3 text-white hover:bg-gray-800"
        >
            {
                booking ? <Loader2 /> : " Book Now"
            }
         
        </button>
      )}

      {/* Booking Modal */}
      <Modal open={open} size="sm" onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Make Booking</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Error Message */}
          {errorMessage && (
            <Message showIcon type="error" className="mb-3">
              {errorMessage}
            </Message>
          )}

          {/* Suggested Alternative Dates */}
          {suggestedDate && (
            <Message showIcon type="info" className="mb-3">
              Suggested Available Date: <b>{suggestedDate.toDateString()}</b>
            </Message>
          )}

          {/* Check-in Date */}
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Check-in Date
          </label>
          <DatePicker
            value={bookingDetails.from}
            onChange={(date) =>
              setBookingDetails((prev: any) => ({ ...prev, from: date }))
            }
            placeholder="Select check-in date"
            className="mb-3 w-full"
          />

          {/* Check-out Date */}
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Check-out Date
          </label>
          <DatePicker
            value={bookingDetails.to}
            onChange={(date) =>
              setBookingDetails((prev: any) => ({ ...prev, to: date }))
            }
            placeholder="Select check-out date"
            className="mb-3 w-full"
          />

          {/* Number of Guests */}
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Number of Guests
          </label>
          <InputNumber
            min={1}
            max={10}
            value={bookingDetails.guests}
            onChange={(value) =>
              setBookingDetails((prev: any) => ({ ...prev, guests: value }))
            }
            placeholder="Number of guests"
            className="mb-3 w-full"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            disabled={loadingbookings || booking}
            onClick={handleConfirm}
            style={{ backgroundColor: "black" }}
            appearance="primary"
          >
            {loadingbookings || booking ? <LoaderCircle /> : "Confirm"}
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
