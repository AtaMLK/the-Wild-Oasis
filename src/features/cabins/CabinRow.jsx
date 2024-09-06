/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import styled from "styled-components";
import UseDeleteCabin from "./useDeleteCabin";
import UseCreateCabin from "./useCreateCabin";
import CreateCabinForm from "../cabins/CreateCabinForm";

import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import formatCurrency from "../../utils/helpers";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { deleteCabin } from "../../services/apiCabins-v1";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = UseDeleteCabin();
  const { isCreating, createCabin } = UseCreateCabin();

  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}

        <div>
          <Button size="small" disabled={isCreating} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </Button>

          <Modal>
            <Modal.Open opens="edit">
              <Button size="small">
                <HiPencil />
              </Button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Open>
              <Button
                size="small"
                onClick={() => {
                  deleteCabin(cabinId);
                }}
                disabled={isDeleting}
              >
                <HiTrash />
              </Button>
            </Modal.Open>
            <Modal.Window>
              <ConfirmDelete />
            </Modal.Window>
          </Modal>
        </div>
      </TableRow>
    </>
  );
}

export default CabinRow;
