"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { AppRouter } from "../../appRouter"
const express_1 = __importDefault(require("express"));
const home_1 = require("../../controllers/pages/home");
// const { notFoundPage } = require('../../controllers/pages/404.controller')
// const { homePage } = require('../../controllers/pages/home.controller')
// const { privacyPage } = require('../../controllers/pages/privacy.controller')
// const { tosPage } = require('../../controllers/pages/tos.controller')
// const { sitemapPage } = require('../../controllers/pages/sitemap.controller')
// const router = AppRouter.getInstance()
const router = express_1.default.Router();
/**
 * http://localhost:3000/
 */
router.get("/", home_1.homeController);
// router.get('/', homePage)
// router.get('/privacy-policy', privacyPage)
// router.get('/terms-of-service', tosPage)
// router.get('/sitemap.xml', sitemapPage)
// router.get('*', notFoundPage)
exports.default = router;
