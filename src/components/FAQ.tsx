"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full py-4 px-6 flex items-center justify-between bg-white hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-left font-medium text-gray-800">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <p className="px-6 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = ({ faqs = [] }) => {
  // Default FAQs
  const defaultFaqs = [
    {
      question: "Comment puis-je créer un compte?",
      answer:
        "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut à droite de la page et suivez les instructions.",
    },
    {
      question: "Comment réinitialiser mon mot de passe?",
      answer:
        "Vous pouvez réinitialiser votre mot de passe en cliquant sur 'Mot de passe oublié?' sur la page de connexion.",
    },
    {
      question: "Quels moyens de paiement acceptez-vous?",
      answer:
        "Nous acceptons les paiements par carte de crédit, carte de débit, PayPal, et virement bancaire.",
    },
    {
      question: "Puis-je annuler ma commande?",
      answer:
        "Oui, vous pouvez annuler votre commande avant qu'elle ne soit expédiée. Contactez notre support pour plus de détails.",
    },
    {
      question: "Offrez-vous une garantie sur vos produits?",
      answer:
        "Oui, tous nos produits sont couverts par une garantie de 12 mois. Consultez notre politique de garantie pour plus d'informations.",
    },
  ];

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-primary text-center">
            Foire aux questions
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Retrouvez ici les réponses aux questions les plus fréquentes.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          {displayFaqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Default export
export default FAQ;
