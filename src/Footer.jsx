import React from "react";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <>
            <footer className="w-100 bg-light text-center">
                <p>©{currentYear} MauryaTech. All Rights Reserved | Terms and Conditions Apply.</p>
            </footer>
        </>
    )
}

export default Footer;