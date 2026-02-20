import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const NearbyJobs = () => {
  const router = useRouter();
  const { isLoading, error, data } = useFetch({
    endpoint: "search",
    query: {
      query: "JS developer",
      page: "1",
      num_pages: "1",
    },
  });

  const uniqueJobs = React.useMemo(() => {
    if (!data) return [];
    const seen = new Set();
    return data.filter((job) => {
      const id = job?.job_id;
      if (!id || seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          uniqueJobs.map((job) => (
            <NearbyJobCard
              key={`nearby-job-${job.job_id}`}
              job={job}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
