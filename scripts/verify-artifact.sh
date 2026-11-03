#!/usr/bin/env bash
set -euo pipefail

ARTIFACT="artifacts/software-packaging-mastery-1.0.0.tgz"
CHECKSUM_FILE="artifacts/SHA256SUMS"

if [[ ! -f "$ARTIFACT" ]]; then
  echo "ERROR: Package artifact not found."
  exit 1
fi

if [[ ! -f "$CHECKSUM_FILE" ]]; then
  echo "ERROR: SHA256 checksum file not found."
  exit 1
fi

echo "Verifying SHA256 checksum..."

shasum -a 256 -c "$CHECKSUM_FILE"

echo "Artifact integrity verified successfully."
