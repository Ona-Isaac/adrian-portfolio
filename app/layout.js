import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
