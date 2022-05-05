import React from 'react';
import './ReactSvg.scss';
import { Stack } from '@mui/material';

export default function ReactSvg() {
  return (
    <Stack alignItems="center" justifyContent="center" direction="row">
      <svg
        width="185"
        height="185"
        viewBox="0 0 185 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="react-anim"
      >
        <g id="react-logo">
          <path
            id="circle"
            d="M92.3458 107.855C100.894 107.855 107.824 100.925 107.824 92.3768C107.824 83.8283 100.894 76.8984 92.3458 76.8984C83.7974 76.8984 76.8675 83.8283 76.8675 92.3768C76.8675 100.925 83.7974 107.855 92.3458 107.855Z"
            fill="#00D8FF"
          />
          <path
            id="circle-3"
            d="M92.3458 127.835C70.6083 127.835 51.615 125.276 37.4008 120.404C28.1817 117.259 20.35 113.066 14.7692 108.287C8.84916 103.23 5.70416 97.7107 5.70416 92.3766C5.70416 82.1399 16.9275 72.1191 35.7667 65.5824C51.1833 60.2174 71.2867 57.2266 92.315 57.2266C112.973 57.2266 132.799 60.1249 148.123 65.4282C157.096 68.5116 164.65 72.5199 170.015 76.9599C175.843 81.8316 178.926 87.1657 178.926 92.3766C178.926 103.014 166.377 113.775 146.15 120.466C131.843 125.214 112.727 127.835 92.3458 127.835ZM92.3458 64.6266C72.3967 64.6266 52.6633 67.5249 38.2333 72.5507C20.905 78.5941 13.135 86.8574 13.135 92.3766C13.135 98.1116 21.4908 107.146 39.8058 113.405C53.2492 117.999 71.4408 120.435 92.3458 120.435C111.956 120.435 130.24 117.968 143.837 113.436C162.862 107.115 171.557 98.0807 171.557 92.3766C171.557 89.4474 169.337 85.9941 165.297 82.6332C160.642 78.7482 153.858 75.2024 145.749 72.3966C131.165 67.4016 112.202 64.6266 92.3458 64.6266Z"
            fill="#00D8FF"
          />
          <path
            id="circle-2"
            d="M57.2267 169.521C54.0817 169.521 51.3067 168.843 48.9633 167.486C40.1142 162.368 37.0308 147.63 40.7617 128.051C43.8142 111.986 51.2758 93.1164 61.79 74.8939C72.1192 57.0106 84.5142 41.2856 96.755 30.6481C103.908 24.4198 111.154 19.8564 117.691 17.4514C124.813 14.8306 130.98 14.8306 135.482 17.4206C144.701 22.7239 147.753 39.0039 143.437 59.8473C140.384 74.6473 133.108 92.4998 122.933 110.167C112.079 128.976 100.363 144.146 89.0467 154.043C81.7083 160.456 74.1542 165.143 67.2475 167.579C63.64 168.874 60.2483 169.521 57.2267 169.521ZM64.9658 76.7439L68.1725 78.5939C58.2133 95.8606 50.8442 114.391 48.0075 129.438C44.585 147.476 47.8842 158.329 52.6325 161.073C53.8042 161.751 55.3458 162.121 57.2267 162.121C63.3625 162.121 73.0133 158.236 84.175 148.493C94.8742 139.151 106.067 124.597 116.519 106.498C126.324 89.5089 133.293 72.4273 136.191 58.3981C140.23 38.7573 136.746 26.7323 131.782 23.8648C129.253 22.4156 125.153 22.6006 120.219 24.4198C114.515 26.5164 108.071 30.6173 101.596 36.2598C89.9717 46.3731 78.1008 61.4198 68.1725 78.6248L64.9658 76.7439Z"
            fill="#00D8FF"
          />
          <path
            id="circle-1"
            d="M127.465 169.614C119.078 169.614 108.441 164.558 97.3408 154.999C84.9458 144.331 72.335 128.452 61.79 110.229C51.43 92.3459 44.03 73.7534 40.9158 57.8126C39.0967 48.5009 38.7575 39.9601 39.9292 33.0842C41.2242 25.5917 44.2767 20.2576 48.8092 17.6367C57.9975 12.3026 73.63 17.7909 89.54 31.9434C100.825 41.9642 112.665 57.1959 122.871 74.8326C133.755 93.6409 141.063 111.37 143.961 126.108C145.842 135.667 146.15 144.547 144.824 151.762C143.406 159.439 140.199 164.897 135.574 167.579C133.262 168.936 130.518 169.614 127.465 169.614ZM68.2033 106.529C78.1933 123.796 90.5883 139.428 102.182 149.388C116.088 161.351 127.126 163.941 131.905 161.166C136.869 158.298 140.508 146.551 136.746 127.558C133.971 113.621 126.972 96.6626 116.488 78.5634C106.653 61.5742 95.3367 46.9901 84.6375 37.4934C69.6525 24.1734 57.5042 21.1826 52.54 24.0501C50.0117 25.4992 48.1308 29.1684 47.2367 34.3484C46.2192 40.3301 46.5275 47.9767 48.1925 56.3942C51.1525 71.5334 58.2442 89.3242 68.2033 106.529Z"
            fill="#00D8FF"
          />
        </g>
      </svg>

      <svg
        width="243"
        height="73"
        viewBox="0 0 243 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.251953 0.90625H23.7871C29.1257 0.90625 33.6341 1.72005 37.3125 3.34766C41.0234 4.97526 43.8392 7.38411 45.7598 10.5742C47.7129 13.7318 48.6895 17.6217 48.6895 22.2441C48.6895 25.4993 48.0221 28.4779 46.6875 31.1797C45.3854 33.849 43.4974 36.1276 41.0234 38.0156C38.582 39.8711 35.6523 41.2546 32.2344 42.166L29.5977 43.1914H7.47852L7.38086 35.5254H24.0801C27.4655 35.5254 30.2812 34.9395 32.5273 33.7676C34.7734 32.5632 36.4661 30.9518 37.6055 28.9336C38.7448 26.9154 39.3145 24.6855 39.3145 22.2441C39.3145 19.5098 38.7773 17.1172 37.7031 15.0664C36.6289 13.0156 34.9362 11.4368 32.625 10.3301C30.3464 9.19076 27.4004 8.62109 23.7871 8.62109H9.67578V72H0.251953V0.90625ZM41.8047 72L24.5195 39.7734L34.334 39.7246L51.8633 71.4141V72H41.8047ZM82.4297 72.9766C78.7513 72.9766 75.4147 72.3581 72.4199 71.1211C69.4577 69.8516 66.9023 68.0775 64.7539 65.7988C62.638 63.5202 61.0104 60.8184 59.8711 57.6934C58.7318 54.5684 58.1621 51.1504 58.1621 47.4395V45.3887C58.1621 41.0918 58.7969 37.2669 60.0664 33.9141C61.3359 30.5286 63.0612 27.6641 65.2422 25.3203C67.4232 22.9766 69.8971 21.2025 72.6641 19.998C75.431 18.7936 78.2956 18.1914 81.2578 18.1914C85.0339 18.1914 88.2891 18.8424 91.0234 20.1445C93.7904 21.4466 96.0527 23.2695 97.8105 25.6133C99.5684 27.9245 100.87 30.6589 101.717 33.8164C102.563 36.9414 102.986 40.3594 102.986 44.0703V48.123H63.5332V40.75H93.9531V40.0664C93.8229 37.7227 93.3346 35.444 92.4883 33.2305C91.6745 31.0169 90.3724 29.194 88.582 27.7617C86.7917 26.3294 84.3503 25.6133 81.2578 25.6133C79.207 25.6133 77.319 26.0527 75.5938 26.9316C73.8685 27.778 72.3874 29.0475 71.1504 30.7402C69.9134 32.4329 68.9531 34.5 68.2695 36.9414C67.5859 39.3828 67.2441 42.1986 67.2441 45.3887V47.4395C67.2441 49.946 67.5859 52.306 68.2695 54.5195C68.9857 56.7005 70.0111 58.6211 71.3457 60.2812C72.7129 61.9414 74.3568 63.2435 76.2773 64.1875C78.2305 65.1315 80.444 65.6035 82.918 65.6035C86.1081 65.6035 88.8099 64.9525 91.0234 63.6504C93.237 62.3483 95.1738 60.6068 96.834 58.4258L102.303 62.7715C101.163 64.4967 99.7148 66.1406 97.957 67.7031C96.1992 69.2656 94.0345 70.5352 91.4629 71.5117C88.9238 72.4883 85.9128 72.9766 82.4297 72.9766ZM144.686 62.9668V35.7695C144.686 33.6862 144.262 31.8796 143.416 30.3496C142.602 28.7871 141.365 27.5827 139.705 26.7363C138.045 25.89 135.994 25.4668 133.553 25.4668C131.274 25.4668 129.272 25.8574 127.547 26.6387C125.854 27.4199 124.52 28.4453 123.543 29.7148C122.599 30.9844 122.127 32.3516 122.127 33.8164H113.094C113.094 31.9284 113.582 30.0566 114.559 28.2012C115.535 26.3457 116.935 24.6693 118.758 23.1719C120.613 21.6419 122.827 20.4375 125.398 19.5586C128.003 18.6471 130.9 18.1914 134.09 18.1914C137.931 18.1914 141.316 18.8424 144.246 20.1445C147.208 21.4466 149.52 23.416 151.18 26.0527C152.872 28.6569 153.719 31.9284 153.719 35.8672V60.4766C153.719 62.2344 153.865 64.1061 154.158 66.0918C154.484 68.0775 154.956 69.7865 155.574 71.2188V72H146.15C145.695 70.9583 145.337 69.5749 145.076 67.8496C144.816 66.0918 144.686 64.4642 144.686 62.9668ZM146.248 39.9688L146.346 46.3164H137.215C134.643 46.3164 132.348 46.528 130.33 46.9512C128.312 47.3418 126.619 47.944 125.252 48.7578C123.885 49.5716 122.843 50.597 122.127 51.834C121.411 53.0384 121.053 54.4544 121.053 56.082C121.053 57.7422 121.427 59.2559 122.176 60.623C122.924 61.9902 124.048 63.0807 125.545 63.8945C127.075 64.6758 128.947 65.0664 131.16 65.0664C133.927 65.0664 136.368 64.4805 138.484 63.3086C140.6 62.1367 142.277 60.7044 143.514 59.0117C144.783 57.319 145.467 55.6751 145.564 54.0801L149.422 58.4258C149.194 59.793 148.576 61.3066 147.566 62.9668C146.557 64.627 145.206 66.222 143.514 67.752C141.854 69.2493 139.868 70.5026 137.557 71.5117C135.278 72.4883 132.706 72.9766 129.842 72.9766C126.261 72.9766 123.12 72.2767 120.418 70.877C117.749 69.4772 115.665 67.6055 114.168 65.2617C112.703 62.8854 111.971 60.2324 111.971 57.3027C111.971 54.4707 112.524 51.9805 113.631 49.832C114.738 47.651 116.333 45.8444 118.416 44.4121C120.499 42.9473 123.006 41.8405 125.936 41.0918C128.865 40.3431 132.137 39.9688 135.75 39.9688H146.248ZM189.07 65.5547C191.219 65.5547 193.204 65.1152 195.027 64.2363C196.85 63.3574 198.348 62.153 199.52 60.623C200.691 59.0605 201.359 57.2865 201.521 55.3008H210.115C209.952 58.4258 208.895 61.3392 206.941 64.041C205.021 66.7103 202.498 68.875 199.373 70.5352C196.248 72.1628 192.814 72.9766 189.07 72.9766C185.099 72.9766 181.632 72.2767 178.67 70.877C175.74 69.4772 173.299 67.5566 171.346 65.1152C169.425 62.6738 167.977 59.8743 167 56.7168C166.056 53.5267 165.584 50.1576 165.584 46.6094V44.5586C165.584 41.0104 166.056 37.6576 167 34.5C167.977 31.3099 169.425 28.4941 171.346 26.0527C173.299 23.6113 175.74 21.6908 178.67 20.291C181.632 18.8913 185.099 18.1914 189.07 18.1914C193.204 18.1914 196.818 19.0378 199.91 20.7305C203.003 22.3906 205.428 24.6693 207.186 27.5664C208.976 30.431 209.952 33.6862 210.115 37.332H201.521C201.359 35.151 200.74 33.1816 199.666 31.4238C198.624 29.666 197.192 28.2663 195.369 27.2246C193.579 26.1504 191.479 25.6133 189.07 25.6133C186.303 25.6133 183.976 26.1667 182.088 27.2734C180.232 28.3477 178.751 29.8125 177.645 31.668C176.57 33.4909 175.789 35.5254 175.301 37.7715C174.845 39.985 174.617 42.2474 174.617 44.5586V46.6094C174.617 48.9206 174.845 51.1992 175.301 53.4453C175.757 55.6914 176.521 57.7259 177.596 59.5488C178.702 61.3717 180.184 62.8366 182.039 63.9434C183.927 65.0176 186.271 65.5547 189.07 65.5547ZM242.391 19.168V26.1016H213.826V19.168H242.391ZM223.494 6.32617H232.527V58.9141C232.527 60.7044 232.804 62.0553 233.357 62.9668C233.911 63.8783 234.627 64.4805 235.506 64.7734C236.385 65.0664 237.329 65.2129 238.338 65.2129C239.087 65.2129 239.868 65.1478 240.682 65.0176C241.528 64.8548 242.163 64.7246 242.586 64.627L242.635 72C241.919 72.2279 240.975 72.4395 239.803 72.6348C238.663 72.8626 237.28 72.9766 235.652 72.9766C233.439 72.9766 231.404 72.5371 229.549 71.6582C227.693 70.7793 226.212 69.3145 225.105 67.2637C224.031 65.1803 223.494 62.3809 223.494 58.8652V6.32617Z"
          fill="#61DAFB"
        />
      </svg>
    </Stack>
  );
}