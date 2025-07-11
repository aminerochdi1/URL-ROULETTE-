'use client'

import { ReactNode, useState } from 'react';

interface NewsletterProps {
  children?: ReactNode;
  className?: string;
}

export const NewsLetter = ({ children, className = '' }: NewsletterProps) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className={`newsletter-container ${className}`}>
      {children}
      {isSubscribed ? (
        <div className="success-message">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <EmailInput>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="info@gmail.com"
              required
              className="input"
            />
          </EmailInput>
        </form>
      )}
      <style jsx>{`
        .newsletter-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 2rem;
          color: white;
        }
        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .success-message {
          color: #4BB543;
          text-align: center;
          font-weight: bold;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export const EmailInput = ({ children }: NewsletterProps) => (
  <div className="input-wrapper">
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g data-name="Layer 2">
        <g data-name="inbox">
          <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
          <path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z"/>
        </g>
      </g>
    </svg>
    {children}
    <button type="submit" className="Subscribe-btn">
      Subscribe
    </button>
    <style jsx>{`
      .input-wrapper {
        width: fit-content;
        height: 45px;
        border-radius: 20px;
        padding: 5px;
        box-sizing: content-box;
        display: flex;
        align-items: center;
        background-color: #292524;
      }
      .icon {
        width: 30px;
        margin-right:10px;
        fill: rgb(255, 255, 255);
        margin-left: 8px;
        transition: all 0.3s;
      }
      .input {
        max-width: 170px;
        height: 100%;
        border: none;
        outline: none;
        padding-left: 15px;
        background-color: #292524;
        color: white;
        font-size: 1em;
      }
      .input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #292524 inset;
        -webkit-text-fill-color: #ffffff;
      }
      .Subscribe-btn {
        height: 100%;
        width: 95px;
        border: none;
        border-radius: 15px;
        color: rgb(0, 0, 0);
        cursor: pointer;
        background-color: #ffffff;
        font-weight: 500;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: all 0.3s;
      }
      .arrow {
        position: absolute;
        margin-right: 150px;
        transition: all 0.3s;
      }
      .input-wrapper:active .icon {
        transform: scale(1.3);
      }
      .Subscribe-btn:hover {
        color: white;
        background-color:rgb(125, 43, 43);
      }`}
      </style>
  </div>
);