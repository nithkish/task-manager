export const themes = {
  light: {
    body:{
      backgroundColor : '#FAFAFA',
      color:'black'
    },
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#ffffff",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
    taskrow: {
      backgroundColor: "#E3ECF7",
      hoverBg:'#bfd4ed' //TODO
    },
    primary: {
      color: "#0074E8",
      buttonTextColor: "#ffffff",
      focus:'#E3ECF7',
      softBlue: "linear-gradient(to right,#E3ECF7, #F5F9FE)",
      labelTextColor:'#808080',
      backgroundColor: '#ffffff',
      softBg:'#ffffff'
    },
    primaryDark: {
      color: "#004D99",
    },
    secondary: {
      backgroundColor:"#EDEDED"
    }
  },
  dark: {
    body:{
      backgroundColor : '#12212e',
      color:'#ffffff'
    },
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
    taskrow: {
      backgroundColor: "#344d6c",
      hoverBg:'#111a26'
    },
    primary: {
      color: "#0074E8",
      buttonTextColor: "#ffffff",
      focus:'#E3ECF7',
      softBlue: "#1c3042",
      labelTextColor:'#808080',
      backgroundColor: '#1c3042',
      softBg:'#182736'
    },
    primaryDark: {
      color: "#2196f3",
    },
    secondary: {
      backgroundColor:"#506881"
    }
  },
};
