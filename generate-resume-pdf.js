const chromeLauncher = require('chrome-launcher');
const CDP = require('chrome-remote-interface');
const childProcess = require('child_process');

const launchChrome = () => chromeLauncher.launch({
  chromeFlags: [
    '--window-size=1024,768',
    '--disable-gpu',
    '--headless'
  ]
});

const main = async () => {
  
  const parcel = childProcess.exec('yarn watch');
  // wait for parcel to finish bundling
  await new Promise(resolve => setTimeout(resolve, 10000));
  const chrome = await launchChrome();
  const protocol = await CDP({ port: chrome.port });
  const { Page } = protocol;
  await Page.enable();

  Page.navigate({ url: 'http://localhost:1234/static_resume' });
  Page.loadEventFired(async () => {
    const { data } = await Page.printToPDF({
      scale: 1,
      paperWidth: 8.5,
      paperHeight: 11,
    });

    // Save PDF to disk
    require('fs').writeFileSync('resume.pdf', Buffer.from(data, 'base64'));
    chrome.kill();
    parcel.kill();
    process.exit(0);
  });
};

main();