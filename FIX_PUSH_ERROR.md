# 🔧 แก้ไข Error: "failed to push some refs"

Error นี้เกิดเพราะ **GitHub มีไฟล์ที่ local ไม่มี**

---

## ✅ วิธีแก้ (ง่ายสุด)

ใน PowerShell พิมพ์ **2 คำสั่ง**:

### คำสั่ง 1:
```powershell
git pull origin main --allow-unrelated-histories
```

**รอให้เสร็จ** (อาจขอให้กด Yes)

### คำสั่ง 2:
```powershell
git push -u origin main
```

---

## ✅ เสร็จแล้ว!

ลองเช็ค GitHub ว่าเห็นไฟล์หรือไม่

---

## 🤔 ถ้ายังไม่ได้ลอง

**ก่อนลองวิธีข้างบน**:

1. เช็ค ชื่อ GitHub ว่าถูกต้องหรือไม่
   - ชื่อของคุณ: `safetyvac2021-lgtm` ✓
   
2. เช็ค Repository URL ว่าถูกต้องหรือไม่
   - URL: `https://github.com/safetyvac2021-lgtm/KPI-Sales-Dashboard.git` ✓

ถ้าถูกต้องแล้ว ลองวิธีข้างบน

---

## 📝 สรุป

```
Error เกิด
    ↓
ทำคำสั่ง 1: git pull origin main --allow-unrelated-histories
    ↓
ทำคำสั่ง 2: git push -u origin main
    ↓
✅ สำเร็จ!
```

---

**ส่ง Output PowerShell มาถ้ายังไม่ได้!** 📸
