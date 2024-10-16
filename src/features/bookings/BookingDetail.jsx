/* eslint-disable no-unused-vars */
<<<<<<< HEAD
import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { UseBooking } from "./useBooking";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare, HiTrash } from "react-icons/hi2";
import UseCheckout from "../check-in-out/UseCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteBooking from "./useDeleteBooking";
=======
import styled from 'styled-components';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Spinner from '../../ui/Spinner';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';

import { useMoveBack } from '../../hooks/useMoveBack';
import { UseBooking } from './useBooking';
import { useNavigate } from 'react-router-dom';
import { HiArrowUpOnSquare, HiTrash } from 'react-icons/hi2';
import UseCheckout from '../check-in-out/UseCheckout';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import useDeleteBooking from './useDeleteBooking';
import Empty from '../../ui/Empty';
>>>>>>> auth

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { booking, isLoading } = UseBooking();
  const { checkout, isCheckingout } = UseCheckout();
  const { deleteBookingRow, isDeleteingBookingRow } = useDeleteBooking();

  const moveBack = useMoveBack();

  if (!booking) return <p>No Bookings</p>;
  const { status, id: bookingId } = booking;

  if (isLoading) return <Spinner />;
<<<<<<< HEAD

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
=======
  if (!booking) return <Empty resourceName="booking" />;

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
>>>>>>> auth
  };
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
<<<<<<< HEAD
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
=======
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
>>>>>>> auth
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
<<<<<<< HEAD
        {status === "uncorfirmed" && (
=======
        {status === 'uncorfirmed' && (
>>>>>>> auth
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check In
          </Button>
        )}
<<<<<<< HEAD
        {status === "checked-in" && (
=======
        {status === 'checked-in' && (
>>>>>>> auth
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingout}
          >
            Check out
          </Button>
        )}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>

        <Modal>
          <Modal.Open opens="delete">
            <Button
              variation="danger"
              icon={<HiTrash />}
              disabled={isDeleteingBookingRow}
            >
              Delete booking
            </Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              onConfirm={() => {
                deleteBookingRow(bookingId, { onSettled: navigate(-1) });
              }}
            />
          </Modal.Window>
        </Modal>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
