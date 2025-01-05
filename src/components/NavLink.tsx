import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export default function NavLink({ href, children, mobile = false }: NavLinkProps) {
  const baseStyles = "text-gray-300 hover:text-white transition-colors duration-300 relative";
  const mobileStyles = mobile ? "block py-2" : "";
  
  const hoverLineStyles = !mobile ? `
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-0 after:h-[2px] after:bg-red-500 after:transition-all 
    after:duration-300 hover:after:w-full
  ` : "";

  return (
    <a 
      href={href} 
      className={`${baseStyles} ${mobileStyles} ${hoverLineStyles}`}
    >
      {children}
    </a>
  );
}