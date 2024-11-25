/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js", "./projects/**/*.html"],
  theme: {
    extend: {
      animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'fade-out': 'fadeOut 0.5s ease-in-out',
      'slide-in-left': 'slideInLeft 0.5s ease-out',
      'slide-in-right': 'slideInRight 0.5s ease-out',
      'slide-in-up': 'slideInUp 0.5s ease-out',
      'slide-in-down': 'slideInDown 0.5s ease-out',
      'slide-out-left': 'slideOutLeft 0.5s ease-in',
      'slide-out-right': 'slideOutRight 0.5s ease-in',
      'zoom-in': 'zoomIn 0.5s ease-in',
      'zoom-out': 'zoomOut 0.5s ease-in',
      'bounce-in': 'bounceIn 0.5s ease-out',
      'bounce-out': 'bounceOut 0.5s ease-in',
      'rotate-in': 'rotateIn 0.5s ease-in-out',
      'rotate-out': 'rotateOut 0.5s ease-in-out',
      'flip-in-x': 'flipInX 0.5s ease-in',
      'flip-out-x': 'flipOutX 0.5s ease-out',
      'flip-in-y': 'flipInY 0.5s ease-in',
      'flip-out-y': 'flipOutY 0.5s ease-out',
      'scale-up': 'scaleUp 0.5s ease-out',
      'scale-down': 'scaleDown 0.5s ease-in',
      'wiggle': 'wiggle 1s ease-in-out infinite',
      'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0' },
        },
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100px)', opacity: '0' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-180deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
        rotateOut: {
          '0%': { transform: 'rotate(0)', opacity: '1' },
          '100%': { transform: 'rotate(180deg)', opacity: '0' },
        },
        flipInX: {
          '0%': { transform: 'rotateX(90deg)', opacity: '0' },
          '100%': { transform: 'rotateX(0)', opacity: '1' },
        },
        flipOutX: {
          '0%': { transform: 'rotateX(0)', opacity: '1' },
          '100%': { transform: 'rotateX(90deg)', opacity: '0' },
        },
        flipInY: {
          '0%': { transform: 'rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0)', opacity: '1' },
        },
        flipOutY: {
          '0%': { transform: 'rotateY(0)', opacity: '1' },
          '100%': { transform: 'rotateY(90deg)', opacity: '0' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.8)', opacity: '0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "night",
      "cmyk",
    ],
  },
};



