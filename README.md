# Oppgaver

## Lage "Info"-skjerm

Denne guiden egner seg hvis du starter med branchen "**master**". Løsningsforslaget er branchen "fagdag-uten-navigasjon".

Vi skal nå lage siden fra https://fagdag.bekk.no/info

**Steg 1: Oppdater App.tsx**

App.tsx er hovedkomponenten som inneholder alle komponentene våre. All koden som ligger her nå er generert av initialiseringen av nytt React Native prosjekt. (NB: Dere trenger ikke ha med codePushDescription foreløpig)

1. Bytt ut all koden som App-komponenten returnerer med et ScrollView.
2. Prøv også å gi ScrollViewet en bakgrunnsfarge og få den til å dekke hele bakgrunnen ved å bruke style-propen.

https://reactnative.dev/docs/using-a-scrollview
https://reactnative.dev/docs/scrollview
https://reactnative.dev/docs/style


Nå tenker jeg det er naturlig å dele opp info-siden i to komponenter: **Header** og **InfoContent**. Vi skal etterhvert lage flere sider, og da kan vi se at Header-komponenten brukes på flere av sidene. 

**Steg 2: Lag Header-komponenten**

1. Fordi Header-komponenten skal brukes på flere sider så synes jeg det er naturlig at denne plasseres i en mappe som ligger på rotnivå i app-mappestrukturen vår. Denne mappen kaller vi components, og denne vil inneholde komponenter som brukes på tvers av flere skjermer og komponenter i appen. Opprett Header.tsx i app/components/.
2. Legg komponenten inn i ScrollViewet.
3. Fra Header-komponenten ønsker vi å returnere bildet "RebellerBilde.png". Bruk style-propen til å få bildet til å vises i full bredde. Høyden kan ha en fast pixel-verdi. (https://reactnative.dev/docs/image)

**Steg 3: Lag InfoContent-komponenten**

1. Vi skal etterhvert lage flere skjermer, og disse er det naturlig å legge inn under app/screens. Opprett InfoContent.tsx i den mappa. 
2. InfoContent kan returnere en View-komponent som har passende padding.
3. På denne siden ser det ut som at vi trenger to typer tekster: Overskrifter og vanlige tekster.
4. Lag en egen Heading-komponent under app/screens/components, som returnerer en Text-komponent med styling som får den til å se ut som en overskrift.
5. Bruk Heading-komponenten du akkurat lagde sammen med Text inne i InfoContent-komponenten. Tekster finner du i app/api/texts. Du kan bruke StyleSheet til å gjøre stylingen av tekstene gjenbrukbar: https://reactnative.dev/docs/stylesheet
6. Ekstra: Denne er litt vanskelig. Lag en Link-komponent som tar inn en url og en tekst som props, og som returnerer en visning som wrapper teksten i en Pressable og legger til underline på teksten. onPress-propen kan trigge en funksjon som bruker "Linking.openURL(url)" til å åpne urlen. (I løsningsforslaget så har jeg laget en litt mer avansert AnimatedPressable, bare for at interaksjonen skal se litt finere ut).

## Legge til navigasjon og "Program"-skjerm

Denne guiden egner seg hvis du starter med branchen "**fagdag-uten-navigasjon**". Løsningsforslaget er branchen "fagdag-med-navigasjon".

Vi skal legge til siden https://fagdag.bekk.no/program

Nå når vi skal ha flere sider i appen vår så bør vi legge til noen pakker fra react-navigation.

**Steg 1: Legg til pakker**

1. Følg "Installation" og "Installing dependencies into a bare React Native project" her https://reactnavigation.org/docs/getting-started/
2. Si ifra hvis du er usikker på steget hvor vi må overskrive en funksjon i MainActivity.java.
3. Kjør "npm run ios" på nytt for å reinstallere appen med endringene du nettopp la til.

**Steg 2: Legg til bunnmeny**

Istedenfor å ha menyen på øverste del av siden som på fagdag.no, så ønsker vi å ha menyen i bunnen. For å få til dette kan vi bruke React Navigation sin Bottom Tabs Navigator.

1. Følg første del ("Minimal example of tab-based navigation") av guiden her: https://reactnavigation.org/docs/tab-based-navigation/
2. Lag komponenter for de to skjermene våre, som du feks kan kalle InfoScreen og ProgramScreen. Disse bør ligge i sine egne mapper under screens. Eksempelvis app/screens/info-screen/InfoScreen.tsx
3. Legg skjermene inn i Tab Navigator

**Steg 3: Lag ProgramScreen-komponenten (kun listevisning)**

1. Her bør vi også bruke et ScrollView
2. Legg til Headeren som vi lagde tidligere

Her tenker jeg at innholdet kan deles opp i en egen komponent for filteret, og en egen for tidsbolkene.

**Steg 4: Lag filter-komponent**

1. Her bør vi ha en state som holder på hvilket filter som er valgt. Fordi denne staten skal brukes av flere komponenter på siden så tenker jeg at staten bør ligge i ProgramScreen-komponenten. Litt om useState i React Native: https://reactnative.dev/docs/intro-react
2. Lag en app/screens/program-screen/components/TypeFilter.tsx som viser filtrene vi kan velge mellom. I løsningsforslaget har jeg laget en generell Button-komponent for at filter-knappene skal se litt mer interaktive ut. Jeg ville enten kopiert inn denne eller prøvd å lage min egen ved å bruke Pressable fra React Native. 

**Steg 5: Lag tidsbolk-komponent**
1. Her har jeg valgt å lage en komponent som representerer en tidsbolk, som jeg har kalt "ScheduleSection". Denne tar inn et tidspunkt og alle foredragene som props, og filtrerer vekk foredragene som ikke matcher tidspunktet.
2. Selve visningen av ScheduleSection har jeg valgt å dele opp i en komponent for overskriften og en for innholdet. 
3. Bruk filter-staten til å bare vise foredragene som har samme type som filteret som er valgt.

## Lage "Mitt program"-skjerm og lagre favoritter til minnet på telefonen

Denne guiden egner seg hvis du starter med branchen "**fagdag-med-navigasjon**". Løsningsforslaget er branchen "fagdag-med-asyncstorage".

Vi skal nå legge til siden https://fagdag.bekk.no/mitt-program

I "Mitt program" så vil vi at de valgte foredragene ikke skal forsvinne selv om appen avsluttes. For å få til dette, lagrer vi hvilke foredrag som velges i minnet til telefonen med AsyncStorage.

**Steg 1: Legg til pakke som bruker AsyncStorage**
1. Følg guiden her: https://react-native-async-storage.github.io/async-storage/docs/install
2. Husk å reinstallere appen etter at pods er endret.

**Steg 2: Lag skjerm for Mitt program**
1. Sett opp skjerm på samme måte som i tidligere oppgaver.
2. Hent inn alle talks og lagre de i en variabel.
3. Lag en visning som lister opp alle talks ved å mappe over talksene og returnere TalkSection (komponenten for en talk).
4. Lag en lokal state som etterhvert skal holde på valgte talks-titler.

**Steg 3: Oppdater Program-siden**
1. Lag en lokal state på program siden som skal holde på valgte talks-titler.
2. Gjør hver talk-komponent klikkbar ved å wrappe den i Pressable eller i en selvlagd Button-komponent (ref tidligere oppgaver)
3. For å gjøre det enklere for oss selv så kan vi senere gjenbruke talk-komponenten på siden for Mitt program. Og da kan det være en god ide å trekke ut talk-komponenten i en egen komponent som legges i app/components, for så å lage en ny klikkbar variant som ligger i app/program-screen/components som tar i bruk denne.
4. Finn en måte å markere at en talk er valgt. Jeg har brukt react-native-svg til å legge til et stjerne-ikon, men det er kanskje enklere å bare legge til en border eller en bakgrunnsfarge feks.

**Steg 4: Lag funksjoner for å lagre og hente talks fra AsyncStorage**
1. Følg guiden her: https://react-native-async-storage.github.io/async-storage/docs/usage
2. Jeg valgte å bare lagre titlene på talksene som velges.
3. Jeg valgte å lage to funksjoner, en som henter talks og en som tar inn en tittel og oppdaterer lista med talks avhengig av om den finnes fra før eller ikke. Hvis den finnes fra før så sletter jeg den, hvis den ikke finnes så legger jeg den til.

**Steg 5: Bruk funksjonene du nettopp har laget**
1. Lag en funksjon i ProgramScreen som tar inn en tittel, lagrer tittelen til AsyncStorage, og oppdaterer den lokale staten på skjermen.
2. Send denne funksjonen og staten for valgte talks nedover komponenten-treet til den klikkbare talk-komponenten.

**Steg 6: Sørg for at skjermene oppdaterer seg med siste data fra AsyncStorage (dette skal vi løse på en mye finere måte i neste runde)**
1. I både ProgramScreen og MyProgramScreen, bruk useFocusEffect-hooken fra react-navigation til å oppdatere lokal state for valgte talks med den som er lagret i AsyncStorage.
2. I MyProgramScreen, bruk den lokale staten for valgte talks-titler til å filtrere ut de talksene vi vil vise.
3. Vis disse talksene ved talks-komponenten.

## Legge til Recoil for å holde på global state og lagre til minnet på en mer elegant måte

Denne guiden egner seg hvis du starter med branchen "**fagdag-med-asyncstorage**". Løsningsforslaget er branchen "fagdag-med-recoil".

Vi skal nå legge til Recoil, som vi skal bruke til å holde på en global state for valgte talks som skal vises på "Mitt program". Vi skal også bruke Recoil-atomet sin effect for å lagre staten til AsyncStorage. 

**Steg 1: Legg til Recoil**
1. Legg til Recoil som beskrevet her: https://recoiljs.org/docs/introduction/getting-started
2. Husk å reinstallere appen.

**Steg 2: Legg til et Atom **
1. Lag app/recoil-state/my-program.ts og legg til et atom som skal holde på titlene for valgte talks.
2. Se eksempel i https://recoiljs.org/docs/introduction/getting-started

Når i bruker Recoil så vil skjermene som henter inn verdiene til atomet oppdatere seg automatisk når det endres.

**Steg 3: Oppdater skjermer**
1. Fjern useFocusEffect fra begge skjermene
2. Bytt ut de lokale statene med hookene useRecoilValue og useRecoilState. 

**Steg 4: Lag hjelpefunksjoner for AsyncStorage**
1. Opprett app/recoil-state/utils.ts
2. Opprett funksjonen asyncStorageWithSetSelfEffect() som vi skal bruke som en side-effekt for atomet vårt, som vil lagre staten til AsyncStorage når den endres.
3. Denne funksjonen er litt komplisert, så her kan det være en gode ide å bruke løsningsforslaget som inspirasjon.
4. Legg den inn i atomet: https://recoiljs.org/docs/guides/atom-effects/ 

**Steg 5: Slett de gamle funksjonene for AsyncStorage**
1. Nå kan vi slette hele mappa vår som heter async-storage, fordi Recoil og hjelpefunksjonene vi laget tar seg av lagringen.

