import React from 'react';
import {FaSitemap, FaCode, FaDatabase, FaCloud} from 'react-icons/fa';
import { GiMining } from 'react-icons/gi';
import { SiDatacamp } from 'react-icons/si';
import restApiLogo from '../assets/logos/restApi.png';
import awsDevAssLogo from '../assets/logos/AWSDev.png';
import awsSAAssLogo from '../assets/logos/AWSSAAS.png';
import awsCPPLogo from '../assets/logos/AWSCPP.png';
import jsLogo from '../assets/logos/javascript.png';
import reactLogo from '../assets/logos/react.png';


const date = new Date ();
const age = date.getFullYear () - 1984;
const year = date.getFullYear();

export const MainConstants = {
  year: year,
  name: 'Onur',
  surname: 'Bilgin',
  titles: ['Full Stack Developer', 'Financial Programmer', 'Mobile Developer'],
  techs: ['NodeJS', 'React', 'Flutter', 'AWS', 'SQL', 'NoSQL'],
  aboutText: `Since childhood I am passionate about computers, programming and technology. I dedicate myself on simplification of time consuming
    operations with the help of programming.<br>
    <p>Self learner to be able to follow up new frameworks and libraries, innovative problem-solving.
     Understandable, and object oriented programming skills.</p>
     <p>Delivers exceptional results through automatization of processes, developing and adapting required softwares.</p>`,
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
    devOps: {
      icon: <FaCloud />,
      title: 'DevOps Engineering',
      statement: `DevOps is a set of practices that combines software development and IT operations.
       It aims to shorten the systems development life cycle and provide continuous delivery 
       with high software quality.`
    },
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
    }
  },
  projects: {
    awsDeveloper: {
      img: awsDevAssLogo,
      imgAlt: 'Developer',
      link: 'https://www.credly.com/earner/earned/badge/c28d441c-d016-424f-b884-194342f249ba',
      projects: ['AWS', 'Developer Associate']
    },
    awsSA: {
      img: awsSAAssLogo,
      link: 'https://www.credly.com/earner/earned/badge/a5b959d5-bbc8-4028-9ecd-2f21cec021ce',
      imgAlt: 'SAA',
      projects: ['AWS', 'Solutions Architect Associate']

    },
    awsCPP: {
      img: awsCPPLogo,
      link: 'https://www.credly.com/earner/earned/badge/3503a455-529a-4c70-8570-a9aa2e098d61',
      imgAlt: 'CPP',
      projects: ['AWS', 'Cloud Practitioner']

    },
    javascript: {
      img: jsLogo,
      link: 'https://www.hackerrank.com/certificates/9f575ad55cdc',
      imgAlt: 'JavaScript Logo',
      projects: ['HackerRank', 'JavaScript']
    },
    restApi: {
      img: restApiLogo,
      link: 'https://www.hackerrank.com/certificates/c3efbb66f627',
      imgAlt: 'Rest Api Logo',
      projects: ['HackerRank', 'Rest Api']
    },
    react: {
      img: reactLogo,
      link: 'https://skillvalue.com/en/user/certificate/3AclwM71OIBQLbNKrme1ClYDPg2OjsBDoOQAfCzo3cfb9DU7sGKt8plk6tZn',
      imgAlt: 'React Logo',
      projects: ['SkillValue', 'ReactJS']
    },
  },
  contact: {
    address: 'Üsküdar/İstanbul, Turkey',
    email: 'onurbilginnn@gmail.com',
    phone: '+90 507 391 98 15',
    phoneForCall: '+905073919815'
  }
};
