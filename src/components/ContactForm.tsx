import React from "react";
import dynamic from "next/dynamic";
import contact from "../utils/AnimateJsons/contact.json";
import Button from "./common/Button";

const Animate = dynamic(() => import("./common/Animate"), { ssr: false });

export default function ContactForm() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-6 lg:p-8 m-4 rounded-lg shadow-lg bg-white">
      <div className="w-full md:w-1/2 flex justify-center items-center h-full mb-6 md:mb-0">
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
          <Animate className="" data={contact} />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center h-full">
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md bg-white p-4 md:p-6 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-indigo-400">
          <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-4">
            Entrons en contact.
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Ou contactez-nous manuellement à{" "}
            <a
              href="mailto:Sunfeed@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              Sunfeed@gmail.com
            </a>
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Nom complet
              </label>
              <input
                type="text"
                placeholder="Votre nom..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Adresse email
              </label>
              <input
                type="email"
                placeholder="Votre email..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Numéro de téléphone
              </label>
              <input
                type="text"
                placeholder="Votre numéro de téléphone..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                placeholder="Votre message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                rows={3}
                maxLength={300}
              ></textarea>
              <p className="text-right text-gray-400 text-sm mt-1">300/300</p>
            </div>
            <Button
              text="Soumettre"
              type="submit"
              className="w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
