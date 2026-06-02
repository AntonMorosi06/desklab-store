#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$HOME/Desktop/desklab-store"

echo "Creo cartella progetto: $PROJECT_DIR"
mkdir -p "$PROJECT_DIR"

echo "Copia qui dentro i file estratti dallo zip desklab-store-v0.1.zip"
echo "Poi avvia:"
echo "cd "$PROJECT_DIR""
echo "python3 -m http.server 8000"
echo "Apri: http://localhost:8000"
