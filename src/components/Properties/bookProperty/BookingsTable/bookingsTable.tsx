import { Loader } from "lucide-react";
import React from "react";
import { Table, Button, Placeholder } from "rsuite";
import {
  useGetAllHostsBookingsQuery,
  useRemoveBookingsWherebooking_IdMutation,
  useUpdateBookingStatusMutation,
} from "src/graphql/generated/graphql";

const { Column, HeaderCell, Cell } = Table;

export default function BookingsTable({
  reservedBookings,
  refetchBookings,
  info,
}: any) {
    console.log( info);
    
  const {
    data: hostsBookings,
    isLoading: loadingBookigs,
    refetch: refetchbookigs,
  } = useGetAllHostsBookingsQuery({
    host_id: info?.user_id,
  });
  const { mutate: changeStatus, isLoading: changingStatus } =
    useUpdateBookingStatusMutation({
      onSuccess() {
        refetchbookigs();
      },
      onError(error) {
        alert(error);
      },
    });
  const Allbookings =
    info?.PageTab === "Bookings" ? hostsBookings?.bookings : reservedBookings;

  const data = Allbookings?.map((property: any, index: any) => {
    return {
      id: property?.BID,
      Property: property?.property?.name,
      Amenities:
        property?.property?.amenities?.join(" , ") || "No amenities available",
      cost: (
        <span>
          {new Intl.NumberFormat("en-US").format(property?.property?.cost)} RWF
        </span>
      ),
      Status:
        property?.status === "Pending" || property?.status === "Canceled" ? (
          <span
            className={`rounded-full ${
              property?.status === "Canceled" ? "bg-red-500" : "bg-blue-500"
            }  py-1 px-4 text-white`}
          >
            {" "}
            {property?.status}
          </span>
        ) : (
          <span className="rounded-full bg-green-500 py-1 px-4 text-white">
            Confirmed
          </span>
        ),
      host:
        info?.PageTab === "Bookings"
          ? property?.users?.name
          : property?.property?.hosts?.name,
      range: (
        <span>
          {new Date(property?.from_date).toLocaleDateString()}-{" "}
          {new Date(property?.to_date).toLocaleDateString()}
        </span>
      ),
      done_on: new Date(property?.done_on).toLocaleString(),
    };
  });

  const { mutate: RemoveBooking, isLoading: Loadingbookings } =
    useRemoveBookingsWherebooking_IdMutation({
      onSuccess() {
        refetchBookings();
      },
      onError(error) {
        alert(error);
      },
    });

  const RemoveBookings = (id: any) => {
    RemoveBooking({
      booking_id: id,
    });
  };

  const handleChangeBookingStatus = (id: any, status: string | undefined) => {
    changeStatus({
      booking_id: id,
      status: status,
    });
  };

  return (
    <>
      <h4>All My Bookings</h4>
      <hr />
      <Table height={600} data={data}>
        {/* <Column width={60} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
            </Column> */}

        <Column width={150}>
          <HeaderCell>Property</HeaderCell>
          <Cell dataKey="Property" />
        </Column>
        <Column width={150}>
          <HeaderCell>Cost</HeaderCell>
          <Cell dataKey="cost" />
        </Column>

        <Column width={150}>
          <HeaderCell>Amenities</HeaderCell>
          <Cell dataKey="Amenities" />
        </Column>

        <Column width={140}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="Status" />
        </Column>

        <Column width={100}>
          <HeaderCell>
            {info?.PageTab === "Bookings" ? "Renter" : "Host"}
          </HeaderCell>
          <Cell dataKey="host" />
        </Column>

        <Column width={250}>
          <HeaderCell>From - To</HeaderCell>
          <Cell dataKey="range" />
        </Column>

        <Column width={190}>
          <HeaderCell>Done on</HeaderCell>
          <Cell dataKey="done_on" />
        </Column>
        <Column width={200} fixed="right">
          <HeaderCell>...</HeaderCell>
          {info?.PageTab === "Properties" ? (
            <Cell style={{ padding: "6px" }}>
              {(rowData) => (
                <Button
                  appearance="link"
                  onClick={() => RemoveBookings(rowData.id)}
                >
                  {Loadingbookings ? <Loader /> : "Cancel Booking"}
                </Button>
              )}
            </Cell>
          ) : (
            <Cell style={{ padding: "6px" }}>
              {(rowData) => (
                <>
                  <Button
                    appearance="subtle"
                    style={{
                      color: "green",
                    }}
                    onClick={() =>
                      handleChangeBookingStatus(rowData.id, "Confirmed")
                    }
                  >
                    {changingStatus ? <Loader /> : "Approve"}
                  </Button>
                  <Button
                    appearance="subtle"
                    style={{
                      color: "red",
                    }}
                    onClick={() =>
                      handleChangeBookingStatus(rowData.id, "Canceled")
                    }
                  >
                    {changingStatus ? <Loader /> : "Cancel"}
                  </Button>
                </>
              )}
            </Cell>
          )}
        </Column>
      </Table>
    </>
  );
}
