import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers"

function Nav() {
    const categories = [
        {
            name: 'commecial',
            description: "Photos of grocery stores, food trucks, and other commerical projects"
        },
        {
            name: 'portraits',
            description: 'Portaits of people in my life'
        },
        {
            name: 'food',
            description: 'Deliscious delicacies'
        },
        {
            name: 'landscape',
            description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
        }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`);
    }

    return (
        <header className="flex-row px-1">
           <h2>
               <a data-testid="link" href ="/">
                   <span role="img" aria-label="camera">📸</span> Oh Snap!
               </a>
           </h2>
           <nav>
               <ul className="flex-row">
                   <li className="mx-2">
                       <a data-testid="about" href="#about">
                           About Me
                       </a>
                   </li>
                   <li className="mx-2">
                       <span>Contact</span>
                   </li>
                   {categories.map((category) => (
                       <li
                       className = "mx-1"
                       key={category.name}
                       >
                           <span onClick={() => categorySelected(category.name)}>
                               {capitalizeFirstLetter(category.name)}
                            </span>
                       </li>
                   ))}
               </ul>
           </nav>
        </header>
    );
}

export default Nav;