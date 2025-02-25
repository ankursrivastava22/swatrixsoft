import Link from "next/link";
import { usePathname } from "next/navigation";

const ElementsLayout = ({ MenuData, menuGrid, num1, num2 }) => {
  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);
  return (
    <div className="col-lg-4 col-xxl-4 single-mega-item">
      <ul className="mega-menu-item">
        {MenuData &&
          MenuData.menuData.map((data, index) => {
            if (data.menuType === menuGrid) {
              const elements = data.menuItems?.map(
                (value, innerIndex) =>
                  value.id >= num1 &&
                  value.id <= num2 && (
                    <li key={innerIndex}>
                      <Link
                        className={isActive(value.link) ? "active" : ""}
                        href={value.coming ? "/maintenance" : value.link}
                      >
                        {value.title}
                        {value.coming ? (
                          <span className="rbt-badge-card ms-3">
                            {value.coming}
                          </span>
                        ) : value.badgeText ? (
                          <span className="rbt-badge-card ms-3">
                            {value.badgeText}
                          </span>
                        ) : (
                          ""
                        )}
                      </Link>
                    </li>
                  )
              );
              return elements;
            }
          })}
      </ul>
    </div>
  );
};
export default ElementsLayout;
