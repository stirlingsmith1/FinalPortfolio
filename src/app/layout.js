import './globals.css';
import ClientLayout from './components/ClientLayout';

export const metadata = {
  title: 'Stirling Smith',
  description: 'Software Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClientLayout>
        {children}
      </ClientLayout>
    </html>
  );
}
