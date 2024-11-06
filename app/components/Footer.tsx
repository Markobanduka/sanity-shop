const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 flex justify-center align items-center ">
        {currentYear} Kallos Gym Essentials. All Rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
