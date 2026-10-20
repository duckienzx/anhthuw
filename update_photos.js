const fs = require('fs');

const photoData = {};
// Quét tự động các file ảnh 1 đến 10 với mọi định dạng phổ biến
for (let i = 1; i <= 10; i++) {
  const candidates = [i + '.jpg', i + '.jpe', i + '.jpeg', i + '.png', i + '.webp'];
  for (const file of candidates) {
    if (fs.existsSync(file)) {
      const buf = fs.readFileSync(file);
      const ext = file.endsWith('.png') ? 'png' : (file.endsWith('.webp') ? 'webp' : 'jpeg');
      photoData[i] = 'data:image/' + ext + ';base64,' + buf.toString('base64');
      console.log('Da nap anh ' + i + ': ' + file);
      break;
    }
  }
}

fs.writeFileSync('photos_data.js', 'window.PHOTOS_DATA = ' + JSON.stringify(photoData) + ';\n', 'utf8');
console.log('Da cap nhat photos_data.js thanh cong voi ' + Object.keys(photoData).length + ' anh!');