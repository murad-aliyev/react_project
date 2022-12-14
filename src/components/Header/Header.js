import React from 'react';
import './Header.css';
import { useTranslation } from "react-i18next";


const lngs = [
    { code: "en",  native: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/322/flag-united-kingdom_1f1ec-1f1e7.png" },
    { code: "az", native: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/322/flag-azerbaijan_1f1e6-1f1ff.png" },
    { code: "ru", native: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/322/flag-russia_1f1f7-1f1fa.png" },
  ];

const  Header =()=> {

    const { i18n } = useTranslation();

    const handleTrans = (code) => {
      i18n.changeLanguage(code);
    };
        return (
            <header className="header">
            <div>
                <h1 className="header__title">
                    MuradSee
                </h1>
            </div>
            <div className='flags'>
                {lngs.map((lng, i) => {
                const { code, native } = lng;
                return <img src={native} className='language' onClick={() => handleTrans(code)}/>;
                })}
            </div>

            </header>
        );

}
 
export default Header;