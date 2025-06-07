import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Restaurant from './components/Restaurant.jsx';
import Footer from './components/Footer';
import FoodOption from './components/FoodOption';
import Header2 from './components/Header2.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import SearchFood from './components/SearchFood.jsx';

const App = () => {
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(true);
    const [showHeader2, setShowHeader2] = useState(false);
    const [showFoodOption, setShowFoodOption] = useState(true);

    useEffect(() => {
        if (location.pathname === "/restaurant") {
            // /restaurant: Show Header2 and FoodOption only
            setShowHeader(false);
            setShowHeader2(true);
            setShowFoodOption(true);
        } else if (location.pathname.startsWith("/city/delhi/")) {
            // /city/delhi/:id : Show only Header2
            setShowHeader(false);
            setShowHeader2(true);
            setShowFoodOption(false);
        } else if (location.pathname === "/") {
            // Home route: Show Header initially, FoodOption always
            setShowHeader(true);
            setShowHeader2(false);
            setShowFoodOption(true);

            const handleScroll = () => {
                const foodOption = document.getElementById('food-option');
                if (foodOption) {
                    const rect = foodOption.getBoundingClientRect();
                    if (rect.top <= 0) {
                        setShowHeader(prev => (prev ? false : prev));
                        setShowHeader2(prev => (prev ? prev : true));
                    } else {
                        setShowHeader(prev => (prev ? prev : true));
                        setShowHeader2(prev => (prev ? false : prev));
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);

            // Initial check in case page loaded scrolled down
            handleScroll();

            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            // For other routes: show Header and FoodOption, hide Header2
            setShowHeader(true);
            setShowHeader2(false);
            setShowFoodOption(true);
        }
    }, [location.pathname]);

    return (
        <div className="bg-[#f2f2f2]">
            {showHeader && <Header />}
            {showHeader2 && <Header2 />}
            {showFoodOption && (
                <div id="food-option">
                    <FoodOption />
                </div>
            )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/city/delhi/:id" element={<RestaurantMenu />} />
                <Route path="/city/delhi/:id/search" element={<SearchFood />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
