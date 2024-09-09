import * as React from "react";
import { SVGProps } from "react";

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    data-name="24x24/On Light/Notification"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#FF5C00"
      d="M9.25 19.25v-.5H5.5a2.253 2.253 0 0 1-2.25-2.25v-.382a2.542 2.542 0 0 1 1.415-2.289 1.248 1.248 0 0 0 .685-1.007l.446-4.91a6.225 6.225 0 0 1 12.4 0l.446 4.91a1.26 1.26 0 0 0 .686 1.005 2.547 2.547 0 0 1 1.418 2.29v.382a2.252 2.252 0 0 1-2.25 2.25H14.75v.501a2.75 2.75 0 0 1-5.5 0Zm1.5 0a1.25 1.25 0 0 0 2.5 0v-.5h-2.5ZM7.295 8.05l-.445 4.908a2.738 2.738 0 0 1-1.511 2.212 1.055 1.055 0 0 0-.589.949v.382a.751.751 0 0 0 .75.749h13a.751.751 0 0 0 .75-.75v-.382a1.054 1.054 0 0 0-.586-.948 2.739 2.739 0 0 1-1.514-2.212l-.444-4.908a4.725 4.725 0 0 0-9.411 0Z"
    />
  </svg>
);
export default NotificationIcon;
