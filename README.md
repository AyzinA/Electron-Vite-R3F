
# Electron + Vite + React (TypeScript) + React-Three-Fiber — Starter

A tiny starter that boots an Electron app, serves a Vite + **React + TypeScript** renderer, and renders a rotating **React‑Three‑Fiber (R3F)** cube. It uses [`vite-plugin-electron/simple`] to auto-launch Electron during dev and to build the `main`/`preload` scripts for production. The Electron menu is unchanged (stock Electron).

---

## Quick Start

```bash
# 1) Install deps
npm i
# or: pnpm i / yarn

# 2) Start Vite and auto-launch Electron
npm run dev

# 3) Build production bundles (renderer + main + preload)
npm run build
```

You should see a window titled **Electron + Vite + R3F** with a spinning green cube.

---

## Scripts

| Script        | What it does                                                                 |
|---------------|-------------------------------------------------------------------------------|
| `dev`         | Runs Vite dev server and launches Electron when ready.                        |
| `build`       | Builds renderer to `dist/` and Electron entry points to `dist-electron/`.     |
| `preview`     | Static preview of Vite build (renderer only).                                 |

---

## Project Structure

```
.
├─ electron/
│  ├─ main.ts         # Electron main process (creates BrowserWindow)
│  └─ preload.ts      # Safe bridge to the renderer (contextIsolation)
│
├─ src/
│  ├─ App.tsx         # R3F scene (Canvas, spinning cube, optional controls)
│  ├─ main.tsx        # React entry
│  └─ index.css
│
├─ index.html
├─ vite.config.ts     # Vite + React + vite-plugin-electron/simple config
├─ tsconfig.json
├─ package.json
└─ (dist/, dist-electron/ after builds)
```

---

## Tech Notes

### Electron (main)
- Creates a single `BrowserWindow`.
- Loads the Vite dev server in development, or the built HTML in production.
- `contextIsolation: true`, `nodeIntegration: false` (recommended security defaults).
- Uses a **preload** script for any renderer IPC/bridging.

### Preload
- Exposes strictly-scoped APIs to `window` via `contextBridge`.
- Keep all Node access in main/preload; the renderer stays web‑safe.

### Renderer (Vite + React + R3F)
- React app mounts a `<Canvas>` from `@react-three/fiber` and renders a basic scene.
- Includes an animation loop for a spinning cube; add lights/camera/controls as needed.
- Optionally bring in `@react-three/drei` (e.g., `OrbitControls`) for quick UX.

---

## License

MIT.
