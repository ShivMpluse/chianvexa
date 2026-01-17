import Image from "next/image";
import logo from "@/public/logo01.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 mx-12 ">
      {/* Navbar */}
      <nav className="container mx-auto py-2 px-4 flex justify-between items-center border fixed top-0 left-0 right-0 z-10 backdrop-blur-lg">
        <div className="w-48 h-18 flex justify-center items-center">
          <Image src={logo} alt="Chainvexa Logo" width={200} height={50} className="border-2 w-full" />
        </div>
        <ul className="flex gap-6 text-lg">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center relative" style={{ backgroundImage: "url('/banner.jpg')", height: '90vh', top: '50px' }} >
  {/* Overlay for better text visibility */}
  <div className="absolute inset-0 bg-white/70"></div>

  {/* Content */}
    <div className="relative z-10">
      <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
        Decentralized Blockchain Solutions
      </h2>

      <p className="text-xl mb-6 max-w-2xl text-gray-700">
        We help you harness the power of decentralization — building secure,
        scalable blockchain solutions that add real value to your business.
        Smart Contracts. DApps. Crypto Integration.
      </p>

      <Link href="#services" className="bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition" >
        Explore Services
      </Link>
    </div>
</section>


      {/* About */}
      <section id="about" className="py-16 bg-gray-50 my-8">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">About Chainvexa</h3>
          <p className="text-lg max-w-3xl mx-auto">
            Chainvexa provides complete blockchain solutions for businesses including smart contract development, decentralized applications, and seamless crypto integration.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 hover:scale-105 duration-300 ease-in-out border-gray-800 rounded-lg shadow-xl">
              <h4 className="font-semibold text-xl mb-2">Smart Contracts</h4>
              <p>Create secure & audited smart contracts on Ethereum, BNB Chain & more.</p>
            </div>
            <div className="p-6 hover:scale-105 duration-300 ease-in-out border-gray-800 rounded-lg shadow-xl">
              <h4 className="font-semibold text-xl mb-2">DApps Development</h4>
              <p>Decentralized apps tailored to your business logic & requirements.</p>
            </div>
            <div className="p-6 hover:scale-105 duration-300 ease-in-out border-gray-800 rounded-lg shadow-xl">
              <h4 className="font-semibold text-xl mb-2">Crypto Integration</h4>
              <p>Integrate token payments and wallet support into your product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
          <p className="mb-4">Mail us at:</p>
          <a
            href="mailto:contact@chainvexa.com"
            className="text-blue-600 font-semibold underline"
          >
            contact@chainvexa.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t">
        <p>© {new Date().getFullYear()} Chainvexa. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
