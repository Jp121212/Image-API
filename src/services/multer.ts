import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const v4options = {
    random: [
        0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36,   
    ]
};
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, uuidv4(v4options) + path.extname(file.originalname));
    },
});


export default multer({ storage });

