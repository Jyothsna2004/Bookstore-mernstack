/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBlog,FaBarsStaggered, FaXmark  } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // Navigation items
    const navItems = [
        { link: 'home', path: "/" },
        { link: 'about', path: "/about" },
        { link: 'shop', path: "/shop" },
        { link: 'Sell your Book', path: "/admin/dashboard" },
        { link: 'blog', path: "/blog" },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 transition-all ease-in duration-300'>
            <nav>
                <div>
                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                        <FaBlog className='inline-block'/> Books
                    </Link>
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                                    {link}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                </div>
                {/*menu*//*}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuOpen?<FaXmark className='h-5 w-5 text-black'/>:<FaBarsStaggered className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>
                </div>
                {/*navigate*//*}
                <div className={'space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0":"hidden"}'}>
                {
                        navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-700'>{link}</Link>
                        ))
                }
                </div>
            </nav>
        </header>
    );
}

export default Navbar;*/
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Update isSticky based on scroll position
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Navigation items
  const navItems = [
    { link: 'home', path: "/" },
    { link: 'about', path: "/about" },
    { link: 'shop', path: "/shop" },
    { link: 'Sell your Book', path: "/admin/dashboard" },
    { link: 'blog', path: "/blog" },
  ];

  return (
    <header className={`w-full bg-transparent fixed top-0 left-0 transition-all ease-in duration-300 ${isSticky ? 'shadow-md bg-white' : ''}`}>  {/* Add styling for sticky state */}
      <nav className={'py-4 lg:px-24 px-4 ${isSticky ?"sticky top-0 left-0 right-0 bg-blue-300":""}'}>
        <div className='flex justify-between items-center text-base gap-8'>
          <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
            <FaBlog className='inline-block'/> Books
          </Link>
          <ul className='md:flex space-x-12 hidden'>
            {
              navItems.map(({ link, path }) => (
                <li key={path}>
                  <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                    {link}
                  </Link>
                </li>
              ))
            }
          </ul>
          <div className='space-x-12 hidden lg:flex items-center'>
            <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
          </div>
          {/*menu*/}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {
                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
              }
            </button>
          </div>
        </div>
        {/*navigate*/}
        <div className={'space-y-4 px-4 mt-16 py-7 bg-blue-700 ' + (isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden")}>
          {
            navItems.map(({ link, path }) => (
              <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-700'>{link}</Link>
            ))
          }
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
