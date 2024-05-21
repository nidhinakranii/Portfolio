import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="40"
      height="40"
      viewBox="0 0 30 30.000001"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path
            transform="translate(3.117588, 28.240581)"
            d="M 12.960938 -21.804688 C 9.660156 -27.554688 5.585938 -27.632812 1.996094 -27.632812 L 0.976562 -27.632812 L 0.976562 0 L 9.863281 0 L 9.863281 -0.773438 C 9.863281 -10.515625 3.179688 -5.992188 2.121094 -22.867188 L 9.742188 -9.457031 C 13.574219 -2.730469 21.765625 -6.441406 21.765625 0 L 22.785156 0 L 22.785156 -27.632812 L 13.898438 -27.632812 L 13.898438 -26.859375 C 13.898438 -17.324219 20.214844 -21.234375 21.519531 -5.992188 C 20.992188 -7.253906 20.257812 -8.640625 19.320312 -10.394531 C 17.609375 -13.574219 15.082031 -18.015625 12.960938 -21.804688 Z M 12.960938 -21.804688 "
          />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
