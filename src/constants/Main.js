import React from 'react';
import {FaSitemap, FaCode, FaDatabase, FaChartBar} from 'react-icons/fa';
import { GiMining } from 'react-icons/gi';
import { SiDatacamp } from 'react-icons/si';
import cnrLogo from '../assets/logos/cnr-logo.png';
import zenLogo from '../assets/logos/zen-logo.jpg';
import sodexoLogo from '../assets/logos/sodexo-logo.png';
import whiteMillLogo from '../assets/logos/whiteMill-logo.png';
import sicpaLogo from '../assets/logos/sicpa-logo.png';


const date = new Date ();
const age = date.getFullYear () - 1984;
const year = date.getFullYear();

export const MainConstants = {
  year: year,
  name: 'Onur',
  surname: 'Bilgin',
  titles: ['Full Stack Developer', 'Financial Programmer', 'Mobile Developer'],
  techs: ['NodeJS', 'React', 'React Native', 'AWS', 'SQL', 'NoSQL'],
  aboutText: `Since childhood I am passionate about computers, programming and technology. I dedicate myself on simplification of time consuming
    operations with the help of programming.<br>
    <p>Also I have ten years finance experience (mostly on reporting and budgeting) which helps me to
    implement my programming skills to financial operations' development and accurate reporting of
    <a href="https://kpi.org/KPI-Basics" target="_blank"><strong>KPIs</strong></a> which
    encapsulates the subjects as financials, sales, marketing, production etc.</p>`,
  aboutInfo: {
    birth: 'Birthday: 11 May 1984',
    age: `Age: ${age}`,
    university: 'University: Gazi University - Ankara/Turkey',
    degree: 'Degree: Industrial Engineer',
    interests: 'Interests: Programming, Calisthenics, Travel',
  },
  links: {
    github: 'https://github.com/onurbilginnn',
    linkedin: 'https://www.linkedin.com/in/onur-bilgin-9134811a4/'
  },
  services: {
    backend: {
      icon: <FaSitemap />,
      title: 'Backend Development',
      statement: `Backend development languages handle the ‘behind-the-scenes’
       functionality of web applications. It’s code that connects the web to a database,
        manages user connections, and powers the web application itself.`
    },
    frontend: {
      icon: <FaCode />,
      title: 'Frontend Development',
      statement: `Front-end web development is the practice of converting data to a graphical interface,
       through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.`
    },
    database: {
      icon: <FaDatabase />,
      title: 'Database Management',
      statement: `Database Management, allows a person to organize, store and retrieve data from a computer.
       Database Management can also describe, the data storage, operations and security practices of a Database Administrator,
        throughout the life cycle of the data.`
    },
    dataMining: {
      icon: <GiMining />,
      title: 'Data Mining',
      statement: `Data mining is a process to turn raw data into useful information.
       By using software to look for patterns in large batches of data,
        businesses can develop more effective marketing strategies,
         increase sales and decrease costs.`
    },
    etl: {
      icon: <SiDatacamp />,
      title: 'ETL',
      statement: `Extract, Transform, Load (ETL) is the general procedure of copying data
       from one or more sources into a destination system which represents the data differently
        from the source(s) or in a different context than the source(s).`
    },
    bi: {
      icon: <FaChartBar />,
      title: 'Business Intelligence',
      statement: `Business intelligence (BI) is a technology-driven process for
       analyzing data and delivering actionable information that helps executives,
        managers and workers make informed business decisions.`
    }
  },
  projects: {
    cnr: {
      img: cnrLogo,
      imgAlt: 'Cnr Logo',
      projects: ['ETL Implementation', 'BI Financial Reporting', 'CRM Development']
    },
    whiteMill: {
      img: whiteMillLogo,
      imgAlt: 'White Mill Logo',
      projects: ['Stock Management Software Development']
    },
    zen: {
      img: zenLogo,
      imgAlt: 'Zen Logo',
      projects: ['ETL Implementation', 'BI Management Reporting']
    },
    sodexo: {
      img: sodexoLogo,
      imgAlt: 'Sodexo Logo',
      projects: ['ETL Implementation', 'BI Management Reporting']
    },
    sicpa: {
      img: sicpaLogo,
      imgAlt: 'Sicpa Logo',
      projects: ['Web Service Development', 'BI Management Reporting', 'CRM Development']
    }
  },
  contact: {
    address: 'Üsküdar/İstanbul, Turkey',
    email: 'onurbilginnn@gmail.com',
    phone: '+90 507 391 98 15',
    phoneForCall: '+905073919815'
  }
};
