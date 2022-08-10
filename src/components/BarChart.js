import "@coreui/coreui/dist/css/coreui.min.css";
import { useRef, useState } from "react";
import {  Line, Bar, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
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
import { cilList, cilShieldAlt, cilArrowRight } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import { studentsData } from "../Data";
const studentChartDataInit = {
  labels: studentsData.map((data) => data.name),
  datasets: [
    {
      label: "Student Paids",
      data: studentsData.map(
        (data) =>
          data.payments.map((d) => d.pay).reduce((pVal, cVal) => pVal + cVal) //nested array
      ),
      total: studentsData.map((data) => data.total),
      backgroundColor: [
        "rgba(75,192,192,1)",
        // "#ecf0f1",
        // "#50AF95",
        "#f3ba2f",
        // "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
};
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'Jully',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function BarChart() {
  const [chartData, setChartData] = useState(studentChartDataInit);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({
    barElementLabels:[],
    barElementData:[],
    barElementDataLabel:'',
    barElementTotal:0,
    remain:0
  });

  console.log(chartData);
  const chartRef = useRef();
  const onClick = (event) => {
    setVisible(!visible);

    const barClickData = getElementAtEvent(chartRef.current, event);
    const { element, datasetIndex, index } = barClickData[0];

    const barElementLabels = studentsData[index].payments.map((d) => d.date);
    const barElementData = studentsData[index].payments.map((d) => d.pay);
    const barElementTotal = studentsData[index].total;
    // const barElementRemaining = chartData.datasets[datasetIndex].remaing[index];
    const barElementDataLabel = studentsData[index].name;

    console.log("barClickData :", barClickData);
    console.log("element, datasetIndex, index :", element, datasetIndex, index);

    console.log("barElementLabels: ", barElementLabels);
    console.log("barElementData : ", barElementData);
    console.log("barElemnetDataLabel : ", barElementDataLabel);

    setModalData({
      barElementLabels,
      barElementData,
      barElementDataLabel,
      barElementTotal,
      remain:
        barElementTotal - barElementData.reduce((pVal, cVal) => pVal + cVal, 0),
    });

    //alert("barElementData : " + barElementData);
  };

  return (
    <>
      <Bar ref={chartRef} data={chartData} onClick={onClick} />
      {/* <Line ref={chartRef} data={chartData} onClick={onClick} /> */}

      <CModal visible={visible} onClose={() => setVisible(false)} size="xl">
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>
            <strong>{modalData.barElementDataLabel} Payments</strong>
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            <strong>Total:</strong>
            {"  " + modalData.barElementTotal + "       "}{" "}
            <strong>Remaining :</strong> {"  " + modalData.remain}
          </p>
          <CTable striped hover small>
            <CTableHead>
              <CTableRow>
                {console.log(modalData.barElementLabels)}
                {modalData.barElementLabels.map((x, i) => (
                  <CTableHeaderCell key={i}>{x}</CTableHeaderCell>
                ))}

                {/* <CTableHeaderCell>{newDiv}</CTableHeaderCell> */}
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                {console.log(modalData.barElementData)}
                {modalData.barElementData.map((data, i) => (
                  <CTableDataCell key={i}>{data}</CTableDataCell>
                ))}
              </CTableRow>
            </CTableBody>
          </CTable>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          {/* <CButton color="primary">Save changes</CButton>*/}
        </CModalFooter>
      </CModal>
    </>
  );
}

export default BarChart;
