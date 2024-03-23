export default function VisitFinlandLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='px-10 h-dvh'>
        {children}
      </body>
    </html>
  );
}