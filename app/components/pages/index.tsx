import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../Header';
import Footer from '../Footer';
import MissionStatement from '../MissionStatement';
import NewsletterSignup from '../NewsletterSignup';
import RecentUpdates from '../RecentUpdates';
import WaysToGive from '../WaysToGive';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div>
      <Header isDarkMode={false} />
      <MissionStatement />
      <WaysToGive />
      <RecentUpdates />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Home;