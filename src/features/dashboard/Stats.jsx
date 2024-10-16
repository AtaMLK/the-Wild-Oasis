/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import formatCurrency from "../../utils/helpers";

function Stats({ bookings, confirmesStays, numDays, cabinCount }) {
  //-1
  const numBookings = bookings.length;

  //-2
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //-3
  const checkins = confirmesStays.length;

  //-4
  const occupation =
    confirmesStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        color="blue"
        value={numBookings}
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Bookings"
        color="green"
        value={formatCurrency(sales)}
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Bookings"
        color="indigo"
        value={checkins}
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Bookings"
        color="yellow"
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
