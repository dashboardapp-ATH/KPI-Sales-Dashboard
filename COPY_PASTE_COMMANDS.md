# 📋 Copy-Paste Commands (คัดลอกแล้วใช้เลย)

ไฟล์นี้มีคำสั่งที่พร้อม Copy-Paste ใช้ได้เลย!

---

## 🎯 เรียงตามลำดับ

### 1️⃣ ตั้งค่า Git (ทำครั้งเดียว)

**ที่ต้องทำ**: บอก Git ชื่อและอีเมลของคุณ

**คำสั่ง**:
```powershell
git config --global user.name "Somchai Samart"
git config --global user.email "somchai@gmail.com"
```

⚠️ **แทนที่**:
- `Somchai Samart` → ชื่อจริงของคุณ
- `somchai@gmail.com` → อีเมลของคุณ

---

### 2️⃣ เปิด PowerShell ที่โฟลเดอร์

**ขั้นตอน**:
1. ค้นหา PowerShell
2. เปิด
3. พิมพ์คำสั่ง:

```powershell
cd D:\VS\ CODE
```

**ตรวจสอบ**: ควรเห็น `PS D:\VS CODE>`

---

### 3️⃣ เริ่มต้น Git

```powershell
git init
```

**ผลลัพธ์คาดหวัง**:
```
Initialized empty Git repository in D:\VS CODE\.git/
```

---

### 4️⃣ เพิ่มไฟล์

```powershell
git add .
```

(ไม่มี output ปกติ)

---

### 5️⃣ บันทึก

```powershell
git commit -m "Initial commit: KPI Sales Dashboard"
```

**ผลลัพธ์คาดหวัง**:
```
[master (root-commit) abc1234] Initial commit: KPI Sales Dashboard
 7 files changed, 500 insertions(+)
```

---

### 6️⃣ ตั้ง URL GitHub

⚠️ **ต้องแทนที่ `YOUR_USERNAME`** ด้วยชื่อ GitHub จริงของคุณ!

**ตัวอย่าง**:
- ชื่อ GitHub: `somchai99`
- URL จะเป็น: `https://github.com/somchai99/KPI-Sales-Dashboard.git`

**คำสั่ง**:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/KPI-Sales-Dashboard.git
```

**ตัวอย่างที่แก้ไขแล้ว**:
```powershell
git remote add origin https://github.com/somchai99/KPI-Sales-Dashboard.git
```

---

### 7️⃣ เปลี่ยน Branch

```powershell
git branch -M main
```

---

### 8️⃣ อัพโหลด

```powershell
git push -u origin main
```

**ผลลัพธ์คาดหวัง**:
```
Enumerating objects: 7, done.
...
To https://github.com/YOUR_USERNAME/KPI-Sales-Dashboard.git
 * [new branch]      main -> main
```

---

## 🔄 หลังจากแก้ไขโค้ด

ถ้าคุณแก้ไขไฟล์ และต้องการอัพโหลดใหม่:

```powershell
git status
git add .
git commit -m "Feat: อธิบายการเปลี่ยนแปลง"
git push origin main
```

---

## 📝 สำหรับทั้งหมดพร้อม ๆ

**Copy ทั้งหมด** แล้วทำตามลำดับ:

```powershell
# 1. ตั้งค่า
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# 2. ไปที่โฟลเดอร์
cd D:\VS\ CODE

# 3. เริ่มต้น
git init

# 4. เพิ่มไฟล์
git add .

# 5. บันทึก
git commit -m "Initial commit: KPI Sales Dashboard"

# 6. เชื่อมต่อ (แทน YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/KPI-Sales-Dashboard.git

# 7. เปลี่ยน Branch
git branch -M main

# 8. อัพโหลด
git push -u origin main
```

---

## 🆘 Troubleshooting Commands

### ตรวจสอบสถานะ

```powershell
git status
```

ดูว่าไฟล์ไหนเปลี่ยนแปลง

### ดูประวัติ Commit

```powershell
git log
```

### ลองอีกครั้งถ้าเชื่อมต่อผิด

```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/KPI-Sales-Dashboard.git
```

### ดู Remote ที่เชื่อมต่อแล้ว

```powershell
git remote -v
```

---

## 🚀 Copy-Paste สำหรับแต่ละคำสั่ง

### Command 1: Git Config

```
git config --global user.name "Somchai Samart"
```

```
git config --global user.email "somchai@gmail.com"
```

### Command 2: Change Directory

```
cd D:\VS\ CODE
```

### Command 3: Init

```
git init
```

### Command 4: Add

```
git add .
```

### Command 5: Commit

```
git commit -m "Initial commit: KPI Sales Dashboard"
```

### Command 6: Remote Add

```
git remote add origin https://github.com/YOUR_USERNAME/KPI-Sales-Dashboard.git
```

### Command 7: Branch

```
git branch -M main
```

### Command 8: Push

```
git push -u origin main
```

---

## 📋 Checklist

ติดตามให้แน่ใจว่า:

```
☐ สร้างบัญชี GitHub
☐ ติดตั้ง Git
☐ สร้าง Repository บน GitHub
☐ เปิด PowerShell ที่โฟลเดอร์
☐ ตั้งค่า user.name และ user.email
☐ รัน git init
☐ รัน git add .
☐ รัน git commit -m "..."
☐ รัน git remote add origin [URL]
☐ รัน git branch -M main
☐ รัน git push -u origin main
☐ เช็ค GitHub Repository เห็นไฟล์หรือไม่
```

---

## ⚠️ ส่วนที่ต้องแก้ไข

### ❌ ไม่ต้องแก้

- `git init` ✅ ใช้ได้เลย
- `git add .` ✅ ใช้ได้เลย
- `cd D:\VS\ CODE` ✅ ใช้ได้เลย (ถ้าเป็นเส้นทางจริง)

### ⚠️ ต้องแก้ไข

- **`Your Name`** → ชื่อของคุณ
- **`your@email.com`** → อีเมลของคุณ
- **`YOUR_USERNAME`** → ชื่อ GitHub ของคุณ

---

## 🎯 ตัวอย่างที่เสร็จแล้ว

```powershell
# ตั้งค่า (ทำ 1 ครั้ง)
git config --global user.name "Somchai Samart"
git config --global user.email "somchai@email.com"

# ลำดับการอัพโหลด
cd D:\VS\ CODE
git init
git add .
git commit -m "Initial commit: KPI Sales Dashboard"
git remote add origin https://github.com/somchai99/KPI-Sales-Dashboard.git
git branch -M main
git push -u origin main
```

**จัดแต่ละส่วน**:
- `Somchai Samart` ← ชื่อของคุณ
- `somchai@email.com` ← อีเมลของคุณ
- `somchai99` ← ชื่อ GitHub ของคุณ

---

## ✅ เมื่อ git push สำเร็จ

คุณจะเห็น:

```
To https://github.com/YOUR_USERNAME/KPI-Sales-Dashboard.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

**ความหมาย**: ✅ สำเร็จแล้ว!

---

**สำหรับการช่วยเหลือ:** อ่าน GITHUB_BEGINNER.md และ VISUAL_GUIDE.md 📚

**Last Updated**: 5 กุมภาพันธ์ 2026
