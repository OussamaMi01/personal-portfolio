import Head from 'next/head';

function PagesMetaHead({ 
  title = "Oussama Missaoui's Portfolio", 
  keywords = "portfolio, software development, web developer, digital creator, full stack developer, react, nextjs, javascript", 
  description = "Professional portfolio of Oussama Missaoui - A skilled software developer specializing in modern web technologies, creating smooth and responsive digital experiences." 
}) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Oussama Missaoui" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#4F46E5" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Oussama Missaoui's Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@OussamaMissaoui" />
    </Head>
  );
}

export default PagesMetaHead;