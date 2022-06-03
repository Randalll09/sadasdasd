import React from 'react';
import ActionButton from './ActionButton';
import { StyledNav } from './styles/styled.props';
const Actions = () => {
  return (
    <StyledNav style={{ display: 'flex' }}>
      <ActionButton
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M96 128C96.53 128 97.07 128 97.6 128C105 91.49 137.3 64 176 64C190.1 64 204.1 68.1 216.9 75.25C230.2 49.55 257.1 32 288 32C318.9 32 345.8 49.56 359.1 75.25C371 68.1 385 64 400 64C438.7 64 470.1 91.49 478.4 128C478.9 128 479.5 128 480 128C515.3 128 544 156.7 544 192C544 203.7 540.9 214.6 535.4 224H40.56C35.12 214.6 32 203.7 32 192C32 156.7 60.65 128 96 128H96zM16 283.4C16 268.3 28.28 256 43.43 256H532.6C547.7 256 560 268.3 560 283.4C560 356.3 512.6 418.2 446.9 439.8C447.6 442.4 448 445.2 448 448C448 465.7 433.7 480 416 480H160C142.3 480 128 465.7 128 448C128 445.2 128.4 442.4 129.1 439.8C63.4 418.2 16 356.3 16 283.4H16z" />
          </svg>
        }
      />
      <ActionButton
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M288 384c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C320 398.3 305.7 384 288 384zM416 256c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C448 270.3 433.7 256 416 256zM480 192c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C512 206.3 497.7 192 480 192zM288 320c0-17.67-14.33-32-32-32s-32 14.33-32 32c0 17.67 14.33 32 32 32S288 337.7 288 320zM320 224c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C352 238.3 337.7 224 320 224zM384 224c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32s-32 14.33-32 32C352 209.7 366.3 224 384 224zM352 320c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C384 334.3 369.7 320 352 320zM347.3 91.31l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0l-6.631 6.631c-35.15-26.29-81.81-29.16-119.6-8.779L170.5 61.25C132.2 22.95 63.65 18.33 21.98 71.16C7.027 90.11 0 114.3 0 138.4V464C0 472.8 7.164 480 16 480h32C56.84 480 64 472.8 64 464V131.9c0-19.78 16.09-35.87 35.88-35.87c9.438 0 18.69 3.828 25.38 10.5l16.61 16.61C121.5 160.9 124.3 207.6 150.6 242.7L144 249.4c-6.248 6.248-6.248 16.38 0 22.63l11.31 11.31c6.248 6.25 16.38 6.25 22.63 0l169.4-169.4C353.6 107.7 353.6 97.56 347.3 91.31z" />
          </svg>
        }
      />
      <ActionButton
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M176 288C220.1 288 256 252.1 256 208S220.1 128 176 128S96 163.9 96 208S131.9 288 176 288zM544 128H304C295.2 128 288 135.2 288 144V320H64V48C64 39.16 56.84 32 48 32h-32C7.163 32 0 39.16 0 48v416C0 472.8 7.163 480 16 480h32C56.84 480 64 472.8 64 464V416h512v48c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V224C640 170.1 597 128 544 128z" />
          </svg>
        }
      />
      <ActionButton
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M448 64H192C85.96 64 0 149.1 0 256s85.96 192 192 192h256c106 0 192-85.96 192-192S554 64 448 64zM247.1 280h-32v32c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24v-32L136 279.1C122.8 279.1 111.1 269.2 111.1 256c0-13.2 10.85-24.01 24.05-24.01L167.1 232v-32c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24v32h32c13.2 0 24.02 10.8 24.02 24C271.1 269.2 261.2 280 247.1 280zM431.1 344c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40s39.1 17.88 39.1 40S454.1 344 431.1 344zM495.1 248c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40c22.12 0 39.1 17.88 39.1 40S518.1 248 495.1 248z" />
          </svg>
        }
      />
      <ActionButton
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
          </svg>
        }
      />
      <ActionButton
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M504.1 71.03l-64-64c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L422.1 56L384 94.06l-55.03-55.03c-9.375-9.375-24.56-9.375-33.94 0c-8.467 8.467-8.873 21.47-2.047 30.86l149.1 149.1C446.3 222.1 451.1 224 456 224c6.141 0 12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L417.9 128L456 89.94l15.03 15.03C475.7 109.7 481.9 112 488 112s12.28-2.344 16.97-7.031C514.3 95.59 514.3 80.41 504.1 71.03zM208.8 154.1l58.56 58.56c6.25 6.25 6.25 16.38 0 22.62C264.2 238.4 260.1 240 256 240S247.8 238.4 244.7 235.3L186.1 176.8L144.8 218.1l58.56 58.56c6.25 6.25 6.25 16.38 0 22.62C200.2 302.4 196.1 304 192 304S183.8 302.4 180.7 299.3L122.1 240.8L82.75 280.1C70.74 292.1 64 308.4 64 325.4v88.68l-56.97 56.97c-9.375 9.375-9.375 24.56 0 33.94C11.72 509.7 17.86 512 24 512s12.28-2.344 16.97-7.031L97.94 448h88.69c16.97 0 33.25-6.744 45.26-18.75l187.6-187.6l-149.1-149.1L208.8 154.1z" />
          </svg>
        }
      />
    </StyledNav>
  );
};

export default Actions;
