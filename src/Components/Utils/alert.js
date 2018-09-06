import React, { Component } from 'react';

const _Alert = (props)=>{
    return (
        <div id="pageAlert">
            <div className="container">
                <div className="msgblock">
                    คุกกี้คือไฟล์ที่สร้างขึ้นโดยเว็บไซต์ที่คุณเคยเข้าชม เพื่ออำนวยความสะดวกในการใช้งาน หากคุณไม่เปลี่ยนการตั้งค่าคุกกี้ (setting) เว็บไซต์จะบันทึกว่าคุณอนุญาตให้เราเก็บข้อมูลการใช้งานบน
                    </div>
                    <div className="linkBlock">
                    <a href="/ms/en_TH/privacy_policy/privacy_policy.html">
                    Privacy policy</a><span className="pipeSeparator"> | </span><a href="/ms/en_TH/privacy_policy/cookie_policy.html">Read more about cookies</a>
                    </div>
                </div>
            </div>
    )
}
export default _Alert;