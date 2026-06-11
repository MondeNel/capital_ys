import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import SubscribePage from './components/SubscribePage';
import EcosystemPage from './components/EcosystemPage';
import FundingPage from './components/FundingPage';
import ContactPage from './components/ContactPage';
import ReviewsPage from './components/ReviewsPage';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [ecosystemFilter, setEcosystemFilter] = useState('all');
  const [reviews, setReviews] = useState([
    { id: 1, avatar: 'TM', name: 'Thabo M.', stars: 5, text: 'Capital Ys helped us with company registration and business plan. Excellent service, very professional team.', visible: true },
    { id: 2, avatar: 'NM', name: 'Naledi M.', stars: 4, text: 'The ecosystem feature connected me to a reliable wholesaler within a week. Great concept and execution.', visible: true },
    { id: 3, avatar: 'SN', name: 'Sipho N.', stars: 5, text: 'Premium subscription was worth every rand. Got funding sourced within two months. Highly recommended!', visible: true }
  ]);
  const [newReviewRating, setNewReviewRating] = useState(0);
  const [newReviewText, setNewReviewText] = useState('');

  // Ecosystem data
  const ecosystemItems = [
    { id: 1, name: "Makro bulk buyer", sub: "Spaza · Soweto", cat: "spaza", role: "Wholesaler", roleClass: "wholesale" },
    { id: 2, name: "Rapid Runners", sub: "Spaza · Johannesburg", cat: "spaza", role: "Delivery", roleClass: "delivery" },
    { id: 3, name: "Corner Spaza", sub: "Spaza · Soweto", cat: "spaza", role: "Retailer", roleClass: "retail" },
    { id: 4, name: "Meat Depot SA", sub: "Chesa · Pretoria", cat: "chesa", role: "Wholesaler", roleClass: "wholesale" },
    { id: 5, name: "FastFreight", sub: "Chesa · Pretoria", cat: "chesa", role: "Delivery", roleClass: "delivery" },
    { id: 6, name: "Braai King", sub: "Chesa · Mamelodi", cat: "chesa", role: "Retailer", roleClass: "retail" },
    { id: 7, name: "Beauty Trade", sub: "Salon · Sandton", cat: "salon", role: "Wholesaler", roleClass: "wholesale" },
    { id: 8, name: "Clicks & Curls", sub: "Salon · Randburg", cat: "salon", role: "Photographer", roleClass: "photo" },
    { id: 9, name: "Glam Studio", sub: "Salon · Fourways", cat: "salon", role: "Retailer", roleClass: "retail" },
    { id: 10, name: "Clean Pro Supplies", sub: "Car wash · Roodepoort", cat: "carwash", role: "Wholesaler", roleClass: "wholesale" },
    { id: 11, name: "AutoDeliver", sub: "Car wash · Krugersdorp", cat: "carwash", role: "Delivery", roleClass: "delivery" },
    { id: 12, name: "Shine & Shine", sub: "Car wash · Roodepoort", cat: "carwash", role: "Retailer", roleClass: "retail" }
  ];

  const filteredEcosystem = ecosystemFilter === 'all' ? ecosystemItems : ecosystemItems.filter(item => item.cat === ecosystemFilter);

  const handleHideReview = (id) => {
    setReviews(prev => prev.map(rev => rev.id === id ? { ...rev, visible: false } : rev));
  };

  const handleAddReview = () => {
    if (newReviewText.trim() === "") {
      alert("Please write a review.");
      return;
    }
    if (newReviewRating === 0) {
      alert("Please rate using stars.");
      return;
    }
    const newReview = {
      id: Date.now(),
      avatar: "U",
      name: "User",
      stars: newReviewRating,
      text: newReviewText,
      visible: true
    };
    setReviews(prev => [newReview, ...prev]);
    setNewReviewText("");
    setNewReviewRating(0);
    const stars = document.querySelectorAll('#stars span');
    stars.forEach(s => s.style.color = '#D3D1C7');
  };

  const setRating = (rating) => {
    setNewReviewRating(rating);
    const stars = document.querySelectorAll('#stars span');
    stars.forEach((s, i) => {
      s.style.color = i < rating ? '#EF9F27' : '#D3D1C7';
    });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const changePage = (page) => {
    setActivePage(page);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar changePage={changePage} activePage={activePage} />
      <div className="animate-fadeIn">
        {activePage === 'home' && <HomePage changePage={changePage} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'services' && <ServicesPage />}
        {activePage === 'subscribe' && <SubscribePage />}
        {activePage === 'ecosystem' && (
          <EcosystemPage 
            ecosystemFilter={ecosystemFilter} 
            setEcosystemFilter={setEcosystemFilter} 
            filteredEcosystem={filteredEcosystem} 
          />
        )}
        {activePage === 'funding' && <FundingPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'reviews' && (
          <ReviewsPage 
            reviews={reviews} 
            onHideReview={handleHideReview}
            newReviewText={newReviewText}
            setNewReviewText={setNewReviewText}
            newReviewRating={newReviewRating}
            setRating={setRating}
            onAddReview={handleAddReview}
          />
        )}
      </div>
      <Footer changePage={changePage} />
    </div>
  );
}

export default App;