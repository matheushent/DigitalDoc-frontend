import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
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
    backgroundColor: "#64b5f6",
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
  headerAlert: {
    fontSize: 10,
    color: "white"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "column"
  },
  image: {
    height: 250,
    width: 250,
    marginBottom: 16
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
  caseResult: {
    fontSize: 12,
    marginBottom: 4
  },
  caseProbability: {
    fontSize: 12
  },
  caseRadiologistComment: {
    fontSize: 8,
    marginTop: 16
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
                  <Text style={styles.headerAlert}>
                    {textInfos.alertMessage}
                  </Text>
                </View>
                <View key={caseData + index}>
                  <View key={index} style={styles.container}>
                    <View style={styles.imagesContainer}>
                      <Image
                        style={styles.image}
                        source={caseData.original_url}
                      />
                      <Image
                        style={styles.image}
                        source={caseData.heatmap_url}
                      />
                    </View>
                    <View style={styles.detailsContainer}>
                      <View>
                        <Text style={styles.caseTitle}>
                          {textInfos.case}: {caseData.filename}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.caseResult}>
                          {textInfos.result}:{" "}
                          {caseData.predictions[0].label === "normal"
                            ? textInfos.resultNormal
                            : textInfos.resultCovid}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.caseProbability}>
                          {textInfos.probability}:{" "}
                          {Math.round(
                            caseData.predictions[0].probability * 100
                          )}
                          %
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.caseRadiologistComment}>
                          {textInfos.radiologistNotes}:
                        </Text>
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
