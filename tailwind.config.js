/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'user-icon': "url('assets/images/userIcon.svg')",
        'user-circle-icon': "url('assets/images/userCircleIcon.svg')",
        'lock-icon': "url('assets/images/lockIcon.svg')",
        'mail-icon': "url('assets/images/mailIcon.svg')",
        'role-icon': "url('assets/images/roleIcon.svg')",
        'login-icon': "url('assets/images/loginIcon.svg')",
        darkness: "url('assets/images/darkness.webp')",
      },
      backgroundSize: {
        25: '25px',
        30: '30px',
      },
      backgroundPosition: {
        'left-center': '8px center',
      },
    },
  },
  plugins: [],
}
