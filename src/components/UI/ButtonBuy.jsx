

export default function ButtonBuy({ href, animation, small, ...props }) {
  let Css = " flex flex-col items-center cursor-pointer ";
  let smallCss = " btn";
  if (animation) {
    Css += " opacity-0 translate-y-20";
  } else {
    Css += " opacity-1 translate-y-0";
  }

  if (small) {
    Css += " ";
  } else {
    Css += " my-4";
  }
  return (
    <div {...props} id="cta" className={Css}>
      <a href={href} className={smallCss}>
        Buy
      </a>
    </div>
  );
}
