/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

const fakeData = [
  { lable: "Jan 09", totalSales: 480, extrasSales: 20 },
  { lable: "Jan 10", totalSales: 580, extrasSales: 100 },
  { lable: "Jan 11", totalSales: 550, extrasSales: 150 },
  { lable: "Jan 12", totalSales: 600, extrasSales: 50 },
  { lable: "Jan 13", totalSales: 700, extrasSales: 150 },
  { lable: "Jan 14", totalSales: 800, extrasSales: 150 },
  { lable: "Jan 15", totalSales: 700, extrasSales: 200 },
  { lable: "Jan 16", totalSales: 650, extrasSales: 200 },
  { lable: "Jan 17", totalSales: 600, extrasSales: 300 },
  { lable: "Jan 18", totalSales: 550, extrasSales: 100 },
  { lable: "Jan 19", totalSales: 700, extrasSales: 100 },
  { lable: "Jan 20", totalSales: 800, extrasSales: 200 },
  { lable: "Jan 21", totalSales: 700, extrasSales: 100 },
  { lable: "Jan 22", totalSales: 810, extrasSales: 50 },
  { lable: "Jan 23", totalSales: 950, extrasSales: 250 },
  { lable: "Jan 24", totalSales: 970, extrasSales: 100 },
  { lable: "Jan 25", totalSales: 900, extrasSales: 200 },
  { lable: "Jan 26", totalSales: 950, extrasSales: 300 },
  { lable: "Jan 27", totalSales: 850, extrasSales: 200 },
  { lable: "Jan 28", totalSales: 900, extrasSales: 100 },
  { lable: "Jan 29", totalSales: 800, extrasSales: 300 },
  { lable: "Jan 30", totalSales: 950, extrasSales: 200 },
  { lable: "Jan 31", totalSales: 1100, extrasSales: 300 },
  { lable: "Feb 01", totalSales: 1200, extrasSales: 400 },
  { lable: "Feb 02", totalSales: 1250, extrasSales: 300 },
  { lable: "Feb 03", totalSales: 1400, extrasSales: 450 },
  { lable: "Feb 04", totalSales: 1500, extrasSales: 500 },
  { lable: "Feb 05", totalSales: 1400, extrasSales: 600 },
  { lable: "Feb 06", totalSales: 1450, extrasSales: 400 },
];

function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      lable: format(date, "MMM dd"),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  });
  console.log(data);

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };
  return (
    <StyledSalesChart>
      <Heading as="h2">
        Sales from {format(allDates.at(0), "MMM dd")} &mdash;
        {format(allDates.at(-1), "MMM dd")}
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="lable"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="6" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total Sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="Extra Sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
