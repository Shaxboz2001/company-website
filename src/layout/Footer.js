import React, { Component } from 'react'
import { ImTelegram } from "react-icons/im";
import {RiInstagramFill} from "react-icons/ri"
import {BsFacebook} from "react-icons/bs"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from "react-icons/bs"
import {ImLocation} from "react-icons/im"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
class Footer extends Component {
    state = {  } 
    render() { 
        return (
          <footer>
            <div className="left">
              <p>
                <ImLocation /> Tashkent, Uzbekiston
              </p>
              <p>
                <BsFillTelephoneFill /> +99833-397-76-46
              </p>
              <p>
                <MdEmail />{" "}
                <a href="mailto:ismoilovs674@gmail.com">
                  ismoilovs674@gmail.com
                </a>
              </p>
            </div>
            <div className="right">
              <div className="icons">
                <a href="https://t.me/UnitedClubAdmin">
                  <ImTelegram />
                </a>
                <a href="https://www.instagram.com/__shaxboz._">
                  {" "}
                  <RiInstagramFill />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100077115074719">
                  <BsFacebook />
                </a>

                <a href="https://www.linkedin.com/in/shaxboz-ismoilov-581583238">
                  {" "}
                  <BsLinkedin />
                </a>
                <a href="https://github.com/Shaxboz2001">
                  <BsGithub />
                </a>
              </div>
              <p>
                &copy; Copyright {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </footer>
        );
    }
}
 
export default Footer;