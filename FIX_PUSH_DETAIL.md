# 📊 ปัญหา: "failed to push some refs"

**ปัญหาที่คุณเจอ**:
```
error: failed to push some refs to 'https://github.com/safetyvac2021-lgtm/KPI-Sales-Dashboard.git'
```

---

## 🔍 เหตุผล

GitHub มี file ที่ local ไม่มี เช่น:
- README.md (ถ้าสร้างไป)
- .gitignore (ถ้าสร้างไป)
- LICENSE (ถ้าสร้างไป)

---

## ✅ วิธีแก้ (2 ขั้นตอน)

### ขั้นตอนที่ 1: ดึง file จาก GitHub ลงมา

**ใน PowerShell หรือ Git Bash**:
```
git pull origin main --allow-unrelated-histories
```

**จะเห็น**:
```
From https://github.com/safetyvac2021-lgtm/KPI-Sales-Dashboard
 * branch            main       -> FETCH_HEAD
 * [new branch]      main       -> origin/main
Merge made by the 'ort' strategy.
```

**ไม่เป็นไร ให้ทำขั้นตอนที่ 2 ต่อ**

---

### ขั้นตอนที่ 2: อัพโหลด

```
git push -u origin main
```

**จะเห็น**:
```
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

**✅ เสร็จแล้ว!**

---

## 📝 Full Commands

**Copy-Paste ตามนี้**:

```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## 🆘 ถ้ายังไม่ได้

**ปัญหา 1**: PowerShell บอก "git: command not found"

→ ดู [GIT_NOT_INSTALLED.md](GIT_NOT_INSTALLED.md)

**ปัญหา 2**: ยังเจอ error

→ ส่ง Output PowerShell มา 📸

---

**Good luck! 🚀**
