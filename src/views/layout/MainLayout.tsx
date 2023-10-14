import Header from "../partials/Header";

const MainLayout = () => (
  <html>
    <head>
      <link href="./public/styles.css" rel="stylesheet" />
      <script src="https://unpkg.com/htmx.org@1.9.6"></script>
    </head>
    <body class="min-w-[1000px]">
      <Header />
    </body>
  </html>
);

export default MainLayout;
