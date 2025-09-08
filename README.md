# A11y-Widget-Place-Anywhere-Firefox-Extension

JS Widget for Website - https://github.com/codelyfe/A11y-Widget-Place-Anywhere

Chrome Extension - https://github.com/codelyfe/A11y-Widget-Place-Anywhere-Chrome-Extension 

Opera Extension - https://github.com/codelyfe/A11y-Widget-Place-Anywhere-Opera-Extension

Demo - https://shipwr3ck.com/a11y-demo.html

[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](LICENSE)
![Vanilla JS](https://img.shields.io/badge/JS-vanilla-informational)
![No Dependencies](https://img.shields.io/badge/deps-none-success)
![Accessible](https://img.shields.io/badge/a11y-WCAG%202.1%2B-brightgreen)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ff69b4)

A privacy-friendly accessibility toolkit for **Mozilla Firefox** that works on (almost) any site. It adds a floating button that opens a panel with options like dark mode, high-contrast, text scaling/spacing, dyslexia-friendly fonts, always-visible focus rings, image hiding, grayscale, pause animations, reading mask, and a smart text-to-speech reader (selection, hover, or page content).

## What it does

* **Visual adjustments:** Strong dark mode, high contrast, larger text, extra spacing, underline links, grayscale, hide images, pause animations, highlight focus.
* **Reading aids:** Reading mask that follows your cursor; “Hover to Read” button; auto-read of selected text; play/pause/stop controls with adjustable rate & pitch.
* **Navigation help:** A “Skip to content” link appears for keyboard users.
* **Persistence:** Your settings are remembered per browser (locally).
* **Privacy:** No analytics, no external requests.

> Note: Extensions are blocked on certain pages (e.g., **addons.mozilla.org** and **about:** pages). That’s expected. ([Firefox Docs][1])

---

## Install for development (Temporary)

1. **Get the files**
   * Download the repository as a ZIP from GitHub and extract it, or clone it.
2. **Open Firefox’s debugging page**
   * Go to `about:debugging#/runtime/this-firefox`.
3. **Load the extension temporarily**
   * Click **Load Temporary Add-on…** and select `manifest.json`. ([Firefox Docs][2])
4. **Pin & test**
   * Open the **Extensions** (puzzle) menu → **Pin** **A11y Widget** to show the toolbar button and badge.
   * Visit a normal site (not AMO or an `about:` page). You should see the floating button; click it to open the panel.

The temporary add-on will be removed on browser restart.

---

## Permissions & data

* **Storage:** Saves your on/off toggle and preferences locally.
* **Content scripts:** Injects the UI and styles so features work.
* **No tracking:** The extension doesn’t send data to any server.

---

## Known limitations

* Won’t run on **addons.mozilla.org** or **about:** pages by design. ([Firefox Docs][1])
* Text-to-speech uses system/browser voices; availability varies by OS.
* Some special pages (e.g., PDF viewer, internal privileged pages) may restrict scripting.

---

## Troubleshooting

* **No floating button:** Refresh the tab after installing. Make sure you’re not on a blocked domain (AMO / `about:`). Confirm the extension is loaded in `about:debugging`.
* **Badge not visible:** Pin the extension from the **Extensions** (puzzle) menu.
* **Not running on some sites:** Reload the page after install. Ensure your `content_scripts.matches` includes the site (e.g., `<all_urls>`).

---

## Credits

Built from the “A11y Widget — Place Anywhere” project by ShipWr3ck & Codelyfe, adapted for Mozilla Firefox.

---

## License

See the repository’s LICENSE file.

---

[1]: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restrictions "Content script restrictions"
[2]: https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/ "Temporary installation in Firefox"
[3]: https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/ "Signing & distribution overview"
