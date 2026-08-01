// src/components/Contact.tsx

import type { ReactNode } from "react";
import { profile } from "../data/portfolio"
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




export default function Contact(){

    const links:{ label: string; icon: ReactNode; href: string | null}[] = [
        { label:'Github', icon: <FaGithub />, href: profile.links.github },
        { label:'X (旧Twitter)', icon: <FaXTwitter />, href: profile.links.twitter },
        { label:'Email', icon: <FaEnvelope />, href: profile.links.email },
    ]

    return(
        <section className="section" id="contact">
            <div className="container">
                <div contact-inner>
                    <h2 className="section-title">
                        <span>Contact</span>
                    </h2>
                    <p className="section-sub">連絡先</p>

                    <p className="contact-desc">
                        連絡先はこちらになります。
                    </p>

                    <div className="contact-links">
                        {links
                            .filter((link): link is typeof link 
                                & {href: string} =>link.href !== null)
                            .map((link)=>(
                            <a 
                                key={link.label}
                                href={link.href}
                                className="contact-link-item"
                                target={link.href.startsWith('mailto')?
                                    undefined:'_blank'}
                                rel="noreferrer"
                                >
                                <span className="contact-link-icon">
                                    {link.icon}
                                </span>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}