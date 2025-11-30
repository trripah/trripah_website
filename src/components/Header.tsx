import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import logo from "../assets/Trippah-lgo-2.svg";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Destinations", path: "destinations" },
    { name: "Packages", path: "packages" },
    { name: "About Us", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent" data-scrolled={isScrolled}>
      <div className="container mx-auto px-2 py-4 flex items-center justify-between" data-header-content>
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="hover:opacity-80 transition-opacity"
          style={{ cursor: 'pointer' }}
        >
          <img src={logo} alt="Travel Website Logo" className="h-8 md:h-10 w-auto" />
        </button>

        {/* Desktop Navigation */}
         

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center justify-between gap-8">

        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className="transition-colors text-white"
              style={{
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                borderBottom: currentPage === item.path ? '1.5px solid white' : 'none',
                // borderRadius: currentPage === item.path ? '5px' : '0',
                padding: currentPage === item.path ? '4px 8px' : '0'
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
          <Button
            onClick={() => onNavigate("custom-trip")}
            className="plan-trip-btn-desktop"
            data-plan-trip-btn
            >
            Plan My Trip
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" style={{ cursor: 'pointer' }}>
              {isOpen ? <X style={{color:'#fff' , width:'25px', height:'25px'}} /> : <Menu style={{color:'#fff' , width:'25px', height:'25px'}}/>}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] px-4">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate to different sections of the website
            </SheetDescription>
            <nav className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left transition-colors hover:text-[#5B4FE6] ${
                    currentPage === item.path ? "text-[#5B4FE6]" : "text-gray-700"
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("custom-trip")}
                className="plan-trip-btn-mobile"
                data-plan-trip-btn
              >
                Plan My Trip
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <style>{`
        header {
          position: sticky;
          top: 0;
        }
        header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, #2B70E4, #094CBE);
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
          pointer-events: none;
          z-index: -1;
        }
        header[data-scrolled="true"]::before {
          opacity: 1;
        }
        header[data-scrolled="false"]::before {
          opacity: 0;
        }
        @media (min-width: 1024px) {
          [data-header-content] {
            padding-inline: 5rem;
          }
        }
        .plan-trip-btn-desktop {
          background-color: transparent;
          border: 1.5px solid white;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 4px;
          cursor: pointer;
        }
        .plan-trip-btn-mobile {
          background-color: transparent;
          border: 2px solid black;
          color: black;
          font-weight: bold;
          margin-top: 1rem;
          border-radius: 8px;
          cursor: pointer;
        }
        [data-plan-trip-btn]:hover {
          background-color: transparent !important;
          opacity: 1 !important;
        }
      `}</style>
    </header>
  );
}