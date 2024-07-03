import { Link } from 'react-router-dom';
import { useState } from 'react';

import logo_hidemenu from '../assets/logo-hidemenu.png';
import affiliateLogo from '../assets/affiliate.png';
import blogLogo from '../assets/blogs.png';
import respLogo from '../assets/responsibleG.png';
import livesupLogo from '../assets/livesupport.png';
import forumLogo from '../assets/forum.png';
import promotionLogo from '../assets/promotion.png';
import sponsorLogo from '../assets/sponsorship.png';
import vipLogo from '../assets/VipClub.png';

import bitcoin from '../assets/bitcoin.png';
import arrowdown from '../assets/arrow-down.svg';

import sportsIcon from '../assets/sports-i.png';
import casinoIcon from '../assets/casino-i.png';

import search from '../assets/search-normal.svg';
import notify from '../assets/notification.png';
import profile from '../assets/profile.svg';
import message from '../assets/message.png';
import "./Layout.scss";
import "../styles/toggleButton.scss";

const Header = () => {
  const [stateOfSport, setStateOfSport] = useState(true);

  interface IHeaderLinks {
    title: string
    icons: string
    nameLink: string
  }

  const headerLinks: IHeaderLinks[] = [{ title: "Promotion", icons: promotionLogo, nameLink: "#" }, { title: "Affiliate", icons: affiliateLogo, nameLink: "#" }, { title: "VIP Club", icons: vipLogo, nameLink: "#" },
  { title: "Blogs", icons: blogLogo, nameLink: "#" }, { title: "Forem", icons: forumLogo, nameLink: "#" }, { title: "SponsorShip", icons: sponsorLogo, nameLink: "#" }, { title: "Responsible Gambling", icons: respLogo, nameLink: "#" },
  { title: "Live Support", icons: livesupLogo, nameLink: "#" }];


  const handleCheck = () => {
    setStateOfSport(!stateOfSport);
  };

  const handleSearch = () => {

  }
  const handleMessage = () => {

  }
  const handleNotify = () => {

  }
  const handleProfile = () => {

  }
  return (
    <div className="flex justify-center box-border m-auto  bg-[#61bbc5]">
      <div className="w-[259px] h-[664px] rounded-[20px] border-[1px] border-white mt-[18px] ml-[15px]  bg-gradient-to-l from-white to-transparent ">
        <div className="flex flex-col items-center max-w-full h-[72px] rounded-[20px] bg-[#0B2C40] mb-[20px] ">
          <Link to="/">
            <img src={logo_hidemenu} alt="logo" className="mt-[10px]" style={{ width: "191px", height: "47px" }} />
          </Link>
        </div>
        <div>
          {headerLinks.map((head, index) => {
            return (

              <div className="min-h-[54px] w-full " key={index}>
                <Link to={head.nameLink} className="flex ">
                  <img src={head.icons} alt={head.title} className={(index === 0) ? "ml-[10px]" : "ml-[20px]"} />
                  <div className="content-center ml-[10px]">{head.title}</div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mt-[20px] mx-auto">
        <div className="flex justify-between h-[80px]  rounded-[160px] bg-[#0000001f]  mx-[28px]">
          <div className="w-[33.3%]">
            <div className="relative inline-block  w-[245.5px] h-[40px] my-[20px] mx-[20px] bg-[#F8F9FB] opacity-100   rounded-[40px] ">
              <div className="absolute top-0 left-0 flex flex-row  justify-between w-[245.5px] h-[40px] items-center px-[20px]">
                <div className="flex justify-center items-center">
                  <img src={casinoIcon} className='w-[16.92px] h-[20px]' alt="casino" />
                  <div className={stateOfSport ? "text-[#848484]" : "text-white"} style={{ marginLeft: "5px", fontSize: "16px", fontWeight: "300" }}>Casino</div>
                </div>
                <div className="flex justify-center items-center">
                  <img src={sportsIcon} className='w-[24.16px] h-[16px]' alt="sport" />
                  <div className={stateOfSport ? "text-white" : "text-[#848484]"} style={{ marginLeft: "5px", fontSize: "16px", fontWeight: "300" }}>Sports</div>
                </div>

              </div>
              <span className={stateOfSport ? "sports-on " : "casino-on"} >
                <div className=" flex justify-center items-center  rounded-[160px] w-[137.5px] h-[40px] text-center" >
                  <div className="flex justify-center items-center w-full h-full rounded-[160px] bg-[#06344C]  bg-opacity-90 ">
                    <img src={stateOfSport ? sportsIcon : casinoIcon} className='w-[24.16px] h-[20px]' alt="sport" />
                    <div className="px-[5px]  text-white" >{stateOfSport ? "Sports" : "Casino"}</div>
                  </div>
                </div>
              </span>
              <input type="checkbox" className="opacity-0 w-full h-full z-10 cursor-pointer" onChange={handleCheck} checked={stateOfSport} />
            </div>
          </div>




          <div className="w-[33.3%]">
            <div className="flex flex-row justify-between items-center w-[341px] h-[55px] rounded-[50px] my-[12px] bg-[#F5F6F8]">
              <div className=" flex flex-row w-[168px] h-[20px] ml-[20px]" >
                <img src={bitcoin} className='w-[20px] h-[20px]' alt="bitcoin" />
                <div className="mx-[10px]  text-[16px] text-[400] leading-[19.2px]">0.000123 BTC</div>
                {/* <img src={arrowdown} className="App-logo cursor-pointer" alt="logo" /> */}
              </div>
              <div className=" flex justify-center items-centerw-[139px] h-[39px] my-[8px] mr-[20px] rounded-[50px]  gap-[10px] px-[30px] py-[10px] bg-gradient-to-l from-[#34A853] to-[#067524] text-white text-[400] text-[16px] leading-[19.2px] text-center cursor-pointer">
                DEPOSIT
              </div>
            </div>
          </div>
          <div className="flex  justify-between items-center w-[246px] h-[55px] mx-[12px] my-[12px] rounded-[50px] bg-[#F5F6F8]">
            <div className='flex flex-row  justify-between items-center  w-[180px] h-[33px] mx-[33px]'>
              {/* <img src={search} className='w-[24px] h-[24px] cursor-pointer' alt="search" onClick={handleSearch}/> */}
              <img src={notify} className='w-[24px] h-[24px] cursor-pointer' alt="notify" onClick={handleNotify} />
              <img src={message} className='w-[32px] h-[33px] cursor-pointer' alt="message" onClick={handleMessage} />
              {/* <img src={profile} className='w-[24px] h-[24px] cursor-pointer' alt="profile" onClick={handleProfile}/> */}

            </div>
          </div>

        </div>

        <div className="mt-[20px] mx-auto">
          <div className="flex justify-between h-[420px]  rounded-[20px] bg-[#0000001f]  mx-[28px]">

          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;
