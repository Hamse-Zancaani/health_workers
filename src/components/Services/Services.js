import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import serviceImg1 from "../../assets/banner/3.jpg";
import serviceImg2 from "../../assets/about/44.jpg";
import serviceImg3 from "../../assets/about/88.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../pages/utilities/animationVarients";
import "./Services.scss";

const Services = () => {
  return (
    <div id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="section-header"
        >
          <h2>Vores Services</h2>
          <p>
            Professionelle vikarløsninger til sundhedssektoren med fokus på
            faglighed og fleksibilitet
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="service-tabs">
          <Tabs>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <TabList className="tab-list">
                <Tab>Sundhedssektor</Tab>
                <Tab>Psykiatri og socialpsykiatrik</Tab>
                <Tab>Studerende</Tab>
              </TabList>
            </motion.div>

            {/* Tab Panel 1 */}
            <TabPanel>
              <div className="tab-content">
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="tab-text"
                >
                  <h2>Sundhedssektor</h2>
                  <p>
                    Som en førende vikarvirksomhed i sundhedssektoren tilbyder
                    vi kvalificeret personale til en bred vifte af stillinger.
                    Vores mål er at levere fleksible og pålidelige
                    vikarløsninger, der understøtter både vores klienters og
                    medarbejderes behov.
                  </p>
                  <h4>Vores Sundhedspersonale</h4>
                  <ul>
                    <li>Sygeplejersker</li>
                    <li>Sygehjælpere</li>
                    <li>Social- og sundhedsassistenter</li>
                    <li>Social- og sundhedshjælpere</li>
                    <li>Handicaphjælpere</li>
                    <li>Studerende til (både fastvagter og gangvagter)</li>
                    <li>Psykiatere</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="tab-image"
                >
                  <img src={serviceImg1} alt="Sundhedssektor" />
                </motion.div>
              </div>
            </TabPanel>

            {/* Tab Panel 2 */}
            <TabPanel>
              <div className="tab-content">
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="tab-text"
                >
                  <h2>Psykiatri og socialpsykiatrik</h2>
                  <p>
                    Vi tilbyder erfarne og empatiske vikarer til psykiatri og
                    socialpsykiatri, hvor forståelse, tålmodighed og faglighed
                    er afgørende. Vores personale støtter borgere i deres
                    daglige udfordringer og bidrager til et trygt og stabilt
                    miljø.
                  </p>
                  <h4>Vores personale</h4>
                  <ul>
                    <li>Pædagoger</li>
                    <li>Socialrådgivere</li>
                    <li>Social- og sundhedsassistenter</li>
                    <li>Ergoterapeuter</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="tab-image"
                >
                  <img src={serviceImg2} alt="Psykiatri" />
                </motion.div>
              </div>
            </TabPanel>

            {/* Tab Panel 3 */}
            <TabPanel>
              <div className="tab-content">
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="tab-text"
                >
                  <h2>Studerende</h2>
                  <p>
                    Vi byder studerende velkommen til at arbejde som vikarer og
                    opnå værdifuld erhvervserfaring. Dette giver mulighed for
                    fleksibilitet og læring i et professionelt miljø.
                  </p>
                  <h4>Fordele</h4>
                  <ul>
                    <li>Praktisk erfaring i sundhedssektoren</li>
                    <li>Fleksible arbejdstider</li>
                    <li>Mulighed for fastansættelse</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="tab-image"
                >
                  <img src={serviceImg3} alt="Studerende" />
                </motion.div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
