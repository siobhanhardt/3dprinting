import React, { useEffect, useState } from "react";
import "./PrivacyPolicy.css";
import "./App.css";
import logo from "./images/logo.png";
import lefthex from "./images/lefthex.png";
import righthex from "./images/righthex.png";

const PrivacyPolicy = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <section id="home" className="full-page-header">
        <img className="lefthex" src={lefthex} alt="Left Hex" />
        <img className="righthex" src={righthex} alt="Right Hex" />
        <img
          className="lefthex2"
          src={lefthex}
          alt="Left Hex"
          style={{ left: `${-200 + scrollY * 0.2}px` }}
        />
        <img
          className="righthex2"
          src={righthex}
          alt="Right Hex"
          style={{ right: `${-200 + scrollY * 0.2}px` }}
        />
        <img className="toplogo" src={logo} alt="Logo" />
      </section>
      <div className="privacy">
        <h1>Privacy Policy for 3D Printing Kildare</h1>

        <p>
          At 3D Printing Kildare, accessible from
          https://3dprintingkildare.com/, one of our main priorities is the
          privacy of our visitors. This Privacy Policy document contains types
          of information that is collected and recorded by 3D Printing Kildare
          and how we use it.
        </p>

        <h2>Log Files</h2>

        <p>
          3D Printing Kildare follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services' analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users' movement on the website, and
          gathering demographic information.
        </p>

        <h2>Cookies and Web Beacons</h2>

        <p>
          Like any other website, 3D Printing Kildare uses ‘cookies'. These
          cookies are used to store information including visitors' preferences,
          and the pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information.
        </p>

        <h2>Our Advertising Partners</h2>

        <p>
          Some of advertisers on our site may use cookies and web beacons. Our
          advertising partners are listed below. Each of our advertising
          partners has their own Privacy Policy for their policies on user data.
          For easier access, we hyperlinked to their Privacy Policies below.
        </p>

        <p>
          Google:{" "}
          <a href="https://policies.google.com/technologies/ads">
            https://policies.google.com/technologies/ads
          </a>
        </p>

        <h2>Privacy Policies</h2>

        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of 3D Printing Kildare.
        </p>

        <p>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on 3D Printing Kildare, which are
          sent directly to users' browser. They automatically receive your IP
          address when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>

        <p>
          Note that 3D Printing Kildare has no access to or control over these
          cookies that are used by third-party advertisers.
        </p>

        <h2>Third Party Privacy Policies</h2>

        <p>
          3D Printing Kildare's Privacy Policy does not apply to other
          advertisers or websites. Thus, we are advising you to consult the
          respective Privacy Policies of these third-party ad servers for more
          detailed information. It may include their practices and instructions
          about how to opt-out of certain options.
        </p>

        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites. What Are Cookies?
        </p>

        <h2>Children's Information</h2>

        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>

        <p>
          3D Printing Kildare does not knowingly collect any Personal
          Identifiable Information from children under the age of 13. If you
          think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our
          records.
        </p>

        <h2>Online Privacy Policy Only</h2>

        <p>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in 3D Printing Kildare. This policy is not
          applicable to any information collected offline or via channels other
          than this website.
        </p>

        <h2>Consent</h2>

        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </p>
      </div>
      <footer>
        <div>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div>
          <a href="/privacy-policy">Privacy Policy &nbsp; &nbsp; &nbsp;</a>
          <a href="/terms-of-service">Terms of Service</a>
          <p>© Copyright 2023. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
