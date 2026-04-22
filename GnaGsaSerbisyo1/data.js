// data.js — Initial seed data for GnaGsaSerbisyo

const EXCEL_MEDS = [
  {name:"METFORMIN HYDROCHLORIDE",lab:"SAPHIRE LIFESCIENCES",mg:"500mg",qty:"90 TABLETS",mfg:"2025-06-24",exp:"2027-05-01",box:200,piece:1800},
  {name:"METFORMIN HYDROCHLORIDE",lab:"SAPHIRE LIFESCIENCES",mg:"500mg",qty:"90 TABLETS",mfg:"2025-03-23",exp:"2027-02-01",box:200,piece:1800},
  {name:"ASCORBIC ACID VIT CEE",lab:"DIAMOND LABORATORIES",mg:"100mg",qty:"48",mfg:"2025-11-24",exp:"2026-11-01",box:4,piece:192},
  {name:"LOSARTAN POTASSIUM",lab:"SAPHIRE LIFESCIENCES",mg:"50mg",qty:"97",mfg:"2025-04-24",exp:"2027-03-27",box:970,piece:29100},
  {name:"AMLODIPINE BESILATE",lab:"PHIL. PHARMAWEALTH INC",mg:"5mg",qty:"30",mfg:"2025-04-24",exp:"2027-03-27",box:627,piece:18800},
  {name:"ASCORBIC ACID VIT-CEE SYRUP",lab:"DIAMOND LABORATORIES",mg:"100 MG 5/ML",qty:"",mfg:"2024-11-01",exp:"2026-11-01",box:0,piece:215},
  {name:"MULTI VITAMINS MYREVIT CAPSULE",lab:"NEW MYREX LABORATORIES",mg:"",qty:"",mfg:"2025-05-01",exp:"2027-05-01",box:69,piece:6900},
  {name:"MULTI VITAMINS MYREVIT SYRUP FOR KIDS",lab:"NEW MYREX LABORATORIES",mg:"120 ML",qty:"",mfg:"",exp:"",box:0,piece:66},
  {name:"PARACETAMOL ANALGESIC",lab:"LUMAR PHARMACEUTICAL LAB",mg:"125mg",qty:"",mfg:"2024-04-01",exp:"2026-04-01",box:0,piece:77},
  {name:"PARACETAMOL OFF-COLDS",lab:"AZARIAS PHARMA",mg:"2mg",qty:"",mfg:"2024-04-01",exp:"2026-04-01",box:0,piece:75},
  {name:"PARACETAMOL REMOL 500",lab:"RHYDBURG PHARMA",mg:"500mg",qty:"",mfg:"2025-03-01",exp:"2029-03-01",box:0,piece:76},
  {name:"PARACETAMOL RASP BERRY SYRUP FOR KIDS",lab:"AZARIAS PHARMA",mg:"15 ML",qty:"",mfg:"2025-06-01",exp:"2027-06-01",box:0,piece:77},
  {name:"MULTIVITAMINS MYREVIT ORAL DROPS FOR KIDS",lab:"NEW MYREX LABORATORIES",mg:"15ML",qty:"",mfg:"2025-07-01",exp:"2027-07-01",box:0,piece:79}
];

const INIT_DEVICES = [
  {name:"Blood Pressure Monitor",cat:"Blood Pressure Monitor",brand:"Omron HEM-7120",serial:"BP-001",qty:5,cond:"Good",notes:"Standard digital BP monitor"},
  {name:"Blood Pressure Monitor",cat:"Blood Pressure Monitor",brand:"Omron HEM-7140",serial:"BP-002",qty:3,cond:"New",notes:"Wrist type BP monitor"},
  {name:"Manual Wheelchair",cat:"Wheelchair",brand:"Karma",serial:"WC-001",qty:4,cond:"Good",notes:"Standard adult wheelchair"},
  {name:"Foldable Wheelchair",cat:"Wheelchair",brand:"Drive Medical",serial:"WC-002",qty:2,cond:"Good",notes:"Lightweight foldable"},
  {name:"Underarm Crutches",cat:"Crutches",brand:"Generic",serial:"CR-001",qty:8,cond:"Fair",notes:"Adjustable height"},
  {name:"Glucometer",cat:"Glucometer",brand:"Accu-Chek",serial:"GL-001",qty:3,cond:"New",notes:"Includes test strips"}
];

const INIT_USERS = [
  {u:'admin',p:'admin1234',role:'Administrator',isAdmin:true},
  {u:'encoder',p:'enc1234',role:'Encoder',isAdmin:false}
];
