// components/SocialFollowModal.tsx

import React from 'react';
import Modal from 'react-modal';

interface SocialFollowModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const SocialFollowModal: React.FC<SocialFollowModalProps> = ({ isOpen, onRequestClose }) => {
  const openTwitter = () => {
    window.open('https://twitter.com/VAL_ON_ETH_', '_blank');
  };

  const openWebsite = () => {
    window.open('https://t.me/VAL_ON_ETH', '_blank');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-2xl font-bold mb-4">Follow our Socials</h2>
      <div className="flex justify-center">
        <button className="bg-[#ef067a] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-4" onClick={openTwitter}>Twitter</button>
        <button className="bg-[#ef067a] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={openWebsite}>Telegram</button>
      </div>
    </Modal>
  );
};

export default SocialFollowModal;
