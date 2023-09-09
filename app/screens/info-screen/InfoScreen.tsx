import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import txt from 'app/api/infoTexts'
import {Link} from 'app/screens/info-screen/components/Link'
import {CodePushDescription} from 'app/components/CodePushDescription'
import {Heading} from 'app/screens/info-screen/components/Heading'
import {Header} from 'app/components/Header'

export function InfoScreen() {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'rgb(30, 30, 30)'}}
      contentContainerStyle={{paddingBottom: 40}}>
      <Header />
      <CodePushDescription />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          paddingVertical: 10,
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
    </ScrollView>
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
