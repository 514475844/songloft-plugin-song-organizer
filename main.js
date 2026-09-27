function onInit() {
  if (typeof songloft !== 'undefined' && songloft.log) {
    songloft.log.info('song-organizer 0.1.0 initialized');
  }
}

function onDeinit() {}

function onHTTPRequest() {
  return { status: 200, headers: { 'Content-Type': 'application/json' }, body: '{"ok":true}' };
}

globalThis.onInit = onInit;
globalThis.onDeinit = onDeinit;
globalThis.onHTTPRequest = onHTTPRequest;
