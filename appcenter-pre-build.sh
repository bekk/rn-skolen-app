#!/usr/bin/env bash

# Sett versjonen på iOS
if [ "$APPCENTER_BRANCH" != "master" ]; then
  echo "Setting iOS version to $APPCENTER_BRANCH"
  plutil -replace CFBundleShortVersionString -string "$APPCENTER_BRANCH" $APPCENTER_SOURCE_DIRECTORY/ios/RNSkolenApp/Info.plist
fi

# Sett versjonen på Android
if [ "$APPCENTER_BRANCH" != "master" ]; then
  echo "Setting Android version to $APPCENTER_BRANCH"
  sed -i "s/versionName \".*\"/versionName \"$APPCENTER_BRANCH\"/" $APPCENTER_SOURCE_DIRECTORY/android/app/build.gradle
fi