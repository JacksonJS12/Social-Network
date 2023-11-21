import React from "react";

export default function Nav(){
    return(
        <div className="nav">
        <h2>About me</h2>
        <div className="padding">
          <div className="img2"><img src="public/images/img2.jpg" alt="" /></div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer euismod ante non diam. Sed eleifend odio sed quam. Sed vulputate, turpis at tincidunt porttitor, est elit consequat metus.</div>
        <h2>Past Articles</h2>
        <ul>
          <li><a href="#">New template: Internet Music</a></li>
          <li><a href="#">CSS Heaven Gallery</a></li>
          <li><a href="#">CSS Toplist</a></li>
          <li><a href="#">Open Source Web Designs and Webmaster Forum</a></li>
          <li><a href="#">Welcome to iollo's review highway</a></li>
        </ul>
        <br />
        <h2>Partners</h2>
        <ul>
          <li> <a href="#">solucija.com</a></li>
          <li> <a href="#">free-css-templates.com</a></li>
          <li> <a href="#">snews.vietbee.net</a></li>
          <li> <a href="#">p-ahlqvist.com</a></li>
          <li> <a href="#">www.brauck.nl</a></li>
          <li> <a href="#">www.design4.ltd.pl</a></li>
        </ul>
      </div>
    )
}