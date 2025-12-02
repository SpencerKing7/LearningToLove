# Learning To Love - React TypeScript App

This is a React TypeScript conversion of the original HTML-based "Learning To Love" website.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🗂️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer with social links
│   └── Header.tsx      # Page headers
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Story.tsx       # My Story page
│   ├── Questions.tsx   # Q&A page
│   └── LearnMore.tsx   # Resources page
├── styles/
│   └── custom.css      # Custom styles
├── App.tsx             # Main app component with routing
└── main.tsx            # App entry point
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icons

## 📝 Features

- ✅ Fully responsive design
- ✅ Client-side routing (no page reloads)
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Google Analytics integration
- ✅ Dark/Light mode support (via CSS media queries)

## 🌐 Deployment

This app can be deployed to:

- **GitHub Pages** - Using `gh-pages` package
- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your GitHub repository
- **Any static hosting** - Upload the `dist` folder

## 📄 Original HTML Files

The original HTML files are preserved in the root and `pages/` directory for reference.

## 🎨 Customization

- **Styles**: Edit `src/styles/custom.css`
- **Content**: Update the page components in `src/pages/`
- **Navigation**: Modify `src/components/Navbar.tsx`
- **Footer**: Update `src/components/Footer.tsx`

---

Made with ❤️ by Spencer King
