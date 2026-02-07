


import "./globals.css";
export const metadata = {
  
  title: "shopsy.com",
  icons: {
    icon: '/logo.png', // make sure this file exists in public folder
  }
}





export default function RootLayout({ children }) {
  return (
    <html lang="en" title="shopsy.com">
      <body title="Shopsy.com">
   
        {children}</body>
    </html>
  );
}
