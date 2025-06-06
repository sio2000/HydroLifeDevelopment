# Netlify Deployment Guide

## Προαπαιτούμενα
- Node.js (έκδοση 18 ή νεότερη)
- npm ή yarn

## Τοπική Εγκατάσταση
1. Κλωνοποιήστε το repository
2. Εγκαταστήστε τις εξαρτήσεις:
```bash
npm install
```
3. Εκτελέστε το project τοπικά:
```bash
npm run dev
```

## Deployment στο Netlify

### Μέθοδος 1: Απευθείας από το GitHub
1. Συνδέστε το GitHub repository σας με το Netlify
2. Οι ρυθμίσεις build είναι ήδη διαμορφωμένες στο `netlify.toml`
3. Το Netlify θα κάνει αυτόματα build και deploy

### Μέθοδος 2: Manual Upload
1. Εκτελέστε το build:
```bash
npm run build
```
2. Συμπιέστε το περιεχόμενο του φακέλου `dist` σε ένα .zip αρχείο
3. Μεταφορτώστε το .zip στο Netlify

## Ρυθμίσεις Custom Domain
1. Στο Netlify dashboard, πηγαίνετε στο "Domain settings"
2. Προσθέστε το custom domain σας
3. Ακολουθήστε τις οδηγίες για τη διαμόρφωση των DNS records

## Σημειώσεις
- Το project χρησιμοποιεί Vite, React, TypeScript και Tailwind CSS
- Όλες οι ρυθμίσεις build είναι διαμορφωμένες στο `netlify.toml`
- Το routing είναι διαμορφωμένο για SPA (Single Page Application) 