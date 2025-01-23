import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/Images/Sunfeed.png"
                alt="Sunfeed Logo"
                width={120}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              SUNFEED, Expert En Solutions Solaires, Accompagne Entreprises Et Propriétaires Dans La Valorisation De Leurs Toitures Ou Terrains. En Tant Que Porteur De Projets, Nous Prenons En Charge L'étude, Le Financement, L'installation Et La Gestion De Centrales Photovoltaïques Pour Des Solutions Durables Et Rentables.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:pl-12">
            <h3 className="font-semibold text-lg mb-4">Liens</h3>
            <nav className="space-y-3">
              <Link 
                href="/" 
                className="block text-gray-600 hover:text-gray-900"
              >
                Page principale
              </Link>
              <Link 
                href="/nos-offres" 
                className="block text-gray-600 hover:text-gray-900"
              >
                Nos offres
              </Link>
              <Link 
                href="/battery" 
                className="block text-gray-600 hover:text-gray-900"
              >
                Batterie
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

