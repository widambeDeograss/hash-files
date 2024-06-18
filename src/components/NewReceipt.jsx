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

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 0,
    padding: 5,
  },
  header: {
    fontSize: 14,
    marginBottom: 1,
  },
  text: {
    fontSize: 12,
    marginBottom: 1,
  },
  fixedRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    width: "50%",
    textAlign: "left",
    fontSize: 12,
  },
  rightColumn: {
    width: "50%",
    textAlign: "right",
    fontSize: 12,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginVertical: 5,
    borderBottomStyle:'dashed'
  },
  qrCode: {
    // marginTop: -10,
    marginLeft: -14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  qrCodeImage: {
    width: 150,
    height: 100,
  },
});

const PdfDocument = ({ qrCodeDataUri }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={[styles.header, {textAlign:"center"}]}>SRK FOOD INDUSTRIES LTD</Text>
        <View style={ {justifyContent:"center", flexDirection:"row"}}>
          <Text style={{fontSize:13}}>Location:</Text>
          <Text style={{fontSize:13}}>HIGHRIDGE, NAIROBI</Text>
        </View>
        <View style={ {justifyContent:"center", flexDirection:"row"}}>
          <Text style={{fontSize:13}}>Mobile:</Text>
          <Text style={{fontSize:13}}>0746732554</Text>
        </View>
        <View style={ {justifyContent:"center", flexDirection:"row"}}>
          <Text style={{fontSize:13}}>PIN:</Text>
          <Text style={{fontSize:13}}>P052213855B</Text>
        </View>
        <View style={ {justifyContent:"center", flexDirection:"row"}}>
          <Text style={{fontSize:13}}>CU:</Text>
          <Text style={{fontSize:13}}>KRACU0300000164</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={ {textAlign:"center", flexDirection:"row",fontSize: 14,}}>NOT A LEGAL RECEIPT</Text>
        <Text style={ {textAlign:"center", flexDirection:"row",fontSize: 14,}}>TAX INVOICE COPY</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>CLIENT NAME:</Text>
          <Text style={styles.rightColumn}>Karsan Traders</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>CLIENT PIN:</Text>
          <Text style={styles.rightColumn}>A002199379H</Text>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.section}>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>
            funtime tomato (toy) 10g 1050 x 220
          </Text>
          <Text style={styles.rightColumn}>231000 B-16%</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>
            funtime chicken (toy) 10g 1050 x 220
          </Text>
          <Text style={styles.rightColumn}>231000 B-16%</Text>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.section}>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TAXABLE A-EX :</Text>
          <Text style={styles.rightColumn}>0</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TAXABLE B-16%:</Text>
          <Text style={styles.rightColumn}>398275.86</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TAXABLE C-0%:</Text>
          <Text style={styles.rightColumn}>0</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TAXABLE D-NON VAT:</Text>
          <Text style={styles.rightColumn}>0</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TAXABLE E-8%:</Text>
          <Text style={styles.rightColumn}>0</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TOTAL TAX A-EX:</Text>
          <Text style={styles.rightColumn}>0</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TOTAL TAX B-16%:</Text>
          <Text style={styles.rightColumn}> 63724.12</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TOTAL TAX C-0%:</Text>
          <Text style={styles.rightColumn}> 63724.12</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TOTAL TAX C-0%:</Text>
          <Text style={styles.rightColumn}>0</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TOTAL TAX D-NON VAT:</Text>
          <Text style={styles.rightColumn}>0</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TOTAL TAX E-8%:</Text>
          <Text style={styles.rightColumn}>0</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>TOTAL TAX:</Text>
          <Text style={styles.rightColumn}>63724.12</Text>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.section}>
      <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>CASH:</Text>
          <Text style={styles.rightColumn}>462000</Text>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.section}>
      <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>ITEM NUMBER:</Text>
          <Text style={styles.rightColumn}>2</Text>
        </View>
   
      </View>

      <View style={styles.divider}></View>

      <View style={styles.section}>
        <Text style={[styles.header, {textAlign:"center"}]}>SCU INFORMATION</Text>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>DATE:</Text>
          <Text style={styles.rightColumn}>04-06-2024 10:32:07</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>SCU ID:</Text>
          <Text style={styles.rightColumn}>KRACU0300000164</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>CU INV NO:</Text>
          <Text style={styles.rightColumn}>KRACU0300000164/245</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>INTERNAL DATA:</Text>
          <Text style={styles.rightColumn}>
            NEMW-4SWS-72EN-47GG-YEFU-GJ5S-J4
          </Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>RECEIPT SIGN:</Text>
          <Text style={styles.rightColumn}>W6YL-2XSR-SJWR-XQ5N</Text>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.section}>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>RECEIPT NUMBER:</Text>
          <Text style={styles.rightColumn}>245</Text>
        </View>
        <View style={styles.fixedRow}>
          <Text style={styles.leftColumn}>DATE:</Text>
          <Text style={styles.rightColumn}>04-06-2024 10:32:07</Text>
        </View>
      </View>
      <View style={styles.divider}></View>

      <View style={styles.qrCode}>
        <Image style={styles.qrCodeImage} src={{ uri: qrCodeDataUri }} />
      </View>

      <View style={styles.section}>
        <Text style={[styles.text, {textAlign:"center"}]}>*** END OF LEGAL RECEIPT ***</Text>
        <Text style={[styles.text, {textAlign:"center"}]}>
          AdvaMauzo©2024 Powered by AdvaTech (0728-333-111)
        </Text>
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
