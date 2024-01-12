# Starte opp appen

1. Sjekk at du står på den branchen du ønsker og sjekk evt diff.
2. Åpne Simulator (iOS) eller Emulator (Android) og åpne appen du installerte sist.
3. Kjør **npm start** på rotnivå i repoet. Dette starter Metro som bundler JavaScripten for oss.
4. Reload JavaScripten i appen med “control, command, z” for iOS eller “command, m” for Android.
5. Alternativt kan du kjøre **npm run ios** eller **npm run android**. Da installeres både native-delen og JavaScript-delen av appen på nytt.

## Installere appen for første gang eller legge til nye pakker

Det her må også gjøres hvis du bytter mellom brancher i repoet som inneholder ulike pakker.

1. Kjør **npm install** for å installere pakkene i node_modules
2. Kjør **npm run pod-install** for å installere evt native-kode som pakkene inneholder. Dette trengs bare på iOS.
3. Kjør **npm run ios** eller **npm run android**.

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

**Steg 2: Legg til et Atom**
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



## Animasjoner i React Native: ReAnimated og Gesture Handler

Denne guiden egner seg hvis du starter med branchen "**fagdag-med-recoil**". Løsningsforslaget er branchen "fagdag-med-reanimated". (OBS: Når man jobber med animasjoner som kjører på native-prosessen, som de som regel gjør med ReAnimated, så kan det være at instruksene som defineres i JSen og blir sendt til native-laget ikke blir oppdatert ved hot-releoading på save. Mistenker man at det skjer så kan det være lurt å reloade appen).

**Steg 1: ReAnimated: Layout Transitions**
1. Legg til npm-pakken til ReAnimated som beskrevet her: [https://recoiljs.org/docs/introduction/getting-started](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started). Husk å velge "NPM" og ikke "Expo". Babel-pluginen kan være tricky å plassere riktig, så her kan det være greit å se på løsningsforslaget.
2. ReAnimated legger til endringer i native-koden så du må huske å kjøre ```npm run pod-install``` og ```npm run ios``` for å reinstallere appen.
3. Nå kan du prøve å legge på en Layout Transition på ScheduleSection-komponenten. Layout transitions prøver å automatisk lage fine overganger på egenhånd når innholdet i komponenten endrer seg. ReAnimated sin dokumentasjon er ganske bra: https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/layout-transitions/

**Steg 2: ReAnimated: useSharedValue**
1. Dokumentasjonen til ReAnimated er veldig god, så her ville jeg startet med å se igjennom [Your first animation](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/your-first-animation/) og [Animating styles and props]([https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/your-first-animation/](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/animating-styles-and-props))
2. Deretter kan du for eksempel prøve å animere stjerna som dukker opp når brukeren velger en talk til å bli en favoritt.

**Steg 3: Gesture Handler (Avansert!)**

React Native Gesture Handler er et bibliotek som erstatter React Native sitt innebygde touch system. Hvis du har lyst til å prøve deg på dette så ville jeg startet her og prøvd meg litt fram: [Introduction](https://docs.swmansion.com/react-native-gesture-handler/docs/).

I løsningsforslaget har jeg lagt til "swipe til høyre for å slette" på Favoritter-skjermen, så det går an å prøve seg på noe lignende og så kan vi diskutere i møtet hvordan det kan løses.


## Fetche data med React Native: Legg til Sanity

Denne guiden egner seg hvis du starter med branchen "**fagdag-med-recoil**". Løsningsforslaget er branchen "fagdag-med-sanity".

1. For å hente data fra Sanity legger vi til npm-pakken deres: https://www.npmjs.com/package/@sanity/client
2. Vi ønsker kun å hente data fra Sanity så vi trenger ikke noe api-token. Det holder å initialisere Sanity med verdiene under, og kjøre ```client.fetch``` som beskrevet på npmjs.com.

  projectId: '14t3i8qn',
  dataset: 'program',
  useCdn: false,
  apiVersion: '2022-10-04'

Å fetche data med React Native er relativt rett fram. Her kan du lese mer om det: https://reactnative.dev/docs/network

---

## Installere appen på telefonen med kabel

1. Logg inn med Apple-id i Xcode: Xcode (menyen) -> Settings -> Accounts -> Trykk på “pluss”
2. Trykk på “RNSkolenApp” under TARGETS -> “Signing & capabilities” -> Release -> Skriv inn unik Bundle Identifier -> Huk av for “Automatically manage signing”
3. Velg “Navnet ditt” som team
4. Velg den tilkoblede telefonen i statuslinja øverst
5. Trykk på “Play”-knappen.
6. Når du får opp beskjeden “Ikke godkjent utvikler” på telefonen: Innstillinger -> Generelt -> VPN og enhetsadministrering -> App fra utvikler -> Godkjenn
7. Trykk “Play” igjen.


## Publisere appen til App Store

1. Lag developer konto.
2. Lag en identifier med samme id som i Xcode: 
    1. Gå til https://developer.apple.com/account
    2. Velg “Identifiers”
    3. Registrer ny AppID
    4. Bytt ut “Bundle identifier” i Xcode med IDen du valgte.
3. Lag et “Apple Distribution”-sertifikat. Dette identifiserer deg som utvikler:
    1. Det er enklest å lage dette fra “Accounts” i Xcode.
    2. Trykk på “Manage Certificates”
    3. Trykk på “Pluss” og Apple Distribution
4. Lag en provisioning profile. Denne brukes når appen skal bygges for å si hvem som har laget appen og hvem den skal distribueres til:
    1. Gå til https://developer.apple.com/account
    2. Velg “Profiles”
    3. Registrer ny Provisioning Profile for App Store med AppIDen du lagde.
    4. Legg den til i Xcode, enten ved å gå til Accounts og trykk på “Download manual profiles” eller ved å laste den ned og importere den.
5. Bygge app og last opp til App Store
    1. Gå til Product -> Archive i menyen
    2. Du kommer til å bli spurt om passord 2 ganger på rad, for at Xcode skal få tilgang til Keychain på macen. 
    3. Mens appen bygger så kan du gå til https://developer.apple.com/account og trykk på Apps
    4. Opprett en app der som Xcode skal laste opp til. (SKU kan feks være det samme som AppIDen din).
    5. Når bygget er ferdig, trykk på “Distribute App”
6. Sende inn til review
    1. Det kan ta 5-10 minutter før bygget du lastet opp blir tilgjengelig for publisering. Du vil få mail når det er klart.
    2. For å få lov til å sende inn bygget til review og for å få innsendingen godkjent så krever Apple at det fylles ut litt informasjon. Du vil få beskjed om hva som kreves når du prøver å sende inn. Dette er noe av det som trengs:
        1. Screenshot for telefoner med 5,5 tommer skjerm.
        2. Description
        3. Keywords
        4. Support URL
        5. Copyright
        6. Category
        7. Age Rating
        8. Content Rights
        9. App Availability
        10. Pricing

