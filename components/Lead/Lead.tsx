"use client";

import useScroll from "@/utils/useScroll";
import styles from "./Lead.module.css";
import Reveal from "./Reveal";
import Wrapper from "@/components/Wrapper/Wrapper";
import { useRef } from "react";
import clsx from "clsx";

export default function Lead() {
  const ref = useRef<HTMLDivElement>(null);
  const percent = useScroll(ref, 2);

  return (
    <>
      <div className={styles.spacer} ref={ref} />
      <section
        className={clsx(styles.lead, percent > 1 && styles.shown)}
        style={{
          visibility: percent >= 2 ? "hidden" : undefined,
        }}
      >
        <Wrapper>
          <p>
            <Reveal
              className={styles.highlight}
              progress={percent}
              start={0.1}
              end={0.4}
            >
              Introducing the Crust Mill: Precision engineered{" "}
              <EngineeredIcon /> for perfection in seasoning. Choose between the
              P–1 for an exquisite pepper grind <GrindIcon /> or the S–1 for a
              flawless salt texture <TextureIcon />. Manufactured from the
              finest stainless steel for durability <DurabilityIcon /> that
              lasts.
            </Reveal>
          </p>
          <p>
            <Reveal
              className={styles.highlight}
              progress={percent}
              start={0.4}
              end={0.8}
            >
              Designed in California <CaliforniaIcon /> and Made in Germany{" "}
              <GermanyIcon />, this mill isn't just a tool—it's an essential
              part of the culinary experience <ExperienceIcon />, crafted to
              elevate every dish.
            </Reveal>
          </p>
        </Wrapper>
      </section>
    </>
  );
}

function EngineeredIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.49219 24.0093C4.28134 25.9145 5.43803 27.6456 6.8962 29.1037C8.35437 30.5619 10.0855 31.7186 11.9907 32.5077C13.8958 33.2969 15.9378 33.7031 18 33.7031C20.0621 33.7031 22.1041 33.2969 24.0093 32.5077C25.9145 31.7186 27.6456 30.5619 29.1038 29.1037C30.5619 27.6456 31.7186 25.9145 32.5078 24.0093"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="18"
        cy="7.2998"
        r="3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6602 10L12.0014 27.3867"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M19.5 10L24.1587 27.3867"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18 1.43005V3.93005"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GrindIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8125 12.5048C20.3675 12.5048 19.9325 12.3728 19.5625 12.1256C19.1925 11.8783 18.9041 11.5269 18.7338 11.1158C18.5635 10.7047 18.5189 10.2523 18.6057 9.81581C18.6926 9.37935 18.9068 8.97844 19.2215 8.66377C19.5362 8.3491 19.9371 8.13481 20.3735 8.04799C20.81 7.96118 21.2624 8.00574 21.6735 8.17603C22.0847 8.34633 22.4361 8.63472 22.6833 9.00473C22.9305 9.37474 23.0625 9.80975 23.0625 10.2548C23.0625 10.8515 22.8254 11.4238 22.4035 11.8458C21.9815 12.2677 21.4092 12.5048 20.8125 12.5048Z"
        fill="currentColor"
      />
      <path
        d="M14.5977 12.5048C14.1526 12.5048 13.7176 12.3728 13.3476 12.1256C12.9776 11.8783 12.6892 11.5269 12.5189 11.1158C12.3486 10.7047 12.3041 10.2523 12.3909 9.81581C12.4777 9.37935 12.692 8.97844 13.0067 8.66377C13.3213 8.3491 13.7222 8.13481 14.1587 8.04799C14.5952 7.96118 15.0476 8.00574 15.4587 8.17603C15.8698 8.34633 16.2212 8.63472 16.4685 9.00473C16.7157 9.37474 16.8477 9.80975 16.8477 10.2548C16.8477 10.8515 16.6106 11.4238 16.1886 11.8458C15.7667 12.2677 15.1944 12.5048 14.5977 12.5048Z"
        fill="currentColor"
      />
      <path
        d="M24.1602 5.93005C23.7151 5.93005 23.2801 5.79809 22.9101 5.55086C22.5401 5.30363 22.2517 4.95223 22.0814 4.54109C21.9111 4.12996 21.8666 3.67756 21.9534 3.2411C22.0402 2.80464 22.2545 2.40373 22.5692 2.08906C22.8838 1.7744 23.2847 1.5601 23.7212 1.47329C24.1577 1.38647 24.6101 1.43103 25.0212 1.60133C25.4323 1.77162 25.7837 2.06001 26.031 2.43002C26.2782 2.80003 26.4102 3.23505 26.4102 3.68005C26.4102 4.27679 26.1731 4.84909 25.7511 5.27104C25.3292 5.693 24.7569 5.93005 24.1602 5.93005Z"
        fill="currentColor"
      />
      <path
        d="M11.8633 5.93005C11.4183 5.93005 10.9833 5.79809 10.6132 5.55086C10.2432 5.30363 9.95485 4.95223 9.78455 4.54109C9.61426 4.12996 9.5697 3.67756 9.65652 3.2411C9.74333 2.80464 9.95762 2.40373 10.2723 2.08906C10.587 1.7744 10.9879 1.5601 11.4243 1.47329C11.8608 1.38647 12.3132 1.43103 12.7243 1.60133C13.1355 1.77162 13.4869 2.06001 13.7341 2.43002C13.9813 2.80003 14.1133 3.23505 14.1133 3.68005C14.1133 4.27679 13.8762 4.84909 13.4543 5.27104C13.0323 5.693 12.46 5.93005 11.8633 5.93005Z"
        fill="currentColor"
      />
      <path
        d="M24.1602 34.5726C23.7151 34.5726 23.2801 34.4407 22.9101 34.1934C22.5401 33.9462 22.2517 33.5948 22.0814 33.1837C21.9111 32.7725 21.8666 32.3201 21.9534 31.8837C22.0402 31.4472 22.2545 31.0463 22.5692 30.7316C22.8838 30.417 23.2847 30.2027 23.7212 30.1159C24.1577 30.029 24.6101 30.0736 25.0212 30.2439C25.4323 30.4142 25.7837 30.7026 26.031 31.0726C26.2782 31.4426 26.4102 31.8776 26.4102 32.3226C26.4102 32.9194 26.1731 33.4917 25.7511 33.9136C25.3292 34.3356 24.7569 34.5726 24.1602 34.5726Z"
        fill="currentColor"
      />
      <path
        d="M11.8633 34.5726C11.4183 34.5726 10.9833 34.4407 10.6132 34.1934C10.2432 33.9462 9.95485 33.5948 9.78455 33.1837C9.61426 32.7725 9.5697 32.3201 9.65652 31.8837C9.74333 31.4472 9.95762 31.0463 10.2723 30.7316C10.587 30.417 10.9879 30.2027 11.4243 30.1159C11.8608 30.029 12.3132 30.0736 12.7243 30.2439C13.1355 30.4142 13.4869 30.7026 13.7341 31.0726C13.9813 31.4426 14.1133 31.8776 14.1133 32.3226C14.1133 32.9194 13.8762 33.4917 13.4543 33.9136C13.0323 34.3356 12.46 34.5726 11.8633 34.5726Z"
        fill="currentColor"
      />
      <path
        d="M32.3881 26.4068C31.9408 26.4187 31.5 26.297 31.1222 26.0571C30.7444 25.8172 30.4466 25.4702 30.2671 25.0602C30.0876 24.6503 30.0344 24.1961 30.1143 23.7558C30.1942 23.3154 30.4036 22.9089 30.7158 22.5882C31.0279 22.2675 31.4286 22.0472 31.8666 21.9554C32.3046 21.8636 32.7601 21.9046 33.1747 22.0729C33.5894 22.2413 33.9444 22.5296 34.1944 22.9007C34.4444 23.2719 34.578 23.7093 34.5781 24.1568C34.5781 24.7535 34.3411 25.3258 33.9191 25.7478C33.4972 26.1697 32.9249 26.4068 32.3281 26.4068"
        fill="currentColor"
      />
      <path
        d="M32.3881 14.1236C31.9408 14.1355 31.5 14.0138 31.1222 13.7739C30.7444 13.534 30.4466 13.187 30.2671 12.777C30.0876 12.3671 30.0344 11.9129 30.1143 11.4726C30.1942 11.0322 30.4036 10.6257 30.7158 10.305C31.0279 9.98434 31.4286 9.76402 31.8666 9.67223C32.3046 9.58044 32.7601 9.62135 33.1747 9.78974C33.5894 9.95813 33.9444 10.2463 34.1944 10.6175C34.4444 10.9887 34.578 11.4261 34.5781 11.8736C34.5781 12.4703 34.3411 13.0426 33.9191 13.4646C33.4972 13.8865 32.9249 14.1236 32.3281 14.1236"
        fill="currentColor"
      />
      <path
        d="M3.67188 26.4071C3.22687 26.4071 2.79185 26.2751 2.42184 26.0279C2.05183 25.7807 1.76344 25.4293 1.59315 25.0181C1.42285 24.607 1.37829 24.1546 1.46511 23.7182C1.55193 23.2817 1.76622 22.8808 2.08089 22.5661C2.39555 22.2514 2.79647 22.0372 3.23292 21.9503C3.66938 21.8635 4.12178 21.9081 4.53291 22.0784C4.94405 22.2487 5.29545 22.5371 5.54268 22.9071C5.78991 23.2771 5.92188 23.7121 5.92188 24.1571C5.92188 24.7538 5.68482 25.3261 5.26287 25.7481C4.84091 26.1701 4.26861 26.4071 3.67188 26.4071Z"
        fill="currentColor"
      />
      <path
        d="M3.67188 14.1239C3.22687 14.1239 2.79185 13.9919 2.42184 13.7447C2.05183 13.4975 1.76344 13.1461 1.59315 12.7349C1.42285 12.3238 1.37829 11.8714 1.46511 11.4349C1.55193 10.9985 1.76622 10.5976 2.08089 10.2829C2.39555 9.96824 2.79647 9.75395 3.23292 9.66714C3.66938 9.58032 4.12178 9.62488 4.53291 9.79517C4.94405 9.96547 5.29545 10.2539 5.54268 10.6239C5.78991 10.9939 5.92188 11.4289 5.92188 11.8739C5.92188 12.4706 5.68482 13.0429 5.26287 13.4649C4.84091 13.8868 4.26861 14.1239 3.67188 14.1239Z"
        fill="currentColor"
      />
      <path
        d="M20.8125 27.5238C20.3675 27.5238 19.9325 27.3918 19.5625 27.1446C19.1925 26.8974 18.9041 26.546 18.7338 26.1348C18.5635 25.7237 18.5189 25.2713 18.6057 24.8349C18.6926 24.3984 18.9068 23.9975 19.2215 23.6828C19.5362 23.3681 19.9371 23.1539 20.3735 23.067C20.81 22.9802 21.2624 23.0248 21.6735 23.1951C22.0847 23.3654 22.4361 23.6538 22.6833 24.0238C22.9305 24.3938 23.0625 24.8288 23.0625 25.2738C23.0625 25.8705 22.8254 26.4428 22.4035 26.8648C21.9815 27.2868 21.4092 27.5238 20.8125 27.5238Z"
        fill="currentColor"
      />
      <path
        d="M14.5977 27.5238C14.1526 27.5238 13.7176 27.3918 13.3476 27.1446C12.9776 26.8974 12.6892 26.546 12.5189 26.1348C12.3486 25.7237 12.3041 25.2713 12.3909 24.8349C12.4777 24.3984 12.692 23.9975 13.0067 23.6828C13.3213 23.3681 13.7222 23.1539 14.1587 23.067C14.5952 22.9802 15.0476 23.0248 15.4587 23.1951C15.8698 23.3654 16.2212 23.6538 16.4685 24.0238C16.7157 24.3938 16.8477 24.8288 16.8477 25.2738C16.8477 25.8705 16.6106 26.4428 16.1886 26.8648C15.7667 27.2868 15.1944 27.5238 14.5977 27.5238Z"
        fill="currentColor"
      />
      <path
        d="M25.1797 23.0853C24.7347 23.0853 24.2997 22.9534 23.9297 22.7061C23.5596 22.4589 23.2713 22.1075 23.101 21.6964C22.9307 21.2852 22.8861 20.8328 22.9729 20.3964C23.0597 19.9599 23.274 19.559 23.5887 19.2443C23.9034 18.9297 24.3043 18.7154 24.7407 18.6286C25.1772 18.5417 25.6296 18.5863 26.0407 18.7566C26.4519 18.9269 26.8033 19.2153 27.0505 19.5853C27.2977 19.9553 27.4297 20.3903 27.4297 20.8353C27.4297 21.4321 27.1926 22.0044 26.7707 22.4263C26.3487 22.8483 25.7764 23.0853 25.1797 23.0853Z"
        fill="currentColor"
      />
      <path
        d="M17.6719 19.9301C17.2269 19.9301 16.7919 19.7981 16.4218 19.5509C16.0518 19.3036 15.7634 18.9522 15.5931 18.5411C15.4229 18.13 15.3783 17.6776 15.4651 17.2411C15.5519 16.8046 15.7662 16.4037 16.0809 16.0891C16.3956 15.7744 16.7965 15.5601 17.2329 15.4733C17.6694 15.3865 18.1218 15.431 18.5329 15.6013C18.944 15.7716 19.2954 16.06 19.5427 16.43C19.7899 16.8 19.9219 17.235 19.9219 17.6801C19.9219 18.2768 19.6848 18.8491 19.2629 19.271C18.8409 19.693 18.2686 19.9301 17.6719 19.9301Z"
        fill="currentColor"
      />
      <path
        d="M25.1797 16.9432C24.7347 16.9432 24.2997 16.8113 23.9297 16.564C23.5596 16.3168 23.2713 15.9654 23.101 15.5543C22.9307 15.1431 22.8861 14.6907 22.9729 14.2543C23.0597 13.8178 23.274 13.4169 23.5887 13.1022C23.9034 12.7876 24.3043 12.5733 24.7407 12.4865C25.1772 12.3997 25.6296 12.4442 26.0407 12.6145C26.4519 12.7848 26.8033 13.0732 27.0505 13.4432C27.2977 13.8132 27.4297 14.2482 27.4297 14.6932C27.4297 15.29 27.1926 15.8623 26.7707 16.2842C26.3487 16.7062 25.7764 16.9432 25.1797 16.9432Z"
        fill="currentColor"
      />
      <path
        d="M10.1598 23.0853C9.71726 23.0852 9.28463 22.9546 8.91596 22.7099C8.5473 22.4652 8.25896 22.1173 8.08701 21.7097C7.91506 21.302 7.86713 20.8527 7.94921 20.418C8.03129 19.9832 8.23974 19.5823 8.54849 19.2654C8.85723 18.9485 9.25258 18.7296 9.68509 18.6361C10.1176 18.5426 10.5681 18.5787 10.9802 18.7399C11.3923 18.901 11.7477 19.18 12.0021 19.5421C12.2564 19.9041 12.3984 20.3331 12.4102 20.7753C12.4102 21.3721 12.1731 21.9444 11.751 22.3663C11.329 22.7883 10.7566 23.0253 10.1598 23.0253"
        fill="currentColor"
      />
      <path
        d="M10.1602 16.9432C9.71515 16.9432 9.28013 16.8113 8.91012 16.564C8.54011 16.3168 8.25173 15.9654 8.08143 15.5543C7.91113 15.1431 7.86657 14.6907 7.95339 14.2543C8.04021 13.8178 8.2545 13.4169 8.56917 13.1022C8.88383 12.7876 9.28475 12.5733 9.7212 12.4865C10.1577 12.3997 10.6101 12.4442 11.0212 12.6145C11.4323 12.7848 11.7837 13.0732 12.031 13.4432C12.2782 13.8132 12.4102 14.2482 12.4102 14.6932C12.4102 15.29 12.1731 15.8623 11.7511 16.2842C11.3292 16.7062 10.7569 16.9432 10.1602 16.9432Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TextureIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3277_1592)">
        <path
          d="M4.90832 30.7426V32.8639H7.02964V30.7426H4.90832Z"
          fill="currentColor"
        />
        <path
          d="M7.02941 28.6212V30.7425H9.15073V28.6212H7.02941Z"
          fill="currentColor"
        />
        <path
          d="M9.1505 26.4999V28.6212H11.2718V26.4999H9.1505Z"
          fill="currentColor"
        />
        <path
          d="M11.2716 24.3787V26.5H13.3929V24.3787H11.2716Z"
          fill="currentColor"
        />
        <path
          d="M13.3927 22.2573V24.3787H15.514V22.2573H13.3927Z"
          fill="currentColor"
        />
        <path
          d="M15.5138 20.136V22.2573H17.6351V20.136H15.5138Z"
          fill="currentColor"
        />
        <path
          d="M17.6349 18.0147V20.136H19.7562V18.0147H17.6349Z"
          fill="currentColor"
        />
        <path
          d="M19.756 15.8933V18.0146H21.8773V15.8933H19.756Z"
          fill="currentColor"
        />
        <path
          d="M21.881 13.772V15.8933H24.0023V13.772H21.881Z"
          fill="currentColor"
        />
        <path
          d="M9.1505 30.7426V32.8639H11.2718V30.7426H9.1505Z"
          fill="currentColor"
        />
        <path
          d="M11.2716 28.6212V30.7425H13.3929V28.6212H11.2716Z"
          fill="currentColor"
        />
        <path
          d="M13.3927 26.4999V28.6212H15.514V26.4999H13.3927Z"
          fill="currentColor"
        />
        <path
          d="M15.5138 24.3787V26.5H17.6351V24.3787H15.5138Z"
          fill="currentColor"
        />
        <path
          d="M17.6349 22.2573V24.3787H19.7562V22.2573H17.6349Z"
          fill="currentColor"
        />
        <path
          d="M19.756 20.136V22.2573H21.8773V20.136H19.756Z"
          fill="currentColor"
        />
        <path
          d="M21.881 18.0147V20.136H24.0023V18.0147H21.881Z"
          fill="currentColor"
        />
        <path
          d="M24.0021 15.8933V18.0146H26.1234V15.8933H24.0021Z"
          fill="currentColor"
        />
        <path
          d="M13.3927 30.7426V32.8639H15.514V30.7426H13.3927Z"
          fill="currentColor"
        />
        <path
          d="M15.5138 28.6212V30.7425H17.6351V28.6212H15.5138Z"
          fill="currentColor"
        />
        <path
          d="M17.6349 26.4999V28.6212H19.7562V26.4999H17.6349Z"
          fill="currentColor"
        />
        <path
          d="M19.756 24.3787V26.5H21.8773V24.3787H19.756Z"
          fill="currentColor"
        />
        <path
          d="M21.881 22.2573V24.3787H24.0023V22.2573H21.881Z"
          fill="currentColor"
        />
        <path
          d="M24.0021 20.136V22.2573H26.1234V20.136H24.0021Z"
          fill="currentColor"
        />
        <path
          d="M26.1232 18.0147V20.136H28.2445V18.0147H26.1232Z"
          fill="currentColor"
        />
        <path
          d="M24.0021 11.6506V13.772H26.1234V11.6506H24.0021Z"
          fill="currentColor"
        />
        <path
          d="M26.1232 13.772V15.8933H28.2445V13.772H26.1232Z"
          fill="currentColor"
        />
        <path
          d="M28.2443 15.8933V18.0146H30.3656V15.8933H28.2443Z"
          fill="currentColor"
        />
        <path
          d="M26.1232 9.52943V11.6507H28.2445V9.52943H26.1232Z"
          fill="currentColor"
        />
        <path
          d="M28.2443 11.6506V13.772H30.3656V11.6506H28.2443Z"
          fill="currentColor"
        />
        <path
          d="M30.3653 13.772V15.8933H32.4867V13.772H30.3653Z"
          fill="currentColor"
        />
        <path
          d="M17.6349 30.7426V32.8639H19.7562V30.7426H17.6349Z"
          fill="currentColor"
        />
        <path
          d="M19.756 28.6212V30.7425H21.8773V28.6212H19.756Z"
          fill="currentColor"
        />
        <path
          d="M21.881 26.4999V28.6212H24.0023V26.4999H21.881Z"
          fill="currentColor"
        />
        <path
          d="M24.0021 24.3787V26.5H26.1234V24.3787H24.0021Z"
          fill="currentColor"
        />
        <path
          d="M26.1232 22.2573V24.3787H28.2445V22.2573H26.1232Z"
          fill="currentColor"
        />
        <path
          d="M28.2443 20.136V22.2573H30.3656V20.136H28.2443Z"
          fill="currentColor"
        />
        <path
          d="M21.881 30.7426V32.8639H24.0023V30.7426H21.881Z"
          fill="currentColor"
        />
        <path
          d="M24.0021 28.6212V30.7425H26.1234V28.6212H24.0021Z"
          fill="currentColor"
        />
        <path
          d="M26.1232 26.4999V28.6212H28.2445V26.4999H26.1232Z"
          fill="currentColor"
        />
        <path
          d="M28.2443 24.3787V26.5H30.3656V24.3787H28.2443Z"
          fill="currentColor"
        />
        <path
          d="M30.3653 22.2573V24.3787H32.4867V22.2573H30.3653Z"
          fill="currentColor"
        />
        <path
          d="M30.3653 18.0147V20.136H32.4867V18.0147H30.3653Z"
          fill="currentColor"
        />
        <path
          d="M28.2443 7.40809V9.52941H30.3656V7.40809H28.2443Z"
          fill="currentColor"
        />
        <path
          d="M30.3653 9.52943V11.6507H32.4867V9.52943H30.3653Z"
          fill="currentColor"
        />
        <path
          d="M30.3653 5.28675V7.40807H32.4867V5.28675H30.3653Z"
          fill="currentColor"
        />
        <path
          d="M26.1232 30.7426V32.8639H28.2445V30.7426H26.1232Z"
          fill="currentColor"
        />
        <path
          d="M28.2443 28.6212V30.7425H30.3656V28.6212H28.2443Z"
          fill="currentColor"
        />
        <path
          d="M30.3653 26.4999V28.6212H32.4867V26.4999H30.3653Z"
          fill="currentColor"
        />
        <path
          d="M30.3653 30.7426V32.8639H32.4867V30.7426H30.3653Z"
          fill="currentColor"
        />
        <path
          d="M31.2604 3.34375H4.73958C4.36939 3.34375 4.01435 3.49081 3.75258 3.75258C3.49081 4.01435 3.34375 4.36939 3.34375 4.73958V31.2604C3.34375 31.6306 3.49081 31.9856 3.75258 32.2474C4.01435 32.5092 4.36939 32.6562 4.73958 32.6562H31.2604C31.6306 32.6562 31.9856 32.5092 32.2474 32.2474C32.5092 31.9856 32.6562 31.6306 32.6562 31.2604V4.73958C32.6562 4.36939 32.5092 4.01435 32.2474 3.75258C31.9856 3.49081 31.6306 3.34375 31.2604 3.34375Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3277_1592">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function DurabilityIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.71484 5.14722L18.0502 31.086"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.3847 5.14722L18.0508 31.086"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.92188 13.2891H33.1738"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7695 13.2891L18.0508 4.91406L24.332 13.2891"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.1021 5.75156C27.907 5.49153 27.6541 5.28047 27.3634 5.13511C27.0727 4.98974 26.7521 4.91406 26.4271 4.91406H9.67706C9.35201 4.91406 9.03143 4.98974 8.7407 5.13511C8.44997 5.28047 8.19708 5.49153 8.00206 5.75156L3.34416 11.9644C3.06148 12.3416 2.91432 12.803 2.92648 13.2742C2.93864 13.7453 3.10941 14.1986 3.41116 14.5607L16.4455 30.3336C16.642 30.5682 16.8875 30.757 17.1649 30.8865C17.4422 31.0159 17.7446 31.0831 18.0507 31.0831C18.3567 31.0831 18.6591 31.0159 18.9364 30.8865C19.2138 30.757 19.4594 30.5682 19.6559 30.3336L32.6902 14.5607C32.9919 14.1986 33.1627 13.7453 33.1748 13.2742C33.187 12.803 33.0398 12.3416 32.7572 11.9644L28.1021 5.75156Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CaliforniaIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4925 13.0825L19.4219 33.6864"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9375 33.7032L17.8413 12.2144"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8398 12.2145L29.3918 15.9958C29.5662 16.0543 29.753 16.0659 29.9333 16.0294C30.1137 15.9929 30.2812 15.9096 30.4192 15.7878C30.5571 15.666 30.6605 15.51 30.7191 15.3356C30.7776 15.1611 30.7892 14.9743 30.7527 14.794C30.5862 13.459 30.0156 12.2068 29.1175 11.2052C28.2194 10.2036 27.0367 9.50034 25.7277 9.18972C20.4933 8.14285 18.3996 11.2835 18.3996 11.2835L17.8412 12.2145"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8409 12.2143L7.32471 15.0688C7.15203 15.116 6.97014 15.1182 6.79637 15.0752C6.6226 15.0321 6.46274 14.9453 6.33202 14.823C6.20131 14.7007 6.1041 14.5469 6.04966 14.3764C5.99521 14.2059 5.98535 14.0242 6.021 13.8488C6.17443 12.4945 6.7412 11.2202 7.64425 10.1993C8.54731 9.17833 9.74284 8.46025 11.0683 8.14264C14.114 7.53266 17.0327 8.14264 18.7845 10.8296"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.6027 9.02189L28.9298 4.67108C29.0503 4.55305 29.1403 4.40757 29.1922 4.24711C29.2441 4.08665 29.2563 3.916 29.2277 3.7498C29.1992 3.58359 29.1307 3.42679 29.0283 3.29284C28.9258 3.15889 28.7924 3.05179 28.6395 2.98072C27.5061 2.42913 26.2417 2.20359 24.9875 2.3293C23.7333 2.45501 22.5388 2.92703 21.5375 3.6926C19.1646 5.46949 19.4437 9.18939 19.4437 9.18939V10.2628"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8773 7.92903L10.1554 4.97405C10.0292 4.83875 9.94133 4.67237 9.90061 4.49193C9.85989 4.3115 9.86784 4.12348 9.92365 3.94712C9.97945 3.77077 10.0811 3.6124 10.2182 3.48823C10.3553 3.36406 10.5229 3.27854 10.7039 3.24043C11.8585 3.01789 13.0317 2.90664 14.2075 2.90822C15.3526 3.01259 16.4552 3.39393 17.4201 4.01938C18.385 4.64482 19.1833 5.49558 19.7462 6.4983"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.29688 33.7031H33.7031"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GermanyIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.2344 14.858L17.6776 22.2671C17.5875 22.387 17.4728 22.4861 17.3411 22.5578C17.2095 22.6296 17.0639 22.6721 16.9144 22.6827C16.7648 22.6933 16.6148 22.6717 16.4743 22.6192C16.3338 22.5668 16.2063 22.4848 16.1003 22.3788L12.7656 19.0455"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2276 3.14416C16.4408 2.87914 16.7108 2.66529 17.0176 2.51836C17.3244 2.37144 17.6602 2.29517 18.0003 2.29517C18.3405 2.29517 18.6763 2.37144 18.9831 2.51836C19.2899 2.66529 19.5598 2.87914 19.773 3.14416L21.8835 5.76973C22.1226 6.0676 22.4328 6.30046 22.7855 6.44684C23.1383 6.59321 23.5222 6.64837 23.9019 6.60723L27.2519 6.24291C27.591 6.20524 27.9343 6.24432 28.2563 6.35727C28.5782 6.47021 28.8707 6.65413 29.1119 6.8954C29.3532 7.13666 29.5371 7.42911 29.6501 7.75108C29.763 8.07305 29.8021 8.41629 29.7644 8.75541L29.4001 12.1054C29.359 12.4851 29.4141 12.869 29.5605 13.2218C29.7069 13.5746 29.9397 13.8848 30.2376 14.1238L32.8632 16.2343C33.1282 16.4475 33.342 16.7174 33.489 17.0242C33.6359 17.331 33.7122 17.6668 33.7122 18.007C33.7122 18.3471 33.6359 18.683 33.489 18.9898C33.342 19.2965 33.1282 19.5665 32.8632 19.7797L30.2292 21.8804C29.9314 22.1198 29.6987 22.4303 29.5523 22.7833C29.406 23.1362 29.3507 23.5203 29.3917 23.9002L29.756 27.2502C29.794 27.5894 29.7551 27.9327 29.6422 28.2548C29.5294 28.5769 29.3455 28.8695 29.1041 29.1108C28.8628 29.3521 28.5703 29.5361 28.2482 29.6489C27.9261 29.7618 27.5827 29.8006 27.2435 29.7627L23.8935 29.3984C23.5138 29.3571 23.1299 29.4122 22.7771 29.5586C22.4243 29.705 22.1141 29.9379 21.8752 30.2359L19.773 32.8517C19.56 33.1169 19.2901 33.331 18.9833 33.4781C18.6765 33.6252 18.3406 33.7015 18.0003 33.7015C17.6601 33.7015 17.3242 33.6252 17.0174 33.4781C16.7106 33.331 16.4407 33.1169 16.2276 32.8517L14.1185 30.2275C13.8792 29.9296 13.5687 29.6968 13.2158 29.5504C12.8628 29.4041 12.4786 29.3489 12.0987 29.39L8.74875 29.7543C8.40952 29.7925 8.06604 29.7538 7.74382 29.6411C7.4216 29.5283 7.12893 29.3444 6.88754 29.103C6.64615 28.8616 6.46225 28.569 6.3495 28.2468C6.23674 27.9245 6.19803 27.5811 6.23625 27.2418L6.60056 23.8918C6.64168 23.5119 6.58652 23.1278 6.44016 22.7748C6.2938 22.4218 6.06094 22.1114 5.76306 21.8721L3.13889 19.763C2.87364 19.5499 2.65958 19.28 2.5125 18.9732C2.36542 18.6664 2.28906 18.3305 2.28906 17.9902C2.28906 17.65 2.36542 17.3141 2.5125 17.0073C2.65958 16.7005 2.87364 16.4306 3.13889 16.2175L5.76306 14.107C6.06103 13.8681 6.29397 13.5579 6.44035 13.2051C6.58673 12.8524 6.64183 12.4684 6.60056 12.0887L6.23625 8.73866C6.1983 8.39949 6.2372 8.05612 6.35005 7.73403C6.4629 7.41194 6.64681 7.11938 6.88814 6.87805C7.12946 6.63672 7.42202 6.45282 7.74411 6.33997C8.06621 6.22712 8.40957 6.18822 8.74875 6.22616L12.0987 6.59048C12.4786 6.63147 12.8627 6.57625 13.2157 6.4299C13.5686 6.28354 13.8791 6.05076 14.1185 5.75298L16.2276 3.14416Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.001 12C17.974 18.9092 21.3328 22.8282 29 23.001C21.8888 22.974 18.3613 26.7867 18.001 34C17.9323 27.1949 14.89 22.9906 7 23.001C14.0592 22.9011 17.974 19.4944 18.001 12Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5003 1C15.4917 3.19839 16.5604 4.44534 19 4.50033C16.7373 4.49172 15.615 5.70487 15.5003 8C15.4785 5.83474 14.5105 4.49702 12 4.50033C14.2461 4.46853 15.4917 3.38457 15.5003 1Z"
        stroke="currentColor"
        strokeWidth="0.795455"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50052 6C7.48699 9.45461 9.1664 11.4141 13 11.5005C9.44439 11.487 7.68064 13.3934 7.50052 17C7.46616 13.5974 5.94501 11.4953 2 11.5005C5.52958 11.4505 7.48699 9.74718 7.50052 6Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
