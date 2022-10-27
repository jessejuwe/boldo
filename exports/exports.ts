// exporting functional components in one file
// de-clutterizes the index.tsx component view

// exporting from containers directory
export { default as Button } from '../components/Buttons/Buttons';

export { default as LandingPage } from '../containers/LandingPage/LandingPage';
export { default as Services } from '../containers/Services/Services';
export { default as Testimonials } from '../containers/Testimonials/Testimonials';
export { default as Blog } from '../containers/Blog/Blog';
export { default as About } from '../containers/About/About';

// exporting from layouts directory
export { default as Footer } from '../layouts/Footer/Footer';
export { default as Navbar } from '../layouts/Navbar/Navbar';
export { default as Wrapper } from '../layouts/Wrapper/Wrapper';

// exporting from components directory
// export { default as Header } from '../components/Header/Header';
