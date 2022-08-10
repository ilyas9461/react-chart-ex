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

let isDebug=false;

function ApexBarChart() {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({
    barElementLabels:[],
    barElementData:[],
    barElementDataLabel:'',
    barElementTotal:0,
    remain:0
  });

  const options = {
    chart: {
      id: "basic-bar",
      type: 'rangeBar',
      events: {
        click: (event, chartContext, config) => {
           // console.log(event, chartContext, config);
           const {dataPointIndex}=config;
           console.log(dataPointIndex);
           const barElementLabels = studentsData[dataPointIndex].payments.map((d) => d.date);
           const barElementData = studentsData[dataPointIndex].payments.map((d) => d.pay);
           const barElementTotal = studentsData[dataPointIndex].total;
           const barElementDataLabel = studentsData[dataPointIndex].name;

           setModalData({
            barElementLabels,
            barElementData,
            barElementDataLabel,
            barElementTotal,
            remain:
              barElementTotal - barElementData.reduce((pVal, cVal) => pVal + cVal, 0),
          });

          setVisible(!visible);
        }
    }
    },
    xaxis: {
      categories:studentsData.map((data) => data.name),
    },
  };

  const series = [
    {
      name: "series-1",
      data:studentsData.map(
        (data) =>
          data.payments.map((d) => d.pay).reduce((pVal, cVal) => pVal + cVal) //nested array
      ),
    },
  ];

  const chartRef = useRef();

  return (
    <>
      <ReactApexChart options={options} series={series} type="bar" />

      <CModal visible={visible} onClose={() => setVisible(false)} size="xl">
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>
            <strong>{modalData.barElementDataLabel} Payments</strong>
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            <strong>Total:</strong>
            {"  " + modalData.barElementTotal + " "}{" "}
            <strong>Remaining :</strong> {"  " + modalData.remain}
          </p>
          <CTable striped hover small>
            <CTableHead>
              <CTableRow>
                { isDebug && console.log(modalData.barElementLabels)}
                {modalData.barElementLabels.map((x, i) => (
                  <CTableHeaderCell key={i}>{x}</CTableHeaderCell>
                ))}

                {/* <CTableHeaderCell>{newDiv}</CTableHeaderCell> */}
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                { isDebug && console.log(modalData.barElementData)}
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
export default ApexBarChart;
