# GnaGsaSerbisyo — Serbisyo Management System
## Congressman Gerald Galang

---

## Project Files

```
GnaGsaSerbisyo/
  index.html          ← Main app (open this in browser)
  style.css           ← All styles
  app.js              ← Main app logic (Firebase-backed)
  data.js             ← Seed/initial data
  firebase-config.js  ← 🔑 PASTE YOUR FIREBASE CONFIG HERE
  README.md           ← This file
```

---

## Firebase Setup (5 minutes)

1. Go to **https://console.firebase.google.com**
2. Click **"Add project"** → name it `GnaGsaSerbisyo` → Create
3. Click the **`</>`** Web icon → Register your app → name it anything
4. Copy the `firebaseConfig` object shown
5. Open **`firebase-config.js`** and paste it replacing the placeholder values
6. In Firebase Console: **Build → Firestore Database → Create database**
   - Choose **Start in TEST MODE**
   - Pick your region (e.g. `asia-southeast1` for Philippines)
   - Click Enable
7. Open `index.html` in your browser — done! Data seeds automatically.

---

## How to Run

Just open `index.html` in any modern browser.
> ⚠️ Must be served via a web server (not file://) for Firebase to work.
> Use VS Code Live Server, or run: `npx serve .`

**Default accounts:**
- `admin` / `admin1234` (Administrator)
- `encoder` / `enc1234` (Encoder)

---

## Importing Old Data

### Medicine Claims
1. Go to **Medicine Claims** page
2. Click **📥 Import**
3. Upload your CSV or Excel file

**Required columns** (flexible naming):
| Column | Accepted Names |
|--------|---------------|
| Beneficiary | beneficiary, ben, beneficiary name |
| Medicine | medicine, med, medicine name |
| Type | type (Box or Piece) |
| Qty | qty, quantity |
| Date | date (YYYY-MM-DD format) |
| Dosage | dosage |
| Encoder | encoder |

### Medicine Inventory
1. Go to **Medicine Inventory** → **📥 Import**
2. Upload CSV or Excel

**Required:** `name`, `lab` — Optional: `mg`, `qty`, `mfg`, `exp`, `box`, `piece`

---

## Features
- ✅ Firebase Firestore real-time database
- ✅ Splash screen on startup
- ✅ Login with role-based access (Admin / Encoder)
- ✅ Dashboard with charts
- ✅ Medicine & Device inventory management
- ✅ Medicine & Device claims
- ✅ Claims history with date filters
- ✅ **Import from CSV or Excel** (drag & drop)
- ✅ Export to CSV
- ✅ Print reports & slips (with logo)
- ✅ Responsive pagination
- ✅ Polished UI with background image effects
- ✅ Loading animations & toast notifications
