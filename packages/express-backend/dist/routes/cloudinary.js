"use strict";
// server/routes/apiRoutes.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const router = express_1.default.Router();
// Configure Cloudinary
cloudinary_1.default.config({
    cloud_name: 'your_cloud_name',
    api_key: 'your_api_key',
    api_secret: 'your_api_secret'
});
// Handle image upload
router.post('/upload', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cloudinary_1.default.uploader.upload(req.body.image);
        res.json(result);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to upload image' });
    }
}));
exports.default = router;
