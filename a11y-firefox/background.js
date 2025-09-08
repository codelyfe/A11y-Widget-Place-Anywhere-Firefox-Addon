// background.js (Firefox MV3)
// Uses the `browser.*` promise-based WebExtensions API.
/*
  ╔══════════════════════════════════════════════════════════════════════╗
  ║  SHIPWR3CK • CODELYFE                                                ║
  ║  Author : Randal “Codelyfe” Burger Jr                                ║
  ║  Web    : https://shipwr3ck.com                                      ║
  ║  GitHub : https://github.com/codelyfe                                 ║
  ║  License: GPL-2.0-or-later                                           ║
  ║  Motto  : Build the impossible. Include everyone.                    ║
  ╚══════════════════════════════════════════════════════════════════════╝
*/
const DEFAULTS = { enabled: true };

async function getEnabled() {
  const out = await browser.storage.local.get(DEFAULTS);
  return out.enabled ?? true;
}

async function setEnabled(on) {
  await browser.storage.local.set({ enabled: !!on });
}

async function updateBadge(on) {
  try {
    await browser.action.setBadgeText({ text: on ? "ON" : "OFF" });
    // setBadgeBackgroundColor is supported in Firefox for `action`
    await browser.action.setBadgeBackgroundColor({ color: on ? "#0b5cff" : "#666666" });
    await browser.action.setTitle({ title: on ? "A11y Widget (enabled)" : "A11y Widget (disabled)" });
  } catch (_) {}
}

browser.runtime.onInstalled.addListener(async () => {
  const on = await getEnabled();
  await updateBadge(on);
});

browser.runtime.onStartup.addListener(async () => {
  const on = await getEnabled();
  await updateBadge(on);
});

browser.action.onClicked.addListener(async () => {
  const on = await getEnabled();
  const next = !on;
  await setEnabled(next);
  await updateBadge(next);
});

browser.storage.onChanged.addListener(async (changes, area) => {
  if (area !== "local" || !changes.enabled) return;
  await updateBadge(!!changes.enabled.newValue);
});
