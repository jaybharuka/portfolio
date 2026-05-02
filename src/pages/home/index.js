import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 d-flex align-items-center justify-content-center"
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="text-center text-white">
              <div className="coding-animation">
                <h3 className="mb-3" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                  &lt;/&gt;
                </h3>
                <p className="mb-2" style={{ fontSize: '1.2rem', opacity: '0.9' }}>
                  AI / ML Engineering
                </p>
                <p className="mb-2" style={{ fontSize: '1.2rem', opacity: '0.9' }}>
                  LLMs · RAG · MCP · Agents
                </p>
                <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>
                  Cloud &amp; Full Stack
                </p>
              </div>
            </div>
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Resume Button - Bottom Right */}
        <div className="floating-resume-btn">
          <a href={introdata.resume_link} target="_blank" rel="noopener noreferrer">
            <div id="floating_resume" className="floating-btn">
              📄 Resume
            </div>
          </a>
        </div>
      </section>
    </HelmetProvider>
  );
};
