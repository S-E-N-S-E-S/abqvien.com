import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-100 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Logo and Social Media */}
        <div>
        <h1 className="text-3xl font-extrabold text-blue-900">
            Advanced Vascular
          </h1>
          <div className="flex gap-4 mb-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook text-2xl text-gray-600"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-2xl text-gray-600"></i>
            </a>
          </div>
          <address className="not-italic text-gray-800">
          4501 Osuna Road NE ,<br />
          Albuquerque NM 87109 <br />
            <br />
            Phone: 505-448-8346 | FAX: (505) 531-8914 <br />
            <br />
            Office Hours: <br />
            Monday – Friday, 8am to 5pm <br />
            Saturday | Sunday : closed
          </address>
        </div>

        {/* Middle Section: Venous Conditions */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-4">
            Venous Conditions
          </h3>
          <ul className="text-gray-800 space-y-2">
            {/* <li>Chronic Venous Insufficiency</li> */}
            <Link href="/venous_condition/cvi" className="block px-4  hover:text-sky-600">Chronic Venous Insufficiency</Link>
            <Link href="/venous_condition/cvi" className="block px-4  hover:text-sky-600">Varicose Veins</Link>
            <Link href="/venous_condition/cvi" className="block px-4  hover:text-sky-600">Spider Veins</Link>
            <Link href="/venous_condition/cvi" className="block px-4  hover:text-sky-600">Venous Ulcers</Link>
          
          </ul>
        </div>

        {/* Right Section: Treatment & Diagnosis */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-4">
            Treatments & Services
          </h3>
          <ul className="text-gray-800 space-y-2">
            <Link href="/treatments/rfa" className="block px-4  hover:text-sky-600">Radio Frequency Ablation</Link>
            <Link href="/treatments/venaseal" className="block px-4  hover:text-sky-600">Venaseal</Link>
            <Link href="/treatments/varithena" className="block px-4  hover:text-sky-600">Varithena</Link>
            <Link href="/treatments/asclera" className="block px-4  hover:text-sky-600">Asclera</Link>
            <Link href="/treatments/la" className="block px-4  hover:text-sky-600">Laser Ablation</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;