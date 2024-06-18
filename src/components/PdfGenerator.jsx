import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import advatech from "./ADVATECH.png";
import QRCode from "react-qr-code";

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 3,
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  subheader: {
    fontSize: 16,
    marginBottom: 10,
  },
  topView: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  leftTopView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  invoiceTitle: {
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: "red",
    borderStyle: "solid",
    borderWidth: 0.3,
    color: "white",
    padding: 1,
    textAlign: "center",
    fontWeight: "extrabold",
  },
  documentRightDetails: {
    borderStyle: "solid",
    borderWidth: 0.3,
    padding: 3,
    width: 150,
  },

  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 0.3,
    // borderRightWidth: 0,
    // borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#E4E4E4",
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  qrCode: {
    // marginTop: -14,
    marginLeft:-14,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  qrCodeImage: {
    width: 150,
    height: 130,
  },
});

const Invoice = ({ qrCodeDataUri }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.topView}>
        <View style={styles.leftTopView}>
          <View>
            <Image
              src="/advalogo.png"
              style={{ height: 110, width: 100, marginRight: 4 }}
            />
          </View>
          <View>
            <View>
              <Text style={{ fontWeight: "extrabold" }}>
                AdvaTech Supplies Limited
              </Text>
              <Text> P. O. Box 3904-00506</Text>
              <Text> Nyayo Stadium,Nairobi</Text>
              <Text>0720999397</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.invoiceTitle}>
            <Text>Invoice</Text>
          </View>
          <View style={styles.documentRightDetails}>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 4,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Number</Text>
              <Text>IN004708</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 4,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Date</Text>
              <Text> 27/09/2021</Text>
            </View>
          </View>
        </View>
      </View>
      <Text>Customer Details</Text>
      <View
        style={[styles.documentRightDetails, { width: 230, marginBottom: 5 }]}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginBottom: 4,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Customer Name</Text>
          <Text>IN004708</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginBottom: 4,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>TIN number</Text>
          <Text> 27/09/2021</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginBottom: 4,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Email</Text>
          <Text> 27/09/2021</Text>
        </View>
      </View>

      {/* <View style={styles.section}>
        <Text>Reference Number: IN004708</Text>
        <Text>Date: 27/09/2021</Text>
      </View>

      <View style={styles.section}>
        <Text>Student Details</Text>
        <Text>Name: Alexis Karuri</Text>
        <Text>Class: STANDARD CUSTOMER GROUP</Text>
        <Text>Email: leahkaruri7@gmail.com</Text>
        <Text>P.O. Box: 3904-00506, Nyayo Stadium, Nairobi</Text>
        <Text>Phone: 0716025373 / 0720999397 / 0788931777</Text>
      </View> */}
      {/* <View style={[styles.table, { marginBottom: 2 }]}>
        <View style={styles.tableRow}>
          <View style={[styles.tableColHeader, { width: "25%" }]}>
            <Text style={styles.tableCellHeader}>Reference</Text>
          </View>
          <View style={[styles.tableColHeader, { width: "25%" }]}>
            <Text style={styles.tableCellHeader}>Customer No</Text>
          </View>
          <View style={[styles.tableColHeader, { width: "25%" }]}>
            <Text style={styles.tableCellHeader}>Description</Text>
          </View>
          <View style={[styles.tableColHeader, { width: "25%" }]}>
            <Text style={styles.tableCellHeader}>Terms Code</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "25%" }]}>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={[styles.tableCol, { width: "25%" }]}>
            <Text style={styles.tableCell}>1.00000</Text>
          </View>
          <View style={[styles.tableCol, { width: "25%" }]}>
            <Text style={styles.tableCell}>10P1IM</Text>
          </View>
          <View style={[styles.tableCol, { width: "25%" }]}>
            <Text style={styles.tableCell}>14,796.00</Text>
          </View>
        </View>
      </View> */}

      <View style={[styles.table,{marginTop:5}]}>
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Description</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Quantity</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>UOM</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Unit Price</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Amount</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Zone 2B Two Way</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1.00000</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>10P1IM</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>14,796.00</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>14,796.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Skating</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1.00000</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>10P1IM</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>5,500.00</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>5,500.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Tuition</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1.00000</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>10P1IM</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>59,297.00</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>59,297.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Covid Fund</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1.00000</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>10P1IM</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>3,250.00</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>3,250.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Stationery</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1.00000</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>10P1IM</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>2,150.00</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>2,150.00</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          {/* <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <View style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Text
                style={{ fontWeight: "extrabold", textDecoration: "underline" }}
              >
                {" "}
                Due Date
              </Text>
              <Text>17/6/2024</Text>
            </View>
            <View>
              <Text
                style={{ fontWeight: "extrabold", textDecoration: "underline" }}
              >
                Amount Due
              </Text>
              <Text>84,993.00</Text>
            </View>
            <View>
              <Text
                style={{ fontWeight: "extrabold", textDecoration: "underline" }}
              >
                Disc. Date
              </Text>
              <Text>17/6/2024</Text>
            </View>
            <View>
              <Text
                style={{ fontWeight: "extrabold", textDecoration: "underline" }}
              >
                Disc. Amount
              </Text>
              <Text> 1,778.9</Text>
            </View>
          </View> */}
          <View style={[styles.section, { width: "65%" }]}>
            <Text
              style={{
                marginBottom: 3,
                textAlign: "left",
                fontWeight: "extrabold",
              }}
            >
              SCU INFORMATION
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 40,
              }}
            >
              <Text style={{ marginBottom: 4 }}>DATE:04-06-2024</Text>
              <Text style={{ marginBottom: 4 }}>TIME: 10:32:07</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 40,
              }}
            >
              <Text style={{ marginBottom: 4 }}>SCU ID:</Text>
              <Text style={{ marginBottom: 4 }}>KRACU030000164</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 40,
              }}
            >
              <Text style={{ marginBottom: 4 }}>CU INV NO:</Text>
              <Text style={{ marginBottom: 4 }}>KRACU03000164/245</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 40,
              }}
            >
              <Text style={{ marginBottom: 4 }}>INTERNAL DATA:</Text>
              <Text style={{ marginBottom: 4 }}>
                NEMW-4SWS-72EN-47GG-YEFU-GJ5S-J4
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 40,
              }}
            >
              <Text style={{ marginBottom: 4 }}>RECEIPT SIGN:</Text>
              <Text style={{ marginBottom: 4 }}>W6YL-2XSR-SJWR-XQ5N</Text>
            </View>
          </View>
          <View style={styles.qrCode}>
            <Image style={styles.qrCodeImage} src={{ uri: qrCodeDataUri }} />
          </View>
        </View>
        <View style={[styles.table, { width: 200, height: 200 }]}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}>Subtotal before taxes</Text>
            </View>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}> 84,993.0</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}> Total taxes</Text>
            </View>
            <View style={[styles.tableCol, , { width: "50%" }]}>
              <Text style={styles.tableCell}> 84,993.0</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}>Total amount</Text>
            </View>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}> 84,993.0</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}> Payment received</Text>
            </View>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}> 0.0</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}>Discount taken</Text>
            </View>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}> 0.0</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}>Discount taken</Text>
            </View>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}> 0.0</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}>Amount due</Text>
            </View>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}> 84,993.0</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Invoice;
