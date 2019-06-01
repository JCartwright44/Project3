import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class SketchPad extends React.Component{




render() {
  const quotes = [
    "Don’t let what you can’t do stop you from doing what you can do. – John Wooden",
    "We all can dance when we find music we love. – Giles Andreae",
    "I think I can. I know I can.",
    "It’s not what happens to you, but how you react to it that matters. – Epictetus",
    "Being kind is never wasted.",
    "When you know better you do better. – Maya Angelou",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "You always pass failure on the way to success. – Mickey Rooney",
    "Make each day your masterpiece. – John Wooden",
    "Reach high, for stars lie hidden in your soul. Dream deep, for every dream precedes the goal. – Pamela Vaull Starr",
    "No one is perfect – that’s why pencils have erasers.  – Wolfgang Riebe",
    "Never waste a minute thinking of anyone you don’t like. –  Eisenhower",
    "Only surround yourself with people who will lift you higher.  – Oprah Winfrey",
    "Why fit in when you were born to stand out? – Dr. Seuss",
    "Never let the odds keep you from doing what you know in your heart you were meant to do. – H. Jackson Brown",
    "Anything is possible. Anything can be. – Shel Silverstein",
    "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales. ― Albert Einstein",
    "Never give up on what you really want to do. The person with big dreams is more powerful than one with all the facts. – Albert Einstein",
    "Nothing is particularly hard if you break it down into small jobs. – Henry Ford",
    "Be silly, be honest, be kind. – Ralph Waldo Emerson"
  ];

let i = Math.floor((Math.random() * 20));

let quote = quotes[i];

  return (
    <h5 id="boxSize">{quote}</h5>
  )
}
}

export default SketchPad;