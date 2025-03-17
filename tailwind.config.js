/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      spacing: {
        px: "1px", // 1px
        1: "4px", // 4px
        2: "8px", // 8px
        3: "12px", // 12px
        4: "16px", // 16px
        5: "20px", // 20px
        6: "24px", // 24px
        7: "28px", // 28px
        8: "32px", // 32px
        9: "36px", // 36px
        10: "40px", // 40px
        11: "44px", // 44px
        12: "48px", // 48px
        14: "56px", // 56px
        16: "64px", // 64px
        20: "80px", // 80px
        24: "96px", // 96px
        28: "112px", // 112px
        32: "128px", // 128px
        36: "144px", // 144px
        40: "160px", // 160px
        44: "176px", // 176px
        48: "192px", // 192px
        52: "208px", // 208px
        56: "224px", // 224px
        60: "240px", // 240px
        64: "256px", // 256px
        72: "288px", // 288px
        80: "320px", // 320px
        96: "384px", // 384px
        104: "416px", // 416px
        128: "512px", // 512px
        144: "576px", // 576px
        160: "640px", // 640px
      },

      colors: {
        gray: {
          100: "#FAFAFA",
          200: "#EFF0F0",
          300: "#DDDEDF",
          400: "#B9BBBC",
          500: "#5C6265",
          600: "#333638",
          700: "#1B1D1E",
        },

        red: {
          100: "#F4E6E7",
          200: "#F3BABD",
          300: "#BF3B44",
        },

        green: {
          300: "#639339",
          200: "#CBE4B4",
          100: "#E5F0DB",
        },
      },

      fontSize: {
        xs: "12px", // 12px
        sm: "14px", // 14px
        base: "16px", // 16px
        lg: "18px", // 18px
        xl: "24px", // 24px
        "2xl": "32px", // 32px
      },

      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
