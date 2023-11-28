import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Header from './component/Header';
import { useEffect, useState } from 'react';
import SitemapComponent from './component/SitemapComponent';

function App() {

  const [sitemapContent, setSitemapContent] = useState('');

  useEffect(() => {
    // Assume you have a function to generate the sitemap content
    // const generatedSitemap = generateSitemap();
    // setSitemapContent(generatedSitemap);

    // to generate from sitemap.xml
    getSitemapData();
  }, []);

  // to generate static sitemap
  // const generateSitemap = () => {
  //   const routes = [
  //     '/',
  //     '/about',
  //     '/contact',
  //     // Add more routes as needed
  //   ];
  
  //   return routes.map((route) => <Link to={route} ><li>{window.location.origin}{route}</li></Link>);
  // };

  // const getSitemapData = async () => {
  //   try {
  //     const response = await fetch('/sitemap.xml');
  //     const data = await response.text();
  
  //     // Parse the XML data manually
  //     const parser = new DOMParser();
  //     const xmlDoc = parser.parseFromString(data, 'text/xml');
  
  //     // Extract URLs without the hostnames
  //     const urlNodes = xmlDoc.getElementsByTagName('url');
  //     const links = [];
  
  //     for (let i = 0; i < urlNodes.length; i++) {
  //       const locNode = urlNodes[i].getElementsByTagName('loc')[0];
  //       if (locNode) {
  //         const url = locNode.textContent || locNode.innerText;
  //         const path = new URL(url).pathname;
  //         links.push(path);
  //       }
  //     }

  //     let generatedSitemap = links.map((link) => <Link to={link} ><li>{window.location.origin}{link}</li></Link>);
  //     setSitemapContent(generatedSitemap);

  //     // Output the list of paths
  //     console.log(links);
  //   } catch (error) {
  //     console.error('Error fetching sitemap:', error);
  //   }
  // };

  const getSitemapData = async () => {
    try {
      const response = await fetch('https://js-ojha.github.io/test/sitemap.xml');
      const data = await response.text();
  
      // Parse the XML data manually
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
  
      // Extract URLs without the hostnames
      const urlNodes = xmlDoc.getElementsByTagName('url');
      const links = [];
  
      for (let i = 0; i < urlNodes.length; i++) {
        const locNode = urlNodes[i].getElementsByTagName('loc')[0];
        if (locNode) {
          const url = locNode.textContent || locNode.innerText;
          const path = new URL(url).pathname;
          links.push(path);
        }
      }
      let generatedSitemap = links.map((link) => <Link to={link} ><li>{window.location.origin}{link}</li></Link>);
      setSitemapContent(generatedSitemap);
      // Output the list of paths
      console.log(links);
    } catch (error) {
      console.error('Error fetching sitemap:', error);
    }
  };  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
       <Route path="test/*" element={<Home />} /> 
        <Route path="test/about" exact element={<About />} /> 
        <Route path="test/contact" exact element={<Contact />} /> 

        {/* Sitemap route */}
        <Route
          path="test/sitemap"
          element={<SitemapComponent sitemapContent={sitemapContent} />}
        />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
