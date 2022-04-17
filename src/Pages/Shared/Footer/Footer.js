import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='text-center mt-5'>
            <h2>Copyright &copy; {year} </h2>
        </footer>
    );
};

export default Footer;