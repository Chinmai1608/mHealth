
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx, html}",
  './pages/**/*.{js,ts,jsx,tsx,html}',
  './components/**/*.{js,ts,jsx,tsx,html}',],
  theme: {
    extend: {
      backgroundImage: {
        loginbg : 'url("https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg?w=2000")',
        patient : 'url("https://i0.wp.com/www.amariapharmacy.in/wp-content/uploads/2018/05/general-health-care.jpg?fit=1500%2C999&ssl=1")',
        logobg : 'url("https://blog.ipleaders.in/wp-content/uploads/2020/01/Health-Insurance.jpg")',
        supplier :'url("https://www.shutterstock.com/image-photo/medicine-pills-capsules-syringe-on-260nw-2169142609.jpg")',
        doctor : 'url("https://media.istockphoto.com/id/1353646476/photo/medical-concept-flat-lay.jpg?b=1&s=170667a&w=0&k=20&c=coIJnw7n7qLqETaN-Vt0HSpmfAIa8KdYZiwnIw3Ccsg=")',
        dr: 'url("https://i.pinimg.com/736x/20/42/ae/2042aec9a2df42dab4a12d80a884730d.jpg")'
      }
    },
  },
  plugins: [],
}

