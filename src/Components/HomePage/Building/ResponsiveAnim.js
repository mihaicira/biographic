import React from "react";
import "./ResponsiveAnim.scss";

function ResponsiveAnim() {
  return (
    <svg
      width="489"
      height="238"
      viewBox="0 0 489 238"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="responsive-anim">
        <rect
          id="sides"
          x="1"
          y="1"
          width="487"
          height="236"
          rx="9"
          stroke="white"
          stroke-width="2"
        />
        <line
          id="phineLineTop"
          x1="-8.74228e-08"
          y1="21"
          x2="125"
          y2="21"
          stroke="white"
          stroke-width="2"
        />
        <line
          id="tabletLineTop"
          x1="-8.74228e-08"
          y1="21"
          x2="303"
          y2="21"
          stroke="white"
          stroke-width="2"
        />
        <line
          id="desktopLineTop"
          x1="-8.74228e-08"
          y1="21"
          x2="489"
          y2="21"
          stroke="white"
          stroke-width="2"
        />
        <line
          id="phoneLineBtm"
          y1="213"
          x2="123"
          y2="213"
          stroke="white"
          stroke-width="2"
        />
        <line
          id="tabletLineBtm"
          x1="-8.74228e-08"
          y1="213"
          x2="303"
          y2="213"
          stroke="white"
          stroke-width="2"
        />
        <g id="mountain1">
          <path d="M225.5 75L269.234 196.5H181.766L225.5 75Z" fill="#FFFCFC" />
          <path d="M225.5 75L269.234 196.5H181.766L225.5 75Z" fill="#FFFCFC" />
          <path d="M225.5 75L269.234 196.5H181.766L225.5 75Z" fill="#FFFCFC" />
        </g>
        <g id="mountain2">
          <path
            d="M281.5 101L325.234 196.25H237.766L281.5 101Z"
            fill="#FFFCFC"
          />
          <path
            d="M281.5 101L325.234 196.25H237.766L281.5 101Z"
            fill="#FFFCFC"
          />
          <path
            d="M281.5 101L325.234 196.25H237.766L281.5 101Z"
            fill="#FFFCFC"
          />
        </g>
        <circle id="sun" cx="323.5" cy="63.5" r="20.5" fill="white" />
        <circle
          id="iphBtn"
          cx="140.5"
          cy="225.5"
          r="6.5"
          stroke="white"
          stroke-width="2"
        />
        <path
          id="foobar"
          d="M21.0264 13.0625L22.3838 8.7168H22.9795L22.8623 9.58105L21.4805 14H20.8994L21.0264 13.0625ZM20.1133 8.7168L21.2705 13.1113L21.3535 14H20.7432L19.21 8.7168H20.1133ZM24.2783 13.0771L25.3818 8.7168H26.2803L24.7471 14H24.1416L24.2783 13.0771ZM23.1113 8.7168L24.4395 12.9893L24.5908 14H24.0146L22.5938 9.57129L22.4766 8.7168H23.1113ZM28.5459 13.0625L29.9033 8.7168H30.499L30.3818 9.58105L29 14H28.4189L28.5459 13.0625ZM27.6328 8.7168L28.79 13.1113L28.873 14H28.2627L26.7295 8.7168H27.6328ZM31.7979 13.0771L32.9014 8.7168H33.7998L32.2666 14H31.6611L31.7979 13.0771ZM30.6309 8.7168L31.959 12.9893L32.1104 14H31.5342L30.1133 9.57129L29.9961 8.7168H30.6309ZM36.0654 13.0625L37.4229 8.7168H38.0186L37.9014 9.58105L36.5195 14H35.9385L36.0654 13.0625ZM35.1523 8.7168L36.3096 13.1113L36.3926 14H35.7822L34.249 8.7168H35.1523ZM39.3174 13.0771L40.4209 8.7168H41.3193L39.7861 14H39.1807L39.3174 13.0771ZM38.1504 8.7168L39.4785 12.9893L39.6299 14H39.0537L37.6328 9.57129L37.5156 8.7168H38.1504ZM41.6562 13.5215C41.6562 13.3685 41.7035 13.2399 41.7979 13.1357C41.8955 13.0283 42.0355 12.9746 42.2178 12.9746C42.4001 12.9746 42.5384 13.0283 42.6328 13.1357C42.7305 13.2399 42.7793 13.3685 42.7793 13.5215C42.7793 13.6712 42.7305 13.7982 42.6328 13.9023C42.5384 14.0065 42.4001 14.0586 42.2178 14.0586C42.0355 14.0586 41.8955 14.0065 41.7979 13.9023C41.7035 13.7982 41.6562 13.6712 41.6562 13.5215ZM45.626 14H44.7227V8.16016C44.7227 7.7793 44.791 7.45866 44.9277 7.19824C45.0677 6.93457 45.2679 6.736 45.5283 6.60254C45.7887 6.46582 46.098 6.39746 46.4561 6.39746C46.5602 6.39746 46.6644 6.40397 46.7686 6.41699C46.876 6.43001 46.9801 6.44954 47.0811 6.47559L47.0322 7.21289C46.9639 7.19661 46.8857 7.18522 46.7979 7.17871C46.7132 7.1722 46.6286 7.16895 46.5439 7.16895C46.3519 7.16895 46.1859 7.20801 46.0459 7.28613C45.9092 7.361 45.805 7.47168 45.7334 7.61816C45.6618 7.76465 45.626 7.94531 45.626 8.16016V14ZM46.749 8.7168V9.41016H43.8877V8.7168H46.749ZM47.5156 11.417V11.3047C47.5156 10.9238 47.571 10.5706 47.6816 10.2451C47.7923 9.91634 47.9518 9.63151 48.1602 9.39062C48.3685 9.14648 48.6208 8.95768 48.917 8.82422C49.2132 8.6875 49.5452 8.61914 49.9131 8.61914C50.2842 8.61914 50.6178 8.6875 50.9141 8.82422C51.2135 8.95768 51.4674 9.14648 51.6758 9.39062C51.8874 9.63151 52.0485 9.91634 52.1592 10.2451C52.2699 10.5706 52.3252 10.9238 52.3252 11.3047V11.417C52.3252 11.7979 52.2699 12.151 52.1592 12.4766C52.0485 12.8021 51.8874 13.0869 51.6758 13.3311C51.4674 13.5719 51.2152 13.7607 50.9189 13.8975C50.626 14.0309 50.2939 14.0977 49.9229 14.0977C49.5518 14.0977 49.2181 14.0309 48.9219 13.8975C48.6257 13.7607 48.3717 13.5719 48.1602 13.3311C47.9518 13.0869 47.7923 12.8021 47.6816 12.4766C47.571 12.151 47.5156 11.7979 47.5156 11.417ZM48.4189 11.3047V11.417C48.4189 11.6807 48.4499 11.9297 48.5117 12.1641C48.5736 12.3952 48.6663 12.6003 48.79 12.7793C48.917 12.9583 49.0749 13.0999 49.2637 13.2041C49.4525 13.305 49.6722 13.3555 49.9229 13.3555C50.1702 13.3555 50.3867 13.305 50.5723 13.2041C50.7611 13.0999 50.9173 12.9583 51.041 12.7793C51.1647 12.6003 51.2575 12.3952 51.3193 12.1641C51.3844 11.9297 51.417 11.6807 51.417 11.417V11.3047C51.417 11.0443 51.3844 10.7985 51.3193 10.5674C51.2575 10.333 51.1631 10.1263 51.0361 9.94727C50.9124 9.76497 50.7562 9.62174 50.5674 9.51758C50.3818 9.41341 50.1637 9.36133 49.9131 9.36133C49.6657 9.36133 49.4476 9.41341 49.2588 9.51758C49.0732 9.62174 48.917 9.76497 48.79 9.94727C48.6663 10.1263 48.5736 10.333 48.5117 10.5674C48.4499 10.7985 48.4189 11.0443 48.4189 11.3047ZM53.2188 11.417V11.3047C53.2188 10.9238 53.2741 10.5706 53.3848 10.2451C53.4954 9.91634 53.6549 9.63151 53.8633 9.39062C54.0716 9.14648 54.3239 8.95768 54.6201 8.82422C54.9163 8.6875 55.2484 8.61914 55.6162 8.61914C55.9873 8.61914 56.321 8.6875 56.6172 8.82422C56.9167 8.95768 57.1706 9.14648 57.3789 9.39062C57.5905 9.63151 57.7516 9.91634 57.8623 10.2451C57.973 10.5706 58.0283 10.9238 58.0283 11.3047V11.417C58.0283 11.7979 57.973 12.151 57.8623 12.4766C57.7516 12.8021 57.5905 13.0869 57.3789 13.3311C57.1706 13.5719 56.9183 13.7607 56.6221 13.8975C56.3291 14.0309 55.9971 14.0977 55.626 14.0977C55.2549 14.0977 54.9212 14.0309 54.625 13.8975C54.3288 13.7607 54.0749 13.5719 53.8633 13.3311C53.6549 13.0869 53.4954 12.8021 53.3848 12.4766C53.2741 12.151 53.2188 11.7979 53.2188 11.417ZM54.1221 11.3047V11.417C54.1221 11.6807 54.153 11.9297 54.2148 12.1641C54.2767 12.3952 54.3695 12.6003 54.4932 12.7793C54.6201 12.9583 54.778 13.0999 54.9668 13.2041C55.1556 13.305 55.3753 13.3555 55.626 13.3555C55.8734 13.3555 56.0898 13.305 56.2754 13.2041C56.4642 13.0999 56.6204 12.9583 56.7441 12.7793C56.8678 12.6003 56.9606 12.3952 57.0225 12.1641C57.0876 11.9297 57.1201 11.6807 57.1201 11.417V11.3047C57.1201 11.0443 57.0876 10.7985 57.0225 10.5674C56.9606 10.333 56.8662 10.1263 56.7393 9.94727C56.6156 9.76497 56.4593 9.62174 56.2705 9.51758C56.085 9.41341 55.8669 9.36133 55.6162 9.36133C55.3688 9.36133 55.1507 9.41341 54.9619 9.51758C54.7764 9.62174 54.6201 9.76497 54.4932 9.94727C54.3695 10.1263 54.2767 10.333 54.2148 10.5674C54.153 10.7985 54.1221 11.0443 54.1221 11.3047ZM59.1758 13.5215C59.1758 13.3685 59.223 13.2399 59.3174 13.1357C59.415 13.0283 59.555 12.9746 59.7373 12.9746C59.9196 12.9746 60.0579 13.0283 60.1523 13.1357C60.25 13.2399 60.2988 13.3685 60.2988 13.5215C60.2988 13.6712 60.25 13.7982 60.1523 13.9023C60.0579 14.0065 59.9196 14.0586 59.7373 14.0586C59.555 14.0586 59.415 14.0065 59.3174 13.9023C59.223 13.7982 59.1758 13.6712 59.1758 13.5215ZM61.793 6.5H62.7012V12.9746L62.623 14H61.793V6.5ZM66.2705 11.3145V11.417C66.2705 11.8011 66.2249 12.1576 66.1338 12.4863C66.0426 12.8118 65.9092 13.0951 65.7334 13.3359C65.5576 13.5768 65.3428 13.764 65.0889 13.8975C64.835 14.0309 64.5436 14.0977 64.2148 14.0977C63.8796 14.0977 63.585 14.0407 63.3311 13.9268C63.0804 13.8096 62.8688 13.6419 62.6963 13.4238C62.5238 13.2057 62.3854 12.9421 62.2812 12.6328C62.1803 12.3236 62.1104 11.9753 62.0713 11.5879V11.1387C62.1104 10.748 62.1803 10.3981 62.2812 10.0889C62.3854 9.77962 62.5238 9.51595 62.6963 9.29785C62.8688 9.0765 63.0804 8.90885 63.3311 8.79492C63.5817 8.67773 63.873 8.61914 64.2051 8.61914C64.5371 8.61914 64.8317 8.68424 65.0889 8.81445C65.346 8.94141 65.5609 9.1237 65.7334 9.36133C65.9092 9.59896 66.0426 9.88379 66.1338 10.2158C66.2249 10.5446 66.2705 10.9108 66.2705 11.3145ZM65.3623 11.417V11.3145C65.3623 11.0508 65.3379 10.8034 65.2891 10.5723C65.2402 10.3379 65.1621 10.1328 65.0547 9.95703C64.9473 9.77799 64.8057 9.63802 64.6299 9.53711C64.4541 9.43294 64.2376 9.38086 63.9805 9.38086C63.7526 9.38086 63.554 9.41992 63.3848 9.49805C63.2188 9.57617 63.0771 9.68197 62.96 9.81543C62.8428 9.94564 62.7467 10.0954 62.6719 10.2646C62.6003 10.4307 62.5465 10.6032 62.5107 10.7822V11.959C62.5628 12.1868 62.6475 12.4066 62.7646 12.6182C62.8851 12.8265 63.0446 12.9974 63.2432 13.1309C63.445 13.2643 63.694 13.3311 63.9902 13.3311C64.2344 13.3311 64.4427 13.2822 64.6152 13.1846C64.791 13.0837 64.9326 12.9453 65.04 12.7695C65.1507 12.5938 65.2321 12.3903 65.2842 12.1592C65.3363 11.9281 65.3623 11.6807 65.3623 11.417ZM70.5283 13.0967V10.377C70.5283 10.1686 70.486 9.98796 70.4014 9.83496C70.32 9.67871 70.1963 9.55827 70.0303 9.47363C69.8643 9.389 69.6592 9.34668 69.415 9.34668C69.1872 9.34668 68.987 9.38574 68.8145 9.46387C68.6452 9.54199 68.5117 9.64453 68.4141 9.77148C68.3197 9.89844 68.2725 10.0352 68.2725 10.1816H67.3691C67.3691 9.99284 67.418 9.80566 67.5156 9.62012C67.6133 9.43457 67.7533 9.26693 67.9355 9.11719C68.1211 8.96419 68.3424 8.84375 68.5996 8.75586C68.86 8.66471 69.1497 8.61914 69.4688 8.61914C69.8529 8.61914 70.1914 8.68424 70.4844 8.81445C70.7806 8.94466 71.0117 9.1416 71.1777 9.40527C71.347 9.66569 71.4316 9.99284 71.4316 10.3867V12.8477C71.4316 13.0234 71.4463 13.2106 71.4756 13.4092C71.5081 13.6077 71.5553 13.7786 71.6172 13.9219V14H70.6748C70.6292 13.8958 70.5934 13.7575 70.5674 13.585C70.5413 13.4092 70.5283 13.2464 70.5283 13.0967ZM70.6846 10.7969L70.6943 11.4316H69.7812C69.5241 11.4316 69.2946 11.4528 69.0928 11.4951C68.891 11.5342 68.7217 11.5944 68.585 11.6758C68.4482 11.7572 68.3441 11.8597 68.2725 11.9834C68.2008 12.1038 68.165 12.2454 68.165 12.4082C68.165 12.5742 68.2025 12.7256 68.2773 12.8623C68.3522 12.999 68.4645 13.1081 68.6143 13.1895C68.7673 13.2676 68.9544 13.3066 69.1758 13.3066C69.4525 13.3066 69.6966 13.248 69.9082 13.1309C70.1198 13.0137 70.2874 12.8704 70.4111 12.7012C70.5381 12.5319 70.6064 12.3675 70.6162 12.208L71.002 12.6426C70.9792 12.7793 70.9173 12.9307 70.8164 13.0967C70.7155 13.2627 70.5804 13.4222 70.4111 13.5752C70.2451 13.7249 70.0465 13.8503 69.8154 13.9512C69.5876 14.0488 69.3304 14.0977 69.0439 14.0977C68.6859 14.0977 68.3717 14.0277 68.1016 13.8877C67.8346 13.7477 67.6263 13.5605 67.4766 13.3262C67.3301 13.0885 67.2568 12.8232 67.2568 12.5303C67.2568 12.2471 67.3122 11.998 67.4229 11.7832C67.5335 11.5651 67.693 11.3844 67.9014 11.2412C68.1097 11.0947 68.3604 10.984 68.6533 10.9092C68.9463 10.8343 69.2734 10.7969 69.6348 10.7969H70.6846ZM73.7559 9.54688V14H72.8525V8.7168H73.7314L73.7559 9.54688ZM75.4062 8.6875L75.4014 9.52734C75.3265 9.51107 75.2549 9.5013 75.1865 9.49805C75.1214 9.49154 75.0465 9.48828 74.9619 9.48828C74.7536 9.48828 74.5697 9.52083 74.4102 9.58594C74.2507 9.65104 74.1156 9.74219 74.0049 9.85938C73.8942 9.97656 73.8063 10.1165 73.7412 10.2793C73.6794 10.4388 73.6387 10.6146 73.6191 10.8066L73.3652 10.9531C73.3652 10.6341 73.3962 10.3346 73.458 10.0547C73.5231 9.77474 73.6224 9.52734 73.7559 9.3125C73.8893 9.0944 74.0586 8.92513 74.2637 8.80469C74.472 8.68099 74.7194 8.61914 75.0059 8.61914C75.071 8.61914 75.1458 8.62728 75.2305 8.64355C75.3151 8.65658 75.3737 8.67122 75.4062 8.6875Z"
          fill="white"
        />
        <g id="xBtn">
          <path
            d="M467 7.5L471.5 11.5M476 15.5L471.5 11.5M471.5 11.5L476 7.5L467 15.5"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M467 7.5L471.5 11.5M476 15.5L471.5 11.5M471.5 11.5L476 7.5L467 15.5"
            stroke="white"
            stroke-width="2"
          />
        </g>
      </g>
    </svg>
  );
}

export default ResponsiveAnim;