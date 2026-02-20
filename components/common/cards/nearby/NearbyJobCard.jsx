import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageURL, getEmployerInitials } from "../../../../utils";

const NearbyJobCard = ({ job, handleNavigate }) => {
  const hasLogo = checkImageURL(job?.employer_logo);

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        {hasLogo ? (
          <Image
            source={{ uri: job.employer_logo }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        ) : (
          <Text
            style={styles.logoPlaceholder}
            numberOfLines={1}
          >
            {getEmployerInitials(job?.employer_name)}
          </Text>
        )}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
