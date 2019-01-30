const { execFile } = require("child_process");
const mozjpeg = require("mozjpeg");

if (!process.argv[2]) {
	console.log("Quality(5 ~ 95)를 입력하세요. 종료합니다.");
	return;
}

const OUT_FILE = "-outfile";
const QUALITY = "-quality";

const quality = process.argv[2];
const inputAddress = "C:\\Users\\jkkim\\Documents\\compressjpeg\\img\\2.jpg";
const outputAddress = `C:\\Users\\jkkim\\Documents\\compressjpeg\\img\\compress\\input${quality}.jpg`;

execFile(mozjpeg, [OUT_FILE, outputAddress, QUALITY, quality, inputAddress], err => {
	console.log("Image minified! : " + err);
});
