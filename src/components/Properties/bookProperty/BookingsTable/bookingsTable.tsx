import { Loader } from "lucide-react";
import React from "react";
import { Table, Button } from 'rsuite';
import { useRemoveBookingsWherebooking_IdMutation } from "src/graphql/generated/graphql";

const { Column, HeaderCell, Cell } = Table;

export default function BookingsTable({reservedBookings , refetchBookings} : any){
    const data = reservedBookings?.map((property: any, index : any)=>{
        return{
            id:property?.BID,
            Property : property?.property?.name,
            Amenities: property?.property?.amenities?.join(" , ") || "No amenities available",
            cost: <span>{new Intl.NumberFormat('en-US').format(property?.property?.cost)} RWF</span>,
            Status:property?.status === "Pending" || property?.status === "canceled" ? <span className="bg-blue-500 text-white rounded-full py-1 px-4"> {property?.status}</span> : <span className="bg-green-500 text-white rounded-full py-1 px-4">Confirmed</span>,
            host: property?.property?.hosts?.name,
            range:( <span>{new Date(property?.from_date).toLocaleDateString()}- {new Date(property?.to_date).toLocaleDateString()}</span>),
            done_on: new Date(property?.done_on).toLocaleString()
        }
    })

    const {mutate:RemoveBooking , isLoading:Loadingbookings} = useRemoveBookingsWherebooking_IdMutation({
        onSuccess(){
            refetchBookings()
        },
        onError(error){
            alert(error)
        }
    })
    
    const RemoveBookings = (id : any) => {
        RemoveBooking({
            booking_id: id
        })
        
    }

    return(
        <><h4>All My Bookings</h4><hr /><Table
            height={900}
            data={data}
        >
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

            <Column width={100}>
                <HeaderCell>Status</HeaderCell>
                <Cell dataKey="Status" />
            </Column>

            <Column width={100}>
                <HeaderCell>Host</HeaderCell>
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
            <Column width={100} fixed="right">
                <HeaderCell>...</HeaderCell>

                <Cell style={{ padding: '6px' }}>
                    {rowData => (
                        <Button appearance="link" onClick={() => RemoveBookings(rowData.id)}>
                           {
                            Loadingbookings ? <Loader /> : "Cancel Booking"
                           } 
                        </Button>
                    )}
                </Cell>
            </Column>
        </Table></>
    )
}