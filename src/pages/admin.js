import AdminDashboard from '@/components/AdminDashboard';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Admin() {
  return (
    <div>
      <Header />
      <main>
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  );
}
