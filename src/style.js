const styles = {
  boxWidth: "xl:max-width-[1280] w-full",

  heading1:
    "font-bold text-[36px] md:font-extrabold md:text-[56px] leading-[66.8px] w-full",

  paragraph:
    "font-normal text-black text-[16px] md:text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",

  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",

  paddingY: "sm:py-16 py-6",

  paddingFooterY: "sm: pt-16 pt-6 sm:pb-10 pb-4",

  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",

  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,

  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
