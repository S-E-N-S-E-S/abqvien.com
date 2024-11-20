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
            <li>Varicose Veins</li>
            <li>Spider Veins</li>
            <li>Spider Veins Vs. Varicose Veins</li>
            <li>Facial & Nose Veins</li>
            <li>Venous Stasis Ulcers</li>
            <li>Chronic Venous Insufficiency</li>
            <li>Deep Vein Thrombosis</li>
            <li>Pelvic Congestion Syndrome</li>
            <li>Lymphedema</li>
          </ul>
        </div>

        {/* Right Section: Treatment & Diagnosis */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-4">
            Treatment & Diagnosis
          </h3>
          <ul className="text-gray-800 space-y-2">
            <li>Thrombectomy or Declot</li>
            <li>Angiogram or Fistulogram</li>
            <li>Angioplasty</li>
            <li>Endo AFV Creation</li>
            <li>Ligation or Coiling</li>
            <li>Vessel Mapping</li>
            <li>Tunneled Dialysis Catheter Insertion</li>
            <li>Tunneled Dialysis Catheter Removal</li>
            <li>Tunneled Dialysis Catheter Exchange</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;