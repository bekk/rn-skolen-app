#!/usr/bin/env bash


if [ "$APPCENTER_BRANCH" != "master" ]; then
  if [ -n "$APPCENTER_XCODE_PROJECT" ]; then
    echo "Setting iOS version to $APPCENTER_BRANCH"
    plutil -replace CFBundleShortVersionString -string "$APPCENTER_BRANCH" $APPCENTER_SOURCE_DIRECTORY/ios/RNSkolenApp/Info.plist
  fi
  if [ -n "$APPCENTER_ANDROID_VARIANT" ]; then
    echo "Setting Android version to $APPCENTER_BRANCH"
    sed -i '' "s/versionName \".*\"/versionName \"$APPCENTER_BRANCH\"/" $APPCENTER_SOURCE_DIRECTORY/android/app/build.gradle
  fi
fi
