import React, { useState } from "react";
import { Modal, Placeholder, Button } from "rsuite";
import { useMakeUseraHostMutation } from "src/graphql/generated/graphql";

export default function BecomeHostModel({ user, refetch }: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { mutate: BecomeHost, isLoading } = useMakeUseraHostMutation({
    onSuccess() {
      refetch();
      handleClose();
    },
    onError(error) {
      console.log(error);
    },
  });
  const CreateHostProfile = () => {
    try {
      BecomeHost({
        user_id: user?.UID,
        role: "Host",
        name: user?.name,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button
        onClick={handleOpen}
        className="text-xs font-medium text-blue-600 hover:underline"
      >
        Become a Host
      </button>
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Start Hosting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-sm text-gray-600">
            Becoming a host allows you to list your place, connect with guests,
            and earn income. Are you sure you want to proceed?
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* Cancel Button */}
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>

          {/* Confirm Button */}
          <Button
            onClick={CreateHostProfile}
            style={{ backgroundColor: "black", color: "white" }}
            appearance="primary"
          >
            {isLoading ? "Creating Profile...." : "Confirm & Become Host"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
