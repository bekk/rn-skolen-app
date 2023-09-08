import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import txt from 'app/api/texts'
import {Heading} from 'app/screens/components/Heading'
import {Link} from 'app/screens/components/Link'

export function InfoContent() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32,
      }}>
      <Text style={styles.text}>{txt.welcomeMessage}</Text>
      <Text style={styles.text}>{txt.practicalInformation}</Text>
      <Heading style={styles.heading}>{txt.howToGetThere}</Heading>
      <Text style={styles.text}>{txt.adressIs}</Text>
      <Link
        url={txt.adressUrl}
        style={{
          color: 'white',
          fontSize: 18,
          lineHeight: 32,
          marginTop: 14,
        }}>
        {txt.adress}
      </Link>
      <Text style={styles.text}>{txt.nearestStops}</Text>
      <Heading style={styles.heading}>{txt.findingYourWay}</Heading>
      <Text style={styles.text}>{txt.signage}</Text>
      <Heading style={styles.heading}>{txt.cloakroom}</Heading>
      <Text style={styles.text}>{txt.cloakroomDetails}</Text>
      <Heading style={styles.heading}>{txt.recordings}</Heading>
      <Text style={styles.text}>{txt.recordingsDetails}</Text>
      <Heading style={styles.heading}>{txt.photos}</Heading>
      <Text style={styles.text}>{txt.photosDetails}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
    lineHeight: 32,
    marginTop: 14,
  },
  heading: {
    marginBottom: 18,
    marginTop: 42,
  },
})
