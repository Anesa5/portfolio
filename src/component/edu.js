import React, { useState } from "react";
import "./Qualification.css";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Edu = () => {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <section className="qualification__section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                {/* Tabs */}
                <div className="qualification__tabs">
                    <div
                        className={`qualification__button ${activeTab === "education" ? "qualification__active" : ""}`}
                        onClick={() => setActiveTab("education")}
                    >
                        <FaGraduationCap className="qualification__icon" />
                        Education
                    </div>
                    <div
                        className={`qualification__button ${activeTab === "work" ? "qualification__active" : ""}`}
                        onClick={() => setActiveTab("work")}
                    >
                        <FaBriefcase className="qualification__icon" />
                        Work
                    </div>
                </div>

                {/* Sections */}
                <div className="qualification__sections">
                    {/* Education */}
                    <div className={`qualification__content ${activeTab === "education" ? "qualification__active" : ""}`}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Diploma in English</h3>
                                <span className="qualification__subtitle">British Council, Kandy</span>
                                <div className="qualification__calendar">
                                    <FaCalendarAlt /> 2011 - 2012
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">GCE Advance Level</h3>
                                <span className="qualification__subtitle">St.Anthony's College, Kandy</span>
                                <div className="qualification__calendar">
                                    <FaCalendarAlt /> 2012 - 2014
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BSc Management Information System</h3>
                                <span className="qualification__subtitle">NSBM Green University</span>
                                <div className="qualification__calendar">
                                    <FaCalendarAlt /> 2015 - 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Data Analyst Professional Certification</h3>
                                <span className="qualification__subtitle">Google | Coursera - Online</span>
                                <div className="qualification__calendar">
                                    <FaCalendarAlt /> 2021
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work */}
                    <div className={`qualification__content ${activeTab === "work" ? "qualification__active" : ""}`}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Trainee Banking Assistant</h3>
                                <span className="qualification__subtitle">DFCC Head Office - Colombo</span>
                                <div className="qualification__calendar">
                                    <FaCalendarAlt /> 2017 - 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Banking Assistant</h3>
                                <span className="qualification__subtitle">DFCC Head Office - Colombo</span>
                                <div className="qualification__calendar">
                                    <FaCalendarAlt /> 2019 - 2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Data Analyst - Digital banking</h3>
                                <span className="qualification__subtitle">DFCC Head Office - Colombo</span>
                                <div className="qualification__calendar">
                                    <FaCalendarAlt /> 2020 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Edu;