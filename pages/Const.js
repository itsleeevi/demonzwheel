export const State = {
  NOTSTARTED: 0,
  BETTING: 1,
  WAITING: 2,
  SPINNING: 3,
  COMPLETED: 4,
};

export const customTheme = {
  rangeInput: {
    thumb: { color: "#29112c" },
    track: { color: "#fff" },
  },
  button: {
    border: {
      radius: "4px",
    },
    hover: {
      color: "#81FCED",
    },
  },

  global: {
    colors: {
      border: "#29112C",
      placeholder: "#fff",
      text: "#fff",
    },
    focus: {
      shadow: {
        color: "#33FFFF",
      },
      border: {
        color: "#9933FF",
      },
    },
    elevation: {
      light: {
        large: "#9933FF",
      },
      dark: {
        large: "#9933FF",
      },
    },
    drop: {
      background: "#29112C",
      elevation: "large",
      extend: `
     
          font-size: 14px;
          border-bottom-left-radius: 1px;
          border-bottom-right-radius: 1px;
          li {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          }
          overflow: hidden;
        `,
    },
  },
};
