var express = require("express");
const puppeteer = require("puppeteer");
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// const app = express();

router.get("/", async (req, res) => {
  console.log(req.query);
  const url = req.query.url;
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url); // URL is given by the "user" (your client-side application)
  // const screenshotBuffer = await page.screenshot();

  // // Respond with the image
  // res.writeHead(200, {
  //     'Content-Type': 'image/png',
  //     'Content-Length': screenshotBuffer.length
  // });
  // res.end(screenshotBuffer);

  res.send("respond with a resource");

  await page.waitFor(1000);

  await browser.close();
});

// router.listen(4000);

module.exports = router;
