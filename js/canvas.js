// พื้นหลังแบบ: ตัวอักษรร่วงลงมา (Matrix Rain)
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ===== ปรับแต่งได้ตรงนี้ =====
const fontSize = 16;        // ขนาดตัวอักษร
const fps = 30;             // ยิ่งน้อยยิ่งตกช้า
const trail = 0.08;         // ยิ่งน้อย หางยิ่งยาว
const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]=+*#$%".split("");
canvas.style.opacity = 0.45; // ความเข้มของพื้นหลัง (0-1) ลดลงถ้าอ่านเนื้อหาไม่ถนัด

let w, h, drops;
let last = 0;

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  w = innerWidth;
  h = innerHeight;

  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  ctx.fillStyle = "#020403";
  ctx.fillRect(0, 0, w, h);

  // หนึ่งคอลัมน์ต่อหนึ่งสาย เริ่มต้นที่ตำแหน่งสุ่มเหนือจอ
  const columns = Math.floor(w / fontSize);
  drops = Array.from({ length: columns }, () =>
    Math.floor((Math.random() * -h) / fontSize)
  );
}

function animate(now) {
  requestAnimationFrame(animate);

  // จำกัดความเร็วให้เป็นไปตามค่า fps
  if (now - last < 1000 / fps) return;
  last = now;

  // ลงสีดำโปร่งใสทับของเดิม ทำให้เกิดหางจางๆ
  ctx.fillStyle = `rgba(2, 4, 3, ${trail})`;
  ctx.fillRect(0, 0, w, h);

  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    // ตัวหัวแถวบางตัวเป็นสีขาว ที่เหลือเขียว
    ctx.fillStyle = Math.random() > 0.97 ? "#ffffff" : "#00ff88";
    ctx.fillText(char, x, y);

    // ถึงขอบล่างแล้วสุ่มกลับไปเริ่มบนสุดใหม่
    if (y > h && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

window.addEventListener("resize", resize);

resize();
requestAnimationFrame(animate);