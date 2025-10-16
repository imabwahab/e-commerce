import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const faqsData = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with SSL encryption for your safety.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) and overnight options are available at checkout. Free shipping on orders over $50.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day money-back guarantee on all products. Items must be unused and in original packaging. Return shipping is free for defective items, otherwise a small fee applies.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes! We ship to over 100 countries worldwide. International shipping times vary by location (7-21 business days). Customs fees may apply depending on your country.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order anytime by logging into your account and visiting the "My Orders" section.'
    },
    {
      question: 'Are my personal details secure?',
      answer: 'Absolutely. We use industry-standard SSL encryption and never store your credit card information. We comply with PCI DSS standards and GDPR regulations to protect your data.'
    }
  ];

  return (
    <div className="min-h-screen mt-32 max-w-7xl mx-auto pb-16 px-4">
      <HeadCrumb />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about ordering, shipping, returns, and more.
          </p>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-gray-700 mb-3">
            Still have questions?
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;



{/* HeadCrumb Section */ }
const HeadCrumb = () => {
  return (
    <div className='mb-8'>
      <div className='flex items-center gap-3 pl-4 mb-2'>
        <span className='w-4 h-10 bg-red-500 rounded'></span>
        <p className='text-red-500 font-semibold text-base'>FAQs</p>
      </div>
    </div>
  )
}
