# IT Knowledge Sharing

## ยินดีต้อนรับสู่ iNT Knowledge Sharing Platform!

แพลตฟอร์มนี้ถูกพัฒนาขึ้นเพื่อเป็นแหล่งรวมความรู้และแบ่งปันข้อมูลที่เป็นประโยชน์สำหรับบุคลากรของสถาบัน iNT มหาวิทยาลัยมหิดล

## เกี่ยวกับโปรเจกต์

โปรเจกต์นี้ใช้ Docusaurus ซึ่งเป็นเครื่องมือที่ช่วยในการสร้างเว็บไซต์เอกสารและ Knowledge Base ได้อย่างง่ายดาย

## การเริ่มต้นใช้งาน

### สิ่งที่ต้องมี

* Node.js (เวอร์ชัน >= 18)
* Yarn

### ขั้นตอนการติดตั้ง

1. Clone repository นี้:
    ```bash
    git clone https://github.com/iNT-Mahidol/IT-Knowledge-Sharing.git
    ```
2. เข้าไปในโฟลเดอร์โปรเจกต์:
    ```bash
    cd IT-Knowledge-Sharing
    ```
3. ติดตั้ง dependencies โดยใช้ Yarn:
    ```bash
    yarn install
    ```
4. รันโปรเจกต์:
    ```bash
    yarn start
    ```
5. เปิดเว็บบราวเซอร์และเข้าไปที่ `http://localhost:3000` เพื่อดูเว็บไซต์

## การพัฒนา

หากต้องการมีส่วนร่วมในการพัฒนาโปรเจกต์นี้ สามารถทำได้โดย:

1. สร้าง branch ใหม่:
    ```bash
    git checkout -b feature/your-feature
    ```
2. แก้ไขโค้ด

3. Commit การเปลี่ยนแปลง:
    ```bash
    git commit -m "Add your feature"
    ```
4. Push branch ขึ้น repository:
    ```bash
    git push origin feature/your-feature
    ```
5. สร้าง Pull Request เพื่อรวม branch ของคุณเข้ากับ branch หลัก

## การปรับแต่ง

คุณสามารถปรับแต่งเว็บไซต์ได้ตามต้องการ โดยแก้ไขไฟล์ต่างๆ ใน directory `src` และ `docs`

## การใช้งาน

* `yarn start`: เริ่ม development server
* `yarn build`: สร้าง build สำหรับ production
* `yarn deploy`: deploy เว็บไซต์