import React, { useEffect, useState} from 'react';
import './PrivacyPolicy.css';
import './App.css';
import logo from './images/logo.png';
import lefthex from './images/lefthex.png';
import righthex from './images/righthex.png';

const TermsOfService = () => {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
        <div>
            <section id="home" className="full-page-header">
                <img className="lefthex" src={lefthex} alt="Left Hex" />
                <img className="righthex" src={righthex} alt="Right Hex"/>
                <img className="lefthex2" src={lefthex} alt="Left Hex"  style={{ left: `${-200 + scrollY * 0.2}px` }} />
                <img className="righthex2" src={righthex} alt="Right Hex" style={{ right: `${-200 + scrollY * 0.2}px` }}/>
                <img className="toplogo" src={logo} alt="Logo" />
            </section>
            <div className="privacy">
            <h1>Website Terms and Conditions of Use</h1><br />
                <h2> 1. Terms </h2>
                <p>
                By accessing this Website, accessible from https://3dprintingkildare.com/, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>
                <h2>2. Use License</h2>
                <p>
                Permission is granted to temporarily download one copy of the materials on 3D Printing Kildare&rsquo;s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>

                <p>modify or copy the materials;<br />
                <ul>
                    <li>use the materials for any commercial purpose or for any public display;</li>
                    <li>attempt to reverse engineer any software contained on 3D Printing Kildare&rsquo;s Website;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                    <li>transferring the materials to another person or &ldquo;mirror&rdquo; the materials on any other server.</li>
                </ul>
                
                This will let 3D Printing Kildare to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>
                <h2>3. Disclaimer</h2>
                <p>
                All the materials on 3D Printing Kildare&rsquo;s Website are provided &ldquo;as is&rdquo;. 3D Printing Kildare makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, 3D Printing Kildare does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
                <h2>4. Limitations</h2>
                <p>
                3D Printing Kildare or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on 3D Printing Kildare&rsquo;s Website, even if 3D Printing Kildare or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
                <h2>5. Revisions and Errata</h2>
                <p>
                The materials appearing on 3D Printing Kildare&rsquo;s Website may include technical, typographical, or photographic errors. 3D Printing Kildare will not promise that any of the materials in this Website are accurate, complete, or current. 3D Printing Kildare may change the materials contained on its Website at any time without notice. 3D Printing Kildare does not make any commitment to update the materials.</p>
                <h2>6. Links</h2>
                <p>
                3D Printing Kildare has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by 3D Printing Kildare of the site. The use of any linked website is at the user&rsquo;s own risk.</p>
                <h2>7. Site Terms of Use Modifications</h2>
                <p>
                3D Printing Kildare may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
                <h2>8. Your Privacy</h2>
                <p>
                Please read our Privacy Policy.</p>
                <h2>9. Governing Law</h2>
                <p>
                Any claim related to 3D Printing Kildare&rsquo;s Website shall be governed by the laws of ie without regards to its conflict of law provisions.</p>
            </div>
            <footer>
                    <div>
                    <img src={logo} alt="Logo" />
                    </div>
                    <div> 
                    <a href="/privacy-policy">Privacy Policy &nbsp; &nbsp; &nbsp;</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <p>© Copyright 2023.  All rights reserved.</p>
                    </div>
       
                </footer>
        </div>
    );
}

export default TermsOfService;
