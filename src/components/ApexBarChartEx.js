import ReactApexChart from "react-apexcharts";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useRef, useState } from "react";
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from "@coreui/react";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CRow,
} from "@coreui/react";

import { studentsData } from "../Data";

function ApexBArChart() {
  const [visible, setVisible] = useState(false);
  const options = {
    chart: {
      id: "basic-bar",
      type: 'rangeBar',
      events: {
        click: (event, chartContext, config) => {
            console.log(event, chartContext, config);
        }
    }
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  const chartRef = useRef();

  return (
    <>
      <ReactApexChart options={options} series={series} type="bar" />
    </>
  );
}
export default ApexBArChart;
