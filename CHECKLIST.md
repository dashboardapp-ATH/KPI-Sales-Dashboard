# ✓ Checklist ลากเครื่องหมาย

ทำตามหลังเครื่องหมาย ☐ → ✓

---

## 📥 ตั้งค่าเริ่มต้น

- [ ] สร้างบัญชี GitHub
- [ ] ติดตั้ง Git
- [ ] เปิด PowerShell ที่ D:\VS CODE

---

## 🏠 GitHub Repository

- [ ] ไป https://github.com
- [ ] คลิก ➕ 
- [ ] เลือก "New repository"
- [ ] ใส่ชื่อ: KPI-Sales-Dashboard
- [ ] เลือก Public
- [ ] คลิก "Create repository"

---

## ⚙️ ตั้งค่า PowerShell

พิมพ์ใน PowerShell:

```powershell
git config --global user.name "ชื่อของคุณ"
git config --global user.email "อีเมลของคุณ"
```

- [ ] ตั้งค่า user.name
- [ ] ตั้งค่า user.email
- [ ] ไม่มี Error

---

## 📤 อัพโหลด

ใน PowerShell พิมพ์:

```powershell
git init
```
- [ ] git init เสร็จ

```powershell
git add .
```
- [ ] git add เสร็จ

```powershell
git commit -m "First upload"
```
- [ ] git commit เสร็จ

```powershell
git remote add origin https://github.com/YOUR_USERNAME/KPI-Sales-Dashboard.git
```
(แทน YOUR_USERNAME ด้วยชื่อ GitHub)

- [ ] git remote add เสร็จ

```powershell
git branch -M main
```
- [ ] git branch เสร็จ

```powershell
git push -u origin main
```
- [ ] git push สำเร็จ

---

## ✅ ตรวจสอบ

เปิด GitHub Repository ตรวจสอบ:

- [ ] เห็น index.html
- [ ] เห็น styles.css
- [ ] เห็น script.js
- [ ] เห็น README.md

---

## 🎉 เสร็จแล้ว!

ถ้าเครื่องหมายทั้งหมด = ✓ แสดงว่าสำเร็จ!

---

**ถ้ามี ☐ ที่ติด ส่ง Screenshot PowerShell มาให้ผม**
