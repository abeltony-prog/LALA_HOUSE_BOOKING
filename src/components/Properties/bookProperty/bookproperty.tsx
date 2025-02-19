import React from "react";
import { Modal, Placeholder, Button } from "rsuite";

export default function BookPropertyModel(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <><button className="w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800">
            Book Now
        </button><Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Placeholder.Paragraph />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal></>
        )
}