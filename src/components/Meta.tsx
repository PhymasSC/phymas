import Head from 'next/head'

type MetaProps = {
  title?: string
  keywords?: string
  description?: string
  ogTitle?: string
  ogType?: string
  ogUrl?: string
  ogImage?: string
}

const Meta = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}: MetaProps) => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      ></meta>
      <meta name='keywords' content={keywords}></meta>
      <meta name='description' content={description}></meta>
      <meta property='og:title' content={ogTitle} />
      <meta property='og:type' content={ogType} />
      <meta property='og:url' content={ogUrl} />
      <meta property='og:image' content={ogImage} />
      <meta charSet='utf-8'></meta>
      <link rel='icon' href='/favicon.ico'></link>
      <title>{title}</title>
    </Head>
  )
}
Meta.defaultProps = {
  title: 'Phymas',
  keywords:
    'Portfolio, Resume, Lau Sheng Cher, Phymas, Phymas.me, web developer, computer science, student',
  description:
    "Meet Lau Sheng Cher, a passionate computer science student seeking an internship. With impressive projects showcasing his potential as a full-stack web developer, connect with this rising talent in tech today. Browse Lau Sheng Cher's portfolio and discover how he can add value to your organization.",
  ogTitle: 'Phymas',
}
export default Meta
