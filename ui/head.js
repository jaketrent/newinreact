import Head from 'next/head'

const now = _ => new Date().getFullYear()

export default _ => (
  <Head>
    <title>New in React v16 | Jake Trent</title>
    <link rel="shortcut icon" type="image/png" href="/static/img/favicon.png" />

    <meta
      name="author"
      content="https://plus.google.com/115032056022257436849"
    />

    <meta name="HandheldFriendly" content="True" />
    <meta name="MobileOptimized" content="320" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* <meta name="description" content="" />
    <meta
      name="keywords"
      content=""
    />
    <meta name="copyright" content={`${now()} Jake Trent`} />

    <meta property="og:title" content="New in React" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://newinreact.com" />
    <meta
      property="og:description"
      content=""
    />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="New in React" />
    <meta
      name="twitter:description"
      content=""
    />
    <meta name="twitter:site" content="@jaketrent" />
    <meta name="twitter:creator" content="@jaketrent" />

    }*/}
  </Head>
)
