import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

import { HiraganaChart, KatakanaChart, KanjiChart } from '../components';

const Characters = () => {
  // If the user is not logged in, redirect to the login page
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }
  const [activeTab, setActiveTab] = useState('Hiragana');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const displayChart = () => {
    switch (activeTab) {
      case 'Hiragana':
        return <HiraganaChart />;
      case 'Katakana':
        return <KatakanaChart />;
      default:
        return <KanjiChart />;
    }
  };

  return (
    <section
      id="characters"
      className="w-full min-h-screen p-8 bg-slate-100"
    >
      <div className="flex flex-col gap-2">
        {/* Title */}
        <h1 className="h1-style mb-8">Characters</h1>

        {/* Banner */}
        <div className="mb-8 px-6 py-8 text-white bg-gradient-to-b from-primary to-red-800 rounded-xl">
          <h2 className="banner-heading">Let's learn {activeTab}!</h2>
        </div>
        {/* Tabs */}
        <div className="border-b-2 border-b-slate-300 mb-4">
          <div className="max-w-sm flex justify-between font-bold text-lg text-center">
            <button
              type="button"
              className={`tab-style ${activeTab === 'Hiragana' ? 'tab-active-style' : ''}`}
              onClick={() => handleTabClick('Hiragana')}
            >
              Hiragana
            </button>
            <button
              type="button"
              className={`tab-style ${activeTab === 'Katakana' ? 'tab-active-style' : ''}`}
              onClick={() => handleTabClick('Katakana')}
            >
              Katakana
            </button>
            <button
              type="button"
              className={`tab-style ${activeTab === 'Kanji' ? 'tab-active-style' : ''}`}
              onClick={() => handleTabClick('Kanji')}
            >
              Kanji
            </button>
          </div>
        </div>
        {/* Content */}

        {/* Content */}
        <div className="p-4 bg-white rounded-xl shadow-md">{displayChart()}</div>
      </div>
    </section>
  );
};

export default Characters;
