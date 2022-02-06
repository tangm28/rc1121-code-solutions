import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const ACCORDIONITEMS = [
  { sectionHeader: 'Hypertext Markup Language', sectionContent: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.' },
  { sectionHeader: 'Cascading Style Sheets', sectionContent: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]' },
  { sectionHeader: 'JavaScript', sectionContent: 'JavaScript (/ˈdʒɑːvəskrɪpt/),[10] often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.[11] Over 97% of websites use JavaScript on the client side for web page behavior,[12] often incorporating third-party libraries.[13] All major web browsers have a dedicated JavaScript engine to execute the code on users devices.' }];

ReactDOM.render(
  <Accordion accordionItems={ACCORDIONITEMS} />,
  document.querySelector('#root')
);
