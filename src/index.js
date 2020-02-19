const { execFile } = require("child_process");
const mozjpeg = require("mozjpeg");
let path = require("path");
let fs = require("fs");

const OUT_FILE = "-outfile";
const QUALITY = "-quality";
const files = fs.readdirSync(path.resolve(__dirname, "../img"));

let quality = 60;

if (!process.argv[2]) {
  console.log(
    "Quality(5 ~ 95)를 입력하세요. 값이 없는 경우 기본으로 60으로 설정됩니다."
  );
} else {
  quality = process.argv[2];
}

files.forEach(file => {
  if (file.search(".jpg") > -1) {
    console.log(file);

    let inputAddress = path.resolve(__dirname, "../img") + "\\" + file;
    let outputAddress =
      path.resolve(__dirname, "../img/compress") + "\\" + file;

    execFile(
      mozjpeg,
      [OUT_FILE, outputAddress, QUALITY, quality, inputAddress],
      err => {
        console.log("Image minified. Output  : " + outputAddress);
        console.log("Error : " + err);
      }
    );
  }
});
