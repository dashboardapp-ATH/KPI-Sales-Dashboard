# 🎬 Visual Step-by-Step Guide

คู่มือโดยใช้ภาพและคำอธิบายที่ชัดเจน

---

## 📝 Step 1: สร้างบัญชี GitHub

```
┌─────────────────────────────────────────┐
│     GitHub.com                          │
├─────────────────────────────────────────┤
│                                         │
│            Welcome to GitHub!           │
│                                         │
│   [Email Address]                       │
│   [Password]                            │
│   [Username]                            │
│                                         │
│   [Sign up for GitHub] (ปุ่มเขียว)     │
│                                         │
└─────────────────────────────────────────┘

⬇️ ตรวจสอบ Email ที่ GitHub ส่งมา
⬇️ คลิกลิงก์ Verify
✅ บัญชี GitHub พร้อมแล้ว!
```

---

## 🖥️ Step 2: ติดตั้ง Git

```
┌─────────────────────────────────────────┐
│     git-scm.com                         │
├─────────────────────────────────────────┤
│                                         │
│     [Download for Windows]              │
│     (ตัวติดตั้ง ~50MB)                  │
│                                         │
└─────────────────────────────────────────┘

1️⃣ ดับเบิลคลิก installer
2️⃣ คลิก "Next" เรื่อย ๆ
3️⃣ คลิก "Install"
4️⃣ คลิก "Finish"

✅ ติดตั้งสำเร็จ!
```

**ตรวจสอบ**:
```powershell
git --version

📤 Output:
git version 2.42.0.windows.1
```

---

## 📂 Step 3: เตรียมโฟลเดอร์

ตรวจสอบโฟลเดอร์ `D:\VS CODE` มีไฟล์:

```
D:\VS CODE\
├── index.html          ✅
├── styles.css          ✅
├── script.js           ✅
├── README.md           ✅
├── CONTRIBUTING.md     ✅
├── LICENSE             ✅
├── .gitignore          ✅
└── QUICK_START.md      ✅
```

ถ้ามีครบ = พร้อมต่อ!

---

## 🏠 Step 4: สร้าง GitHub Repository

### 4.1 เข้า GitHub

```
https://github.com
↓
คลิก "Sign in" (ขวาบน)
↓
ใส่ Email และ Password
↓
✅ เข้า Dashboard แล้ว
```

### 4.2 สร้าง Repository ใหม่

```
┌─────────────────────────────────────────┐
│ GitHub Dashboard                        │
├─────────────────────────────────────────┤
│                                         │
│ ➕ ▼ (ปุ่มสีดำ ขวาบน)                   │
│    ├─ New repository  ← คลิกนี่!        │
│    ├─ New gist                          │
│    └─ Import repository                 │
│                                         │
└─────────────────────────────────────────┘
```

### 4.3 กรอกข้อมูล

```
┌─────────────────────────────────────────┐
│ Create a new repository                 │
├─────────────────────────────────────────┤
│                                         │
│ Repository name *                       │
│ KPI-Sales-Dashboard                     │
│ (ต้องมี *)                              │
│                                         │
│ Description                             │
│ KPI Sales Dashboard - Web App           │
│ (ไม่บังคับ)                             │
│                                         │
│ ● Public   ← เลือกแบบนี้                │
│ ○ Private                               │
│ (Public = คนอื่นเห็นได้)                │
│                                         │
│ ☐ Add a README file      ← ไม่ต้อง       │
│ ☐ Add .gitignore         ← ไม่ต้อง       │
│ ☐ Choose a license       ← ไม่ต้อง       │
│                                         │
│ [Create repository] (สีเขียว)           │
│                                         │
└─────────────────────────────────────────┘
```

### 4.4 คลิก "Create repository"

```
⏳ รอ 2-3 วินาที
↓
✅ Repository ถูกสร้าง!
```

---

## 💻 Step 5: เปิด PowerShell

### วิธี 1: ขณะอยู่ใน Folder

```
1. เปิด File Explorer
2. ไปที่ D:\VS CODE
3. คลิกขวาใน Folder
4. เลือก "Open PowerShell here" หรือ "Terminal"
5. ✅ PowerShell เปิด
```

### วิธี 2: เปิด PowerShell แล้วไปที่ Folder

```
1. Windows Key + R
2. Type: powershell
3. Press: Enter
4. PowerShell เปิดแล้ว
5. Type: cd D:\VS\ CODE
6. Press: Enter
7. ✅ อยู่ใน Folder
```

---

## ⚙️ Step 6: ตั้งค่า Git

ใน PowerShell พิมพ์:

```powershell
git config --global user.name "Your Full Name"
```

**ตัวอย่าง**:
```powershell
git config --global user.name "Somchai Samart"
```

แล้วพิมพ์:

```powershell
git config --global user.email "your.email@gmail.com"
```

**ตัวอย่าง**:
```powershell
git config --global user.email "somchai@gmail.com"
```

ไม่มี error = ปกติ ✅

---

## 📤 Step 7: อัพโหลด (4 ขั้นแค่นี้)

### 7.1 เริ่มต้น Git

```powershell
git init
```

📤 Output:
```
Initialized empty Git repository in D:\VS CODE\.git/
```

### 7.2 เพิ่มไฟล์ทั้งหมด

```powershell
git add .
```

(ไม่มี output = ปกติ) ✅

### 7.3 บันทึก

```powershell
git commit -m "Initial commit: KPI Sales Dashboard"
```

📤 Output:
```
[master (root-commit) abc1234] Initial commit: KPI Sales Dashboard
 7 files changed, 500 insertions(+)
```

### 7.4 เชื่อมต่อ GitHub

```powershell
git remote add origin https://github.com/YOUR_USERNAME/KPI-Sales-Dashboard.git
```

**แทน** `YOUR_USERNAME` **ด้วยชื่อ GitHub จริง** (เช่น `somchai99`)

**ตัวอย่าง**:
```powershell
git remote add origin https://github.com/somchai99/KPI-Sales-Dashboard.git
```

ไม่มี output = ปกติ ✅

---

## 🚀 Step 8: อัพโหลดขึ้น GitHub

### 8.1 เปลี่ยน Branch

```powershell
git branch -M main
```

ไม่มี output = ปกติ ✅

### 8.2 อัพโหลด

```powershell
git push -u origin main
```

📤 Output (จะเห็นประมาณนี้):
```
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (7/7), 1.23 KiB | 1.23 MiB/s, done.
Total 7 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/YOUR_USERNAME/KPI-Sales-Dashboard.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ **สำเร็จ!!! โค้ดอยู่บน GitHub**

---

## ✅ ตรวจสอบ

1. เปิด GitHub: https://github.com/YOUR_USERNAME/KPI-Sales-Dashboard
2. ตรวจสอบไฟล์:

```
┌─────────────────────────────────────────┐
│ KPI-Sales-Dashboard                     │
├─────────────────────────────────────────┤
│                                         │
│ ✅ index.html                           │
│ ✅ styles.css                           │
│ ✅ script.js                            │
│ ✅ README.md                            │
│ ✅ CONTRIBUTING.md                      │
│ ✅ LICENSE                              │
│ ✅ .gitignore                           │
│ ✅ QUICK_START.md                       │
│                                         │
└─────────────────────────────────────────┘

ถ้าเห็นไฟล์ทั้งหมด = สำเร็จ! 🎉
```

---

## 🔗 ส่งให้คนอื่นใช้

### วิธีที่ 1: Download ZIP (ง่ายสุด)

```
1. ไป GitHub Repository
2. คลิก "Code" (สีเขียว) ↓
3. คลิก "Download ZIP"
4. ส่ง ZIP ให้เขา
5. เขาแตกไฟล์
6. เขาเปิด index.html
7. ✅ ใช้ได้เลย
```

### วิธีที่ 2: ส่งลิงก์

```
ส่งลิงก์นี้:
https://github.com/YOUR_USERNAME/KPI-Sales-Dashboard

ขั้นตอน:
1. คนอื่นคลิกลิงก์
2. คลิก "Code" → "Download ZIP"
3. แตกไฟล์
4. เปิด index.html
5. ✅ ใช้ได้
```

---

## 🆘 ถ้าเกิดปัญหา

### ❌ "fatal: not a git repository"

```
❌ ความหมาย: ลืมทำ git init

✅ วิธีแก้:
git init
git add .
git commit -m "Initial commit"
```

---

### ❌ "fatal: Authentication failed"

```
❌ ความหมาย: ชื่อ User หรือ URL ผิด

✅ วิธีแก้:
1. ตรวจสอบ GitHub Repository
2. คลิก "Code" (สีเขียว)
3. คัดลอก URL ใหม่
4. ใน PowerShell:
   git remote set-url origin [URL ใหม่]
```

---

### ❌ PowerShell พูดว่า "Permission denied"

```
❌ ความหมาย: ไม่มีสิทธิ์เข้าโฟลเดอร์

✅ วิธีแก้:
1. ปิด PowerShell
2. เปิด PowerShell "As Administrator"
   (คลิกขวา → Run as Administrator)
3. ลองใหม่
```

---

## 🎓 คำสั่งสั้น ๆ ที่ต้องจำ

```powershell
git init                          # เริ่มต้น
git add .                         # เลือกไฟล์
git commit -m "ข้อความ"          # บันทึก
git remote add origin [URL]      # เชื่อมต่อ GitHub
git branch -M main               # เปลี่ยน branch
git push -u origin main          # อัพโหลด
git status                        # ดูสถานะ
```

---

## 🎯 สรุป Workflow

```
┌─────────────────────────┐
│ 1. สร้างบัญชี GitHub    │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ 2. ติดตั้ง Git          │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ 3. สร้าง Repository     │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ 4. เปิด PowerShell      │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ 5. git init             │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ 6. git add .            │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ 7. git commit           │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ 8. git remote add       │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ 9. git push             │
└────────────┬────────────┘
             ↓
          ✅ เสร็จ!
```

---

## 📚 ไฟล์อ้างอิง

- **GITHUB_BEGINNER.md** ← อ่านสำหรับรายละเอียดเต็ม
- **QUICK_START.md** ← อ่านสำหรับเริ่มต้นเร็ว
- **SETUP_GITHUB.md** ← อ่านสำหรับขั้นตอนอื่น ๆ

---

**Good luck! ส่งให้ผมไฟล์ PowerShell Output ถ้ามีปัญหา 🚀**

**Last Updated**: 5 กุมภาพันธ์ 2026
