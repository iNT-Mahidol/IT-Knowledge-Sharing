---
slug: import-excel-to-asana
title: นำข้อมูลเข้า Asana จากไฟล์ Excel ง่ายๆ
description: เรียนรู้วิธีการนำเข้าข้อมูลจากไฟล์ Excel ไปยัง Asana อย่างง่ายดาย เพื่อเพิ่มประสิทธิภาพในการจัดการงานของคุณ
authors: [patipat]
tags: [asana, excel, นำเข้า, การจัดการงาน]
image: img/Asana_Import_Data_from_Excel.jpg
---

![Import Excel Data to Asana](./asana/import-data/Asana_Import_Data_from_Excel.jpg)

ต้องการนำข้อมูลจาก Excel เข้าสู่ Asana เพื่อการจัดการงานที่มีประสิทธิภาพมากขึ้น? เรามีวิธีง่ายๆ มาฝาก!
<!-- truncate -->

## ขั้นตอนการนำข้อมูลจาก Excel เข้า Asana

1. **เตรียมข้อมูล** โดยจะต้องมีการใส่ชื่อคอลัมน์ที่จะนำเข้าไว้บนสุดที่แถวที่ 1
    ![เตรียมข้อมูล](./asana/import-data/1_prepare.png)

    [ตัวอย่างไฟล์ Excel สำหรับนำเข้า](./asana/import-data/ImportDataToAsana.xlsx)

    ไฟล์ตัวอย่างข้อมูลจะมีคอลัมน์ดังนี้:
    - ชื่อเรื่องผู้ประดิษฐ์
    - วันที่เอกสารเข้า (เก็บในรูปแบบวันที่)
    - เลขที่หนังสือ
    - เลขที่ลงรับ iNT
    - สถานะการดำเนินงาน

2. **บันทึกไฟล์ในรูปแบบ CSV** โดยไปที่เมนู `File` > `Save as` และเลือกเป็นแบบ `CSV UTF-0 (Comma delimited) (*.csv)`
    ![บันทึกไฟล์ CSV](./asana/import-data/2_save_csv.JPG)
    จะได้ไฟล์ CSV ที่เป็นข้อมูลที่เตรียมไว้โดยสามารถสังเกตุได้จากรูปตัวอย่างด้านล่าง
    ![ตัวอย่างไฟล์ CSV](./asana/import-data/2_file_detail.JPG)
    หมายเหตุ: สามารถปรับเปลี่ยนมุมมองของ Folder ให้เป็น Detail เพื่อเห็นนามสกุลไฟล์ได้
    ![เปิดไฟล์ extension](./asana/import-data/2_file_ext.JPG)
3. **ไปที่ Asana** เลือกทีมที่ต้องการ ไปที่แทป `All work` และกด `New Project`
    ![เลือกทีมใน Asana](./asana/import-data/3_new_project.jpg)

4. **เลือก Import Project**
    ![Import Project](./asana/import-data/4_import_project.jpg)

5. **ตั้งชื่อโปรเจ็คที่ต้องการ** และกด `Select file to import`
    ![ตั้งชื่อโปรเจ็ค](./asana/import-data/5_projectname.jpg)

6. **เลือกไฟล์ที่เป็นสกุล CSV** สังเกตุจาก Type `Microsoft Excel Comma Separated Value File` หรือตรงส่วน Preview เป็นข้อมูลลักษณะคล้ายดังรูป เมื่อเลือกแล้วรอกระบวนการอัพโหลด และกด `Continue`
    ![เลือกไฟล์ CSV](./asana/import-data/6_select_csv.jpg)
    ![Uploaded CSV](./asana/import-data/6_uploaded_csv.jpg)

7. **กดเลือก Direct Import**
    ![Direct Import](./asana/import-data/7_direct_import.jpg)

8. **แสดงตัวอย่างข้อมูล** ทำการกด `make change` เพื่อปรับประเภทข้อมูล
    ![แสดงตัวอย่างข้อมูล](./asana/import-data/8_make_change.jpg)
    จากข้อมูลข้างต้น วันที่เอกสารเข้า จะต้องเปลี่ยนเป็น `Date` และสถานะการดำเนินการ จะเปลี่ยนเป็น `Single Select` โดยกดที่ช่องข้อมูลและเลือกประเภทข้อมูลที่ต้องการ และเมื่อปรับเสร็จแล้วกด `Continue to project`
    ![ปรับประเภทข้อมูล](./asana/import-data/8_change_type.jpg)

9. **รอการนำเข้าข้อมูลจนเสร็จ**
    ![รอการนำเข้า](./asana/import-data/9_view_imported.jpg)

