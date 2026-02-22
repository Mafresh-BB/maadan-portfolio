import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPaths = [
    path.join(process.cwd(), 'public', 'images'),
    path.join(process.cwd(), 'public', 'images', 'og'),
    path.join(process.cwd(), 'src', 'assets')
];

let cnt = 0;

directoryPaths.forEach(directoryPath => {
    if (fs.existsSync(directoryPath)) {
        fs.readdir(directoryPath, (err, files) => {
            if (err) return console.log('Unable to scan directory: ' + err);

            files.forEach(file => {
                if (file.match(/\.(png|jpg|jpeg)$/i)) {
                    const filePath = path.join(directoryPath, file);
                    const parsedPath = path.parse(filePath);
                    const outputPath = path.join(directoryPath, `${parsedPath.name}.webp`);

                    sharp(filePath)
                        .webp({ quality: 80 })
                        .toFile(outputPath, (err, info) => {
                            if (err) {
                                console.error('Error converting ' + file, err);
                            } else {
                                console.log('Successfully converted ' + file);
                                cnt++;
                            }
                        });
                }
            });
        });
    }
});

setTimeout(() => {
    console.log(`Done starting conversions. Total: ${cnt}`);
}, 5000);
