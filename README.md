# VDownloader

<a href="https://downloader.1-vn.com">
  <img src="https://cdn.nlark.com/yuque/0/2018/png/129147/1543735425232-a5d2c99f-d788-43e4-9781-558ff6d21027.png" width="256" alt="App Icon" />
</a>

## A full-featured download manager

[![GitHub release](https://img.shields.io/github/release/agalwood/VDownloader.svg)](https://github.com/agalwood/VDownloader/releases) [![Build Status](https://travis-ci.org/agalwood/VDownloader.svg?branch=master)](https://travis-ci.org/agalwood/VDownloader) [![Build status](https://ci.appveyor.com/api/projects/status/l11d5h05xwwcvoux/branch/master?svg=true)](https://ci.appveyor.com/project/agalwood/vdownloader/branch/master) [![Total Downloads](https://img.shields.io/github/downloads/agalwood/VDownloader/total.svg)](https://github.com/agalwood/VDownloader/releases) ![Support Platforms](https://camo.githubusercontent.com/a50c47295f350646d08f2e1ccd797ceca3840e52/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706c6174666f726d2d6d61634f5325323025374325323057696e646f77732532302537432532304c696e75782d6c69676874677265792e737667)

English | [简体中文](./README-CN.md)

VDownloader is a full-featured download manager that supports downloading HTTP, FTP, BitTorrent, Magnet, Baidu Net Disk, etc.

VDownloader has a clean and easy to use interface. I hope you will like it 👻.

✈️ [Official Website](https://vdownloader.app) | 📖 [Manual](https://github.com/agalwood/VDownloader/wiki)

## 💽 Installation

Download from [GitHub Releases](https://github.com/agalwood/VDownloader/releases) and install it.

### Windows

It is recommended to install VDownloader using the installation package (VDownloader-Setup-x.y.z.exe) to ensure a complete experience, such as associating torrent files, capturing magnet links, etc.

If you prefer the portable version, you can use [scoop](https://github.com/lukesampson/scoop) (need Windows 7+) to install VDownloader.

```bash
scoop bucket add extras
scoop install vdownloader
```

### macOS

The macOS users can install VDownloader using `brew cask`, thanks to [PR](https://github.com/Homebrew/homebrew-cask/pull/59494) of [Mitscherlich](https://github.com/Mitscherlich).

```bash
brew update && brew cask install vdownloader
```

### Linux

You can download the AppImage (for all Linux distributions) package or snap or just build from source code to install VDownloader.

Please read the **Build** section.

For Arch Linux users, VDownloader is available in [aur](https://aur.archlinux.org/packages/vdownloader/), thanks to the maintainer [weearc](https://github.com/weearc).

Run the following command to install:

```bash
yay vdownloader
```

VDownloader may need to run with `sudo` for the first time in Linux because there is no permission to create the download session file (`/var/cache/aria2.session`).

## ✨ Features

- 🕹 Simple and clear user interface
- 🦄 Supports BitTorrent & Magnet
- ☑️ BitTorrent selective download
- 💾 Supports downloading Baidu Net Disk
- 🎛 Up to 10 concurrent download tasks
- 🚀 Supports 64 threads in a single task
- 🚥 Supports speed limit
- 🕶 Mock User-Agent
- 🔔 Download completed Notification
- 💻 Ready for Touch Bar (Mac only)
- 🤖 Resident system tray for quick operation
- 🌑 Dark mode
- 🗑 Delete related files when removing tasks (optional)
- 🌍 I18n, [View supported languages](#-internationalization).
- 🎏 ...

## 🖥 User Interface

![vdownloader-screenshot-task-en.png](https://cdn.nlark.com/yuque/0/2019/png/129147/1550151166169-94b4bfb0-746e-42b8-aad7-0b6890f89abb.png)

## ⌨️ Development

### Clone Code

```bash
git clone git@github.com:onevn-top/VDownloader.git
```

### Install Dependencies

```bash
cd VDownloader
npm install
```

> Error: Electron failed to install correctly, please delete node_modules/electron and try installing again

`Electron` failed to install correctly, please refer to https://github.com/electron/electron/issues/8466#issuecomment-571425574

If you like [Yarn](https://yarnpkg.com/), you can also use `yarn` to install dependencies.

### Dev Mode

```bash
npm run dev
```

### Build Release

```bash
npm run build
```

After building, the application will be found in the project's `release` directory.

## 🛠 Technology Stack

- [Electron](https://electronjs.org/)
- [Vue](https://vuejs.org/) + [VueX](https://vuex.vuejs.org/) + [Element](https://element.eleme.io)
- [Aria2](https://aria2.github.io/) (Note: macOS and Linux versions use 64-bit aria2c, Windows version uses 32-bit)

## ☑️ TODO

Development Roadmap see: [Trello](https://trello.com/b/qNUzA0bv/vdownloader)

## 🤝 Contribute [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

If you are interested in participating in joint development, PR and Forks are welcome!

## 🌍 Internationalization

Translations into versions for other languages are welcome 🧐! Please read the [translation guide](./CONTRIBUTING.md#-translation-guide) before starting translations.

| Key   | Name                | Status       |
|-------|:--------------------|:-------------|
| ca    | Català              | 🚧 [@marcizhu](https://github.com/marcizhu) |
| de    | Deutsch             | ✔️ [@Schloemicher](https://github.com/Schloemicher) |
| en-US | English             | ✔️           |
| fa    | فارسی               | ✔️ [@Nima-Ra](https://github.com/Nima-Ra) |
| fr    | Français            | ✔️ [@gpatarin](https://github.com/gpatarin) |
| ja    | 日本語               | ✔️ [@hbkrkzk](https://github.com/hbkrkzk) |
| ko    | 한국어                | ✔️ [@KOZ39](https://github.com/KOZ39) |
| pt-BR | Portuguese (Brazil) | ✔️ [@andrenoberto](https://github.com/andrenoberto) |
| ru    | Русский             | 🚧 [@bladeaweb](https://github.com/bladeaweb) |
| tr    | Türkçe              | ✔️ [@abdullah](https://github.com/abdullah) |
| uk    | Українська          | 🚧 [@bladeaweb](https://github.com/bladeaweb) |
| zh-CN | 简体中文             | ✔️           |
| zh-TW | 繁體中文             | ✔️ [@Yukaii](https://github.com/Yukaii) |

## 📜 License

[MIT](https://opensource.org/licenses/MIT) Copyright (c) 2018-present Dr_rOot
