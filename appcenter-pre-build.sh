#!/usr/bin/env bash


if [ "$APPCENTER_BRANCH" != "master" ]; then
  if [ -n "$APPCENTER_XCODE_PROJECT" ]; then
    current_version=$(/usr/libexec/PlistBuddy -c "Print :CFBundleShortVersionString" "$APPCENTER_SOURCE_DIRECTORY/ios/RNSkolenApp/Info.plist")
    new_version="$current_version-$APPCENTER_BRANCH"
    echo "Setting iOS version to $new_version"
    /usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString $new_version" "$APPCENTER_SOURCE_DIRECTORY/ios/RNSkolenApp/Info.plist"
  fi
  if [ -n "$APPCENTER_ANDROID_VARIANT" ]; then
    current_version=$(grep -o 'versionName "[^"]*"' "$APPCENTER_SOURCE_DIRECTORY/android/app/build.gradle" | cut -d '"' -f 2)
    new_version="$current_version-$APPCENTER_BRANCH"
    echo "Setting Android version to $new_version"
    sed -i '' "s/versionName \"$current_version\"/versionName \"$new_version\"/" "$APPCENTER_SOURCE_DIRECTORY/android/app/build.gradle"
  fi
fi
