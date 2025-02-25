import Image from "next/image";
import Link from "next/link";

import us from "../../../public/images/icons/en-us.png";
import fr from "../../../public/images/icons/fr.png";
import de from "../../../public/images/icons/de.png";

const HeaderLanguage = () => {
  return (
    <>
      <div className="header-info">
        <ul className="rbt-dropdown-menu switcher-language">
          <li className="has-child-menu">
            <Link href="#">
              <Image
                className="left-image"
                src={us}
                width={25}
                height={16}
                alt="Language Images"
              />
              <span className="menu-item">English</span>
              <i className="right-icon feather-chevron-down"></i>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link href="#">
                  <Image
                    className="left-image"
                    src={fr}
                    width={25}
                    height={16}
                    alt="Language Images"
                  />
                  <span className="menu-item">Français</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    className="left-image"
                    src={de}
                    width={25}
                    height={16}
                    alt="Language Images"
                  />
                  <span className="menu-item">Deutsch</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="header-info">
        <ul className="rbt-dropdown-menu currency-menu">
          <li className="has-child-menu">
            <Link href="#">
              <span className="menu-item">USD</span>
              <i className="right-icon feather-chevron-down"></i>
            </Link>
            <ul className="sub-menu hover-reverse">
              <li>
                <Link href="#">
                  <span className="menu-item">EUR</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="menu-item">GBP</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderLanguage;
