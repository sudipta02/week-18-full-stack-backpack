import React from "react";
import Icon from "./IconBase";

export function ArrowUpIcon({
  ...props
}: {
  width: number;
  height: number;
  color: string;
  strokeWidth?: number;
  isFilled?: boolean;
  style?: any;
  tw?: string;
}) {
  return (
    <Icon
      path="M5.40879 0.188874C5.36019 0.129815 5.29912 0.0822487 5.22996 0.0495925C5.1608 0.0169363 5.08527 0 5.00879 0C4.93231 0 4.85677 0.0169363 4.78761 0.0495925C4.71845 0.0822487 4.65738 0.129815 4.60879 0.188874L0.108789 6.18887C0.0530757 6.26316 0.0191486 6.35149 0.0108096 6.44397C0.00247066 6.53645 0.0200492 6.62943 0.0615756 6.71248C0.103102 6.79553 0.166936 6.86538 0.245924 6.9142C0.324912 6.96302 0.415933 6.98887 0.508789 6.98887H9.50879C9.60164 6.98887 9.69267 6.96302 9.77165 6.9142C9.85064 6.86538 9.91447 6.79553 9.956 6.71248C9.99753 6.62943 10.0151 6.53645 10.0068 6.44397C9.99843 6.35149 9.9645 6.26316 9.90879 6.18887L5.40879 0.188874Z"
      pathWidth={10}
      pathHeight={7}
      {...props}
    />
  );
}

export default ArrowUpIcon;
