#!/usr/bin/env bash
set -euo pipefail

. /etc/os-release
case "$VERSION_ID" in
  24.04) minimum=20260816ubuntu0.24.04.1 ;;
  26.04) minimum=20260816ubuntu0.26.04.1 ;;
  *) echo 'Unsupported Ubuntu release for CA remediation'; exit 1 ;;
esac
installed=$(dpkg-query -W -f='${Version}' ca-certificates)
if ! dpkg --compare-versions "$installed" ge "$minimum"; then
  sudo apt-get update -o APT::Update::Error-Mode=any
  sudo apt-get install --only-upgrade --no-install-recommends -y ca-certificates
fi
installed=$(dpkg-query -W -f='${Version}' ca-certificates)
printf 'CA package: %s; required minimum: %s\n' "$installed" "$minimum"
dpkg --compare-versions "$installed" ge "$minimum"
