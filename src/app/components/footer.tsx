import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-100 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Left Section: Logo and Social Media */}
        <div>
          <h1 className="text-3xl font-extrabold text-sky-900 mb-4">
        Advanced Vascular
          </h1>
          <img src="/footerLogo.png" alt="Logo" className="h-44 w-auto ml-12 object-contain" />

          
        </div>

        {/* Middle Section: Venous Conditions */}
        <div>
          <h3 className="font-bold text-lg text-sky-900 mb-4 mt-2">
        Venous Conditions
          </h3>
          <ul className="text-sky-800 space-y-2">
        <Link href="/venous_condition/cvi" className="block  hover:text-sky-500">
          Chronic Venous Insufficiency
        </Link>
        <Link href="/venous_condition/cvi" className="block  hover:text-sky-500">
          Varicose Veins
        </Link>
        <Link href="/venous_condition/cvi" className="block  hover:text-sky-500">
          Spider Veins
        </Link>
        <Link href="/venous_condition/cvi" className="block  hover:text-sky-500">
          Venous Ulcers
        </Link>
          </ul>
        </div>

        {/* Right Section: Treatment & Diagnosis */}
        <div>
          <h3 className="font-bold text-lg text-sky-900 mb-4 mt-2">
        Treatments & Services
          </h3>
          <ul className="text-sky-800 space-y-2">
        <Link href="/treatments/rfa" className="block  hover:text-sky-500">
          Radio Frequency Ablation
        </Link>
        <Link href="/treatments/venaseal" className="block  hover:text-sky-500">
          Venaseal
        </Link>
        <Link href="/treatments/varithena" className="block  hover:text-sky-500">
          Varithena
        </Link>
        <Link href="/treatments/asclera" className="block  hover:text-sky-500">
          Asclera
        </Link>
        <Link href="/treatments/la" className="block  hover:text-sky-500">
          Laser Ablation
        </Link>
          </ul>
        </div>
        

        <div className="mt-2">
          <h3 className="font-bold text-lg text-sky-900 mb-4">
            Where to find us :
          </h3>
          <Link href="/contact-us">
            <address className="not-italic text-sky-800 cursor-pointer hover:text-sky-800">
              4501 Osuna Road NE ,<br />
              Albuquerque NM 87109 <br />
              <br />
              Phone: 505-448-8346 | FAX: (505) 531-8914 <br />
              <br />
              Office Hours: <br />
              Monday – Friday, 8am to 5pm <br />
              Saturday | Sunday : closed
            </address>
          </Link>
        </div>

        {/* Logo at the right corner */}
        <div>
        <div className="flex gap-4 mb-4">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook text-2xl text-gray-600"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram text-2xl text-gray-600"></i>
        </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;