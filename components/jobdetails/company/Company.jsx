import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL, getEmployerInitials } from "../../../utils";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  const hasLogo = checkImageURL(companyLogo);

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        {hasLogo ? (
          <Image
            source={{ uri: companyLogo }}
            style={styles.logoImage}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.logoPlaceholder} numberOfLines={1}>
            {getEmployerInitials(companyName)}
          </Text>
        )}
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
