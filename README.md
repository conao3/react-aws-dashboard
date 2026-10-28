# react-aws-dashboard

A desktop application template combining a Python backend with a React frontend using Eel.

## Overview

This project provides a starting point for building cross-platform desktop applications with:

- **Backend**: Python with Eel for native desktop integration
- **Frontend**: React 18 with TypeScript and Vite
- **Packaging**: PyInstaller for creating standalone executables

Eel acts as a bridge between Python and the browser-based UI, allowing seamless communication between the two layers.

## Requirements

- Python 3.15
- Node.js 18 or later
- Poetry (Python package manager)

## Installation

### Backend Setup

```bash
poetry install
```

### Frontend Setup

```bash
cd web-src
npm install
```

## Development

### Build the Frontend

```bash
cd web-src
npm run build
```

The build output will be placed in the `web` directory, which Eel serves to the desktop window.

### Run the Application

```bash
poetry run python py-src/app.py
```

## Project Structure

```
react-aws-dashboard/
├── py-src/           # Python backend source
│   └── app.py        # Main application entry point
├── web-src/          # React frontend source
│   ├── src/          # TypeScript source files
│   └── package.json  # Frontend dependencies
├── web/              # Built frontend (generated)
├── pyproject.toml    # Python project configuration
└── poetry.lock       # Python dependency lock file
```

## How It Works

The application uses Eel to expose Python functions to the JavaScript frontend. Functions decorated with `@eel.expose` become callable from the React application through the global `eel` object.

Example Python function:

```python
@eel.expose
def get_greeting(name):
    return f"hello {name}"
```

Example TypeScript call:

```typescript
eel.get_greeting("world")
```

## Building for Distribution

Use PyInstaller to create a standalone executable:

```bash
poetry run pyinstaller py-src/app.py --onefile --windowed
```

## License

Apache License 2.0
