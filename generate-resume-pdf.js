const chromeLauncher = require('chrome-launcher');
const CDP = require('chrome-remote-interface');
const childProcess = require('child_process');
const fs = require('fs');

const launchChrome = () => chromeLauncher.launch({
  chromeFlags: [
    '--window-size=1024,768',
    '--disable-gpu',
    '--headless',
    '--disable-cache'
  ]
});

const main = async () => {
  fs.rmSync('.parcel-cache', { recursive: true, force: true });

  const parcel = childProcess.exec('bun run watch');
  // wait for parcel to finish bundling
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Vite timed out after 30s')), 30000);
    const onData = (data) => {
      process.stdout.write(data);
      if (data.includes('ready in') || data.includes('Local:')) {
        clearTimeout(timeout);
        resolve();
      }
    };
    parcel.stdout.on('data', onData);
    parcel.stderr.on('data', onData);
  });
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