import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL, getEmployerInitials } from "../../../../utils";
import { COLORS } from "../../../../constants";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const hasLogo = checkImageURL(item?.employer_logo);

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        {hasLogo ? (
          <Image
            source={{ uri: item.employer_logo }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        ) : (
          <Text
            style={[
              styles.logoPlaceholder,
              { color: selectedJob === item.job_id ? COLORS.primary : COLORS.gray },
            ]}
            numberOfLines={1}
          >
            {getEmployerInitials(item?.employer_name)}
          </Text>
        )}
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
