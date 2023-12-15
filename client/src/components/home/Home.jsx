import { useState, useEffect } from "react";
import HomeSlider from "./home-slider/HomeSlider";

export default function Hero() {


  return (
    <div className="hero_area">
      <HomeSlider />
     

      <section className="featured-food">
        <div className="container">
              <h2>Weekly Featured Food</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="food-item">
                <h2>Breakfast</h2>
                <img src="images/breakfast_item.jpg" alt="" />
                <div className="price">$4.50</div>
                <div className="text-content">
                  <h4>Kale Chips Art Party</h4>
                  <p>
                    Dreamcatcher squid ennui cliche chicharros nes echo small
                    batch jean shorts hexagon street art knausgaard wolf...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="food-item">
                <h2>Lunch</h2>
                <img src="images/lunch_item.jpg" alt="" />
                <div className="price">$7.50</div>
                <div className="text-content">
                  <h4>Taiyaki Gastro Tousled</h4>
                  <p>
                    Dreamcatcher squid ennui cliche chicharros nes echo small
                    batch jean shorts hexagon street art knausgaard wolf...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="food-item">
                <h2>Dinner</h2>
                <img src="images/dinner_item.jpg" alt="" />
                <div className="price">$12.50</div>
                <div className="text-content">
                  <h4>Batch Squid Jean Shorts</h4>
                  <p>
                    Dreamcatcher squid ennui cliche chicharros nes echo small
                    batch jean shorts hexagon street art knausgaard wolf...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2>Our blog post</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="blog-post">
                <img src="images/blog_post_01" alt="" />
                <div className="date">26 Oct 2020</div>
                <div className="right-content">
                  <h4>Stumptown Tofu Schlitz</h4>
                  <span>Branding / Admin</span>
                  <p>
                    Skateboard iceland twee tofu shaman crucifix vice before
                    they sold out corn hole occupy drinking vinegar chambra
                    meggings kale chips hexagon...
                  </p>
                  <div className="text-button">
                    <a href="#">Continue Reading</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-post">
                <img src="images/blog_post_02.jpg" alt="" />
                <div className="date">21 Oct 2020</div>
                <div className="right-content">
                  <h4>Succulents Hashtag Folk</h4>
                  <span>Branding / Admin</span>
                  <p>
                    Skateboard iceland twee tofu shaman crucifix vice before
                    they sold out corn hole occupy drinking vinegar chambra
                    meggings kale chips hexagon...
                  </p>
                  <div className="text-button">
                    <a href="#">Continue Reading</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-post">
                <img src="images/blog_post_03.jpg" alt="" />
                <div className="date">11 Oct 2020</div>
                <div className="right-content">
                  <h4>Knaus Sriracha Pinterest</h4>
                  <span>Dessert / Chef</span>
                  <p>
                    Skateboard iceland twee tofu shaman crucifix vice before
                    they sold out corn hole occupy drinking vinegar chambra
                    meggings kale chips hexagon...
                  </p>
                  <div className="text-button">
                    <a href="#">Continue Reading</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-post">
                <img src="images/blog_post_04.jpg" alt="" />
                <div className="date">03 Oct 2020</div>
                <div className="right-content">
                  <h4>Crucifix Selvage Coat</h4>
                  <span>Plate / Chef</span>
                  <p>
                    Skateboard iceland twee tofu shaman crucifix vice before
                    they sold out corn hole occupy drinking vinegar chambra
                    meggings kale chips hexagon...
                  </p>
                  <div className="text-button">
                    <a href="#">Continue Reading</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Тeam</h2>
          <div className="row"> 
            <div className="col-md-3 col-sm-6 col-xs-12">
         
              <div className="service-item">
                <a href="menu.html">
                  <img src="images/cook_breakfast.png" alt="Breakfast" />
                  <h4>Breakfast</h4>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="service-item">
                <a href="menu.html">
                  <img src="images/cook_lunch.png" alt="Lunch" />
                  <h4>Lunch</h4>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="service-item">
                <a href="menu.html">
                  <img src="images/cook_dinner.png" alt="Dinner" />
                  <h4>Dinner</h4>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="service-item">
                <a href="menu.html">
                  <img src="images/cook_dessert.png" alt="Desserts" />
                  <h4>Desserts</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
