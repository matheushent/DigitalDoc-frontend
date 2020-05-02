import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff"
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#424242",
    width: "100%",
    padding: 16,
    color: "white",
    marginBottom: 16
  },
  headerTitle: {
    fontSize: 40,
    color: "white",
    marginBottom: 8
  },
  headerDescription: {
    fontSize: 20,
    color: "white",
    marginBottom: 8
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 16,
    flexGrow: 1,
    flexShrink: 1
  },
  caseTitle: {
    fontSize: 14,
    marginBottom: 4
  },
  caseLink: {
    fontSize: 14,
    marginBottom: 4,
    color: "#54a8e7"
  }
});

const PdfDocument = props => {
  const { cases, textInfos } = props;
  return (
    <Document>
      {cases
        ? cases.map((caseData, index) => {
          return (
            <Page style={styles.page}>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>{textInfos.title}</Text>
                <Text style={styles.headerDescription}>
                  {textInfos.subTitle}
                </Text>
              </View>
              <View key={caseData + index}>
                <View key={index} style={styles.container}>
                  <View style={styles.detailsContainer}>
                    <View>
                      <Text style={styles.caseTitle}>
                        {textInfos.filename}: {caseData.filename}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.caseTitle}>
                        {textInfos.hash}: {caseData.Hash}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.caseLink}>
                        {textInfos.link}: {caseData.link}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.caseTitle}>
                        {textInfos.timestamp}: {caseData.timestamp}
                      </Text>
                    </View>
                    <View>
                    </View>
                  </View>
                </View>
              </View>
            </Page>
          );
        })
        : "Something did wrong! Please, contact support!"}
    </Document>
  );
};

export default PdfDocument;
