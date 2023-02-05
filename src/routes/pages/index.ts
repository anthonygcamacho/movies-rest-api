// import { AppRouter } from "../../appRouter"
import express from "express"

import { homeController } from "../../controllers/pages/home"

// const { notFoundPage } = require('../../controllers/pages/404.controller')
// const { homePage } = require('../../controllers/pages/home.controller')
// const { privacyPage } = require('../../controllers/pages/privacy.controller')
// const { tosPage } = require('../../controllers/pages/tos.controller')
// const { sitemapPage } = require('../../controllers/pages/sitemap.controller')

// -------------------------------------------------------------------------------

// const router = AppRouter.getInstance()
const router = express.Router()

/**
 * http://localhost:3000/
 */
router.get("/", homeController)

// router.get('/', homePage)
// router.get('/privacy-policy', privacyPage)
// router.get('/terms-of-service', tosPage)
// router.get('/sitemap.xml', sitemapPage)

// router.get('*', notFoundPage)

export default router
